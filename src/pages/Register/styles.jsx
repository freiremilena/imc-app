import { StyleSheet } from "react-native";

export default StyleSheet.create({
  title: {
    fontWeight: "bold",
    fontSize: 20,
    marginBottom: 42,
  },

  titleModal: {
    fontWeight: "bold",
    fontSize: 20,
    marginTop: 26,
  },

  profileModal: {
    maxWidth: 200,
    maxHeight: 200,
    marginBottom: 40,
    marginTop: 60,
    borderRadius: 100,
  },

  modalContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(0,0,0,0.2)",
  },

  modal: {
    width: 320,
    height: 580,
    alignItems: "center",
    backgroundColor: "#ffffff",
    borderRadius: 20,
  },

  modalInformation: {
    fontSize: 14,
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
    color: "#000000",
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
