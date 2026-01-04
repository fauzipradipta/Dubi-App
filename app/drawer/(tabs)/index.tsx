import { StyleSheet, Text, View } from "react-native";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Home Screen</Text>

      {/* <Link href="/about" style={styles.Button}>Go to About Screen</Link> */}
    </View>
  );
}

const styles = StyleSheet.create({
  Button: {
    marginTop: 20,
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: '#1E90FF',
    borderRadius: 5,
    color: '#FFFFFF',
    fontSize: 16,
  },
});