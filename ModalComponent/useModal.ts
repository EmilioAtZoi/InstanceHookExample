// useModal.ts
import { useState, useCallback } from "react";

export interface ModalInstance {
  isVisible: boolean;
  open: () => void;
  close: () => void;
  toggle: () => void;
}

export const useModal = (): ModalInstance => {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  const open = useCallback((): void => setIsVisible(true), []);
  const close = useCallback((): void => setIsVisible(false), []);
  const toggle = useCallback((): void => setIsVisible((prev) => !prev), []);

  return {
    isVisible,
    open,
    close,
    toggle,
  };
};
