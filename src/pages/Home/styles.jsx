import { StyleSheet } from "react-native";

export default StyleSheet.create({
  title: {
    fontWeight: "bold",
    fontSize: 40,
    marginBottom: 42,
  },

  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },

  button: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#000000",
    marginBottom: 12,
    width: 260,
    height: 50,
    color: "#FFFFFF",
    borderRadius: 4,
  },
  buttonText: {
    color: "#ffffff",
    fontSize: 20,
  },
});
