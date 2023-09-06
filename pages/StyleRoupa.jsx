import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  scroll: {
    backgroundColor: "rgba(242,196,208,1)"
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 10,
  },
  menu: {
    width: 50,
    height: 50
  },
  camisa: {
    width: "100%"
  },
  headerDados:{
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 10,
    alignItems: "center"
  },
  camisaTexto: {
    fontSize: 28,
  },
  botaoCompra:{
    marginLeft: "70%",
    marginVertical: 15
  },
  botaoProvador:{
    marginTop: 15
  }
})

export default styles;