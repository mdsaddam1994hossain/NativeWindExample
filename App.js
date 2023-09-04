import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <View className="flex-1 justify-center items-center bg-green-400 ">
      <StatusBar backgroundColor="red" />
      <Text className="text-white font-semibold text-lg text-center">
        Hurra! Open up App.js to start working on your app!
      </Text>
    </View>
  );
}
