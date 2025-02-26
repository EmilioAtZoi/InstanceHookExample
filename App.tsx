// SomePage.tsx
import React from "react";
import { View, Button, Text, StyleSheet } from "react-native";
import { ModalComponent } from "./ModalComponent/ModalComponent";
import { useModal } from "./ModalComponent/useModal";

export const App: React.FC = () => {
  const modal1 = useModal();
  const modal2 = useModal();

  return (
    <>
      <View style={styles.container}>
        <ModalComponent modal={modal1}>
          <Text>This is Modal 1</Text>
          <Button
            title="Replace with Modal 2"
            onPress={() => {
              modal1.close();
              modal2.open();
            }}
          />
        </ModalComponent>
        <Button title="Open Modal 1" onPress={modal1.open} />

        <ModalComponent modal={modal2}>
          <Text>This is Modal 2</Text>
          <Button
            title="Replace with Modal 1"
            onPress={() => {
              modal2.close();
              modal1.open();
            }}
          />
        </ModalComponent>
        <Button title="Open Modal 2" onPress={modal2.open} />
      </View>
      <ModalComponent>
        <Text>This is Modal 3</Text>
        <Text>This Modal is self managed and doesn't receive a instance</Text>
      </ModalComponent>
      <Text style={styles.statusText}>
        {`Modal 1 is ${modal1.isVisible ? "open" : "closed"} and Modal 2 is ${
          modal2.isVisible ? "open" : "closed"
        }`}
      </Text>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  statusText: {
    flex: 1,
    alignSelf: "center",
    marginTop: 20,
    fontSize: 16,
    color: "red",
    fontWeight: "bold",
  },
});
