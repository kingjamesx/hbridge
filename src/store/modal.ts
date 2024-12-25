import { create } from "zustand";

export interface WalletState {
  walletModal: boolean;
  updateWalletModal: () => void;
}

export const useWalletStore = create<WalletState>((set) => ({
  walletModal: false,
  updateWalletModal: () =>
    set((state) => ({ walletModal: !state.walletModal })),
}));

export default useWalletStore;
