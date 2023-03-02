import Web3 from "~/plugins/web3/index"
//import { ERC20__factory } from "~/plugins/web3/typechain/factories/@openzeppelin/contracts/token/ERC20/ERC20__factory.ts";
import Vue from "vue";
const network = {
  chainId:5,
  rpcUrls: ['https://endpoints.omniatech.io/v1/eth/goerli/public']
}

export const mutations = {

}


export const actions = {
  async connectWallet({ commit }) {
    if (!/0x[0-9a-zA-Z]{40}/.test(this.state.userId)) {
      let web3 = new Web3()
      web3.init(network)
      await web3.checkNetwork()
      console.log(network)
      await web3.connectWallet().catch(console.log)
      console.log(network)
      Vue.prototype.$web3 = web3
      let addrs = web3.wallet?.address() || ""
      if (addrs.length > 0) {
        commit('update', { userId: web3.wallet?.address().toLocaleLowerCase() || "" })
      }
      console.log(1,await web3.getProvider())
    }
  },
}
