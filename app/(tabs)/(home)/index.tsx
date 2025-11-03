import { Link } from "expo-router";
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
      <Link href="/(tabs)/(home)/another">
        <View className="bg-blue-500 rounded-full p-4">
          <Text>Edit app/index.tsx to edit this screen.</Text>
        </View>
      </Link>
    </View>
  );
}
