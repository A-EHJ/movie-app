import React from "react";
import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import "../app/global.css";
// @ts-ignore: side-effect import has no type adeclarations

const RootLayout = () => {
  return (
    <SafeAreaView>
      <View>
        <Text className="text-3xl bg-blue-100">RootLayout</Text>
      </View>
    </SafeAreaView>
  );
};

export default RootLayout;
