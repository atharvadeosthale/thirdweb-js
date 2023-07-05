import { assertWindowEthereum } from "@thirdweb-dev/wallets";

export function useInstalledWallets() {
  let isMetamaskInstalled = false;
  let isCoinbaseWalletInstalled = false;
  let isZerionWalletInstalled = false;
  let isTrustWalletInstalled = false;

  const window_: Window | undefined = globalThis?.window;
  if (assertWindowEthereum(window_)) {
    isMetamaskInstalled = !!window_.ethereum?.isMetaMask;
    isCoinbaseWalletInstalled =
      !!window_.ethereum?.isCoinbaseWallet ||
      !!window_.ethereum?.providers?.some((p) => p.isCoinbaseWallet);
    isZerionWalletInstalled = !!window_.ethereum?.isZerion;
    isTrustWalletInstalled = !!window_.ethereum?.isTrust;
  }

  return {
    metamask: isMetamaskInstalled,
    coinbaseWallet: isCoinbaseWalletInstalled,
    trustWallet: isTrustWalletInstalled,
    zerionWallet: isZerionWalletInstalled,
  };
}
