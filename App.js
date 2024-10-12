import React from 'react';
import { StyleSheet, Text, View, NativeModules, NativeEventEmitter, Button } from 'react-native';

export default function App() {
  const { ExampleModule } = NativeModules
  const eventEmitter = new NativeEventEmitter(ExampleModule);

  const subscription = eventEmitter.addListener("onMessagePrinted", (event) => {
    console.log('On Message Event Emmited: ', event.value)
  })

  return (
    <View style={styles.container}>
      <Text>Native module app!</Text>
      <Button title="Click me" onPress={() => ExampleModule.printMessage("Olá Teste", 17)} />

      <Button 
        title="Click me for returnMessage" 
        onPress={() => {
          ExampleModule.returnMessage("João")
          .then(message => console.log(message))
          .catch((err) => console.error(err))
        }} />

      <Button title="Click me for eventMessage" onPress={() => ExampleModule.eventMessage(17)} />

      <Button title="Remove eventMessage" onPress={() => subscription.remove()} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
