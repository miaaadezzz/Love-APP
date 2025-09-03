import { StyleSheet, Text, View } from "react-native";

export default function ArchiveScreen() {
  return (
    <View style={styles.container}>
      <Text>Archive Screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});