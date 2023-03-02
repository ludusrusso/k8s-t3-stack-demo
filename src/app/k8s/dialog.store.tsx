import { create } from "zustand";
import { type ReactNode } from "react";

type DialogState = {
  dialog: ReactNode | null;
  open: boolean;
  setDialog: (dialog: ReactNode) => void;
  closeDialog: () => void;
};

export const useDialogStore = create<DialogState>((set) => ({
  dialog: null,
  open: false,
  closeDialog: () => set({ open: false }),
  setDialog: (dialog) => set({ dialog, open: true }),
}));
