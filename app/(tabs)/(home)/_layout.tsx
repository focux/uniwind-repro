import { Stack } from "expo-router";

export default function HomeLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="another"
        options={{
          headerTransparent: true,
          headerShadowVisible: false,
          headerTitle: "Transacciones",
          headerLargeTitle: true,
          headerSearchBarOptions: {
            placement: "automatic",
            placeholder: "Search",
            onChangeText: () => {},
          },
        }}
      />
    </Stack>
  );
}
