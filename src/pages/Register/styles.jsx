import { StyleSheet } from "react-native";

export default StyleSheet.create({
  title: {
    fontWeight: "bold",
    fontSize: 20,
    marginBottom: 42,
  },

  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },

  input: {
    marginBottom: 12,
    padding: 14,
    width: 260,
    height: 50,
    color: "#FFFFFF",
    backgroundColor: "#A9A9A9",
    borderRadius: 4,
  },

  button: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#000000",
    height: 40,
    width: 110,
    marginTop: 36,
    borderRadius: 4,
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 16,
  },
});
