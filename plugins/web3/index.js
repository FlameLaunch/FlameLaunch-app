import { BigNumber, FixedNumber, utils, providers, Contract, ContractFactory } from 'ethers';
import { getWallet, wallets } from './wallet'; // 钱包
/**
 * 获取网络 id0
 * @param {*} network
 * @returns
 */
function getNetworkId(network) {
  const networkId = network && network.chainId ? network.chainId : network;
  return networkId && typeof networkId.toString().includes('0x') ? parseInt(networkId, 16) : networkId;
}

class Web3 {
  BigNumber = BigNumber;
  FixedNumber = FixedNumber;
  utils = utils; // 工具函数
  wallets = wallets; // 所有钱包名字

  provider = null; // 供应商
  signer = null; // 签名者
  wallet = null; // 钱包
  network = null; // 网络
  walletProvider = null; // 钱包 prover

  /**
   * 初始化 web3
   * @param {*} network
   */
  init(network) {
    if (network) {
      this.setNetwork(network);
      this.initProvider();
    }
  }

  /**
   * 初始化钱包
   * @param {*} wallet
   */
  initWallet(wallet) {
    const walleter = getWallet(wallet); // 设置钱包
    if (walleter) {
      // 存在并且链接了
      this.wallet = walleter; // 设置钱包
      if (walleter.isConnected()) {
        this.initWalletProvider();
        this.initSigner();
      }
    }
  }

  /**
   * 设置网络
   * @param {object} network
   */
  setNetwork(network = this.network) {
    this.network = network;
  }

  /**
   * 获取 provider
   * @param {string,object} options
   * @returns
   */
  getProvider(network = this.network) {
    let provider = null;
    const fallbackConfig = [];
    if (network && network.rpcUrls) {
      network.rpcUrls.forEach((item) => {
        fallbackConfig.push({
          stallTimeout: 1 * 500,
          weight: 2,
          priority: 1,
          provider: providers.getDefaultProvider(item),
        });
      });
    }
    provider = fallbackConfig.length > 0 ? new providers.FallbackProvider(fallbackConfig, 1) : null;
    return provider;
  }

  /**
   * 初始化 provider
   */
  initProvider() {
    this.provider = this.getProvider();
  }

  /**
   * 初始化 wallet provder
   */
  initWalletProvider() {
    this.walletProvider = new providers.Web3Provider(this.wallet.provider(), 'any'); // 钱包 prover
  }

  /**
   * 初始化 Signer
   */
  initSigner() {
    this.signer = this.walletProvider.getSigner(); // 签名者
  }

  /**
   * 检测 provider
   */
  async checkProvider() {
    if (!this.provider) this.initProvider();
    if (this.provider) await this.provider.ready;
  }

  /**
   * 检测 wallet provider
   */
  async checkWalletProvider() {
    if (!this.wallet) {
      throw new Error('not connect wallet!');
    } else if (!this.walletProvider && this.wallet) {
      this.initWalletProvider();
    }
    if (this.walletProvider) await this.walletProvider.ready;
  }

  /**
   * 检测 Signer
   */
  async checkSigner() {
    await this.checkWalletProvider();
    if (!this.signer && !this.wallet) {
      throw new Error('not connect wallet!');
    } else if (!this.signer && this.wallet) {
      await this.initSigner();
    }
    if (this.signer) await this.signer.ready;
  }

  /**
   * 检测网络
   */
  async checkNetwork() {
    const chainId = getNetworkId(this.network);
    if (this.walletProvider) {
      const network = await this.walletProvider.getNetwork();
      if (chainId !== network) {
        await this.wallet.setNetwork(this.network);
        await this.checkWalletProvider();
      }
    }
    if (this.signer) {
      const id = await this.signer.getChainId();
      if (chainId !== id) {
        await this.initSigner(); // 初始化
        await this.checkSigner();
      }
    }
    if (this.provider) {
      if (chainId !== this.network.chainId) {
        await this.initProvider(); // 初始化
        await this.checkProvider();
      }
    }
  }

  /**
   * 链接钱包
   * @param {string} name
   */
  async connectWallet(name = 'metamask') {
    const walleter = getWallet(name); // 设置钱包
    if (!walleter) return Promise.reject(new Error(`${name} Wallet is not supported !`));
    this.wallet = walleter;
    await this.wallet.connect(); // 链接钱包
    await this.checkNetwork(); // 检测网络
    await this.initWalletProvider(); // 初始化 wallet provder
    await this.initSigner(); // 初始化 wallet Signer
  }

  /**
   * 断开钱包
   */
  async disconnectWallet() {
    this.wallet = null;
    if (this.walletProvider) await this.walletProvider.ready;
    if (this.signer) await this.signer.ready;
    this.walletProvider = null;
    this.signer = null;
  }

  /**
   * 获取合约
   * @param {address} addr
   * @param {Abi} abi
   * @returns
   */
  async getContract(addr, abi) {
    if (this.wallet) await this.checkWalletProvider();
    await this.checkProvider();
    return new Contract(addr, abi, this.walletProvider || this.provider); // 获取合约
  }

  /**
   * 获取 Signer 合约
   * @param {address} addr
   * @param {Abi} abi
   * @returns
   */
  async getSignerContract(addr, abi) {
    await this.checkWalletProvider();
    await this.checkSigner();
    return new Contract(addr, abi, this.signer); // 新建合约
  }

  /**
   * 创建一个合约
   * @param {Abi} abi
   * @param {bytecode} bytecode
   * @returns
   */
  async createContract(abi, bytecode) {
    await this.checkSigner();
    return new ContractFactory(abi, bytecode, this.signer); // 创建一个合约
  }
}

export default Web3;
