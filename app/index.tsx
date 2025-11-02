import { Text, View } from "react-native";

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
    </View>
  );
}
