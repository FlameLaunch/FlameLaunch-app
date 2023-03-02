export default {
  name: 'metamask',
  network: null,
  /**
   * interface rpc
   * @returns {josnrpc}
   */
  provider() {
    // chain proxy
    let provider = null;
    if (typeof window.ethereum !== 'undefined') {
      provider = window.ethereum;
    } else if (window.web3) {
      provider = window.web3.currentProvider;
    } else {
      throw new Error('no install metamask, install: https://metamask.io/');
    }
    return provider;
  },
  /**
   * isConnect
   * @returns {boolean}
   */
  isConnected() {
    return this.provider().isConnected();
  },
  /**
   * connectWallet
   */
  async connect() {
    await this.request('wallet_requestPermissions', [{ eth_accounts: {} }]);
    await this.request('eth_requestAccounts');
  },
  /**
   *  set Network
   * @param {network} network
   * @returns {Promise}
   */
  async setNetwork(network) {
    let err = await this.request('wallet_switchEthereumChain', [{ chainId: network.chainId }]).catch((error) => error);
    if (err && err.code === 4902) {
      // console.warn(`metamask is not find network ${network.chainName || network.chainId} `);
      err = await this.request('wallet_addEthereumChain', [
        {
          chainId: network.chainId,
          rpcUrls: network.rpcUrls,
          chainName: network.title || network.name,
          nativeCurrency: {
            name: network.name,
            symbol: network.symbol, // 2-6 characters long
            decimals: 18,
          },
          blockExplorerUrls: network.blockExplorerUrls || [],
        },
      ]).catch((error) => error);
    }
    if (err) {
      // console.error(`metamask is set network ${network} error: ${err}`);
      return Promise.reject(err);
    }
    this.network = network;
  },
  /**
   * add Token
   * @param {{ address, symbol, image, decimals = 18, type = 'ERC20' }} param
   */
  async watchAsset({ address, symbol, image, decimals = 18, type = 'ERC20' }) {
    return await this.request('wallet_watchAsset', {
      type,
      options: {
        address,
        symbol,
        image,
        decimals,
      },
    });
  },
  /**
   * account Address
   * @returns {string}
   */
  address() {
    return this.provider().selectedAddress;
  },
  /**
   * send REQUEST
   * @param {string} method
   * @param {any} params
   */
  async request(method, params) {
    return await this.provider().request({ method, params });
  },
};
