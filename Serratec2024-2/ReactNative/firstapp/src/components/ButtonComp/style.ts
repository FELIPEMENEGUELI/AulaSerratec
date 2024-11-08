import { Dimensions, StyleSheet } from "react-native";
const { width } = Dimensions.get('window');

export const styles = StyleSheet.create({
  styleButton: {
    width: "100%",
    height: 60,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
  },

  text: {
    color: "#fff",
    fontSize: width < 767 ? 20 : 50,
    fontWeight: "bold",
  },
});
