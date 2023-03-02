import metamask from './metamask';

export const wallets = ['metamask'];

export function getWallet(name) {
  switch (name) {
    case 'metamask':
      return metamask;
    default:
      return null;
  }
}
