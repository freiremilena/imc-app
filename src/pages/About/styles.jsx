import { StyleSheet } from "react-native";

export default StyleSheet.create({
  title: {
    fontWeight: "bold",
    fontSize: 24,
    marginBottom: 42,
  },

  subtitle: {
    fontSize: 20,
    fontWeight: "500",
    marginBottom: 15,
  },

  txt: {
    fontSize: 20,
    fontStyle: "italic",
    textAlign: "center",
    margin: 16,
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
