// ModalComponent.tsx
import React, { ReactNode } from "react";
import {
  Modal,
  View,
  Text,
  Button,
  StyleSheet,
  TouchableWithoutFeedback,
} from "react-native";
import { useModal, ModalInstance } from "./useModal";

interface ModalComponentProps {
  modal?: ModalInstance;
  children?: ReactNode;
  onClickOutside?: () => void;
}

export const ModalComponent: React.FC<ModalComponentProps> = ({
  modal,
  children,
  onClickOutside,
}) => {
  // Use the provided modal instance or create a new one internally
  const { isVisible, open, close } = modal || useModal();

  return (
    <>
      <Modal
        transparent
        visible={isVisible}
        animationType="slide"
        onRequestClose={close}
      >
        <TouchableWithoutFeedback onPress={onClickOutside || close}>
          <View style={styles.overlay}>
            <TouchableWithoutFeedback>
              <View style={styles.modalContent}>
                <Text style={styles.title}>My Modal</Text>
                {children}
                <Button title="Close" onPress={close} />
              </View>
            </TouchableWithoutFeedback>
          </View>
        </TouchableWithoutFeedback>
      </Modal>
      {/* Render a button to open the modal if no external modal instance is provided */}
      {!modal && <Button title="Open Modal" onPress={open} />}
    </>
  );
};

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    justifyContent: "center",
    alignItems: "center",
  },
  modalContent: {
    width: 300,
    padding: 20,
    backgroundColor: "white",
    borderRadius: 10,
    alignItems: "center",
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
});
