import { GlassView } from "expo-glass-effect";
import { Text, View } from "react-native";
import { withUniwind } from "uniwind";

const UniwindGlassView = withUniwind(GlassView);

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <View className="bg-red-500 rounded-full p-4">
        <Text>Edit app/index.tsx to edit this screen.</Text>
        <View className="w-hairline h-4 bg-blue-500" />
      </View>
      <Text className="my-4">With Uniwind</Text>
      <UniwindGlassView className="p-4 rounded-full">
        <Text>Hello World</Text>
      </UniwindGlassView>
      <Text className="my-4">With Style</Text>
      <UniwindGlassView style={{ padding: 16, borderRadius: 9999 }}>
        <Text>Hello World</Text>
      </UniwindGlassView>
    </View>
  );
}
