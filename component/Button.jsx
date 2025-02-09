import { Text, TouchableOpacity } from "react-native";
import styles from "../style/Style";
import ReactNativeText from "@kaloraat/react-native-text";

const Button = ({ title, navigate, bgColor = "blue", color = "#fff" }) => {
  return (
    <TouchableOpacity onPress={navigate} style={styles.button}>
      <ReactNativeText medium bold color={color}>
        {title}
      </ReactNativeText>
    </TouchableOpacity>
  );
};

export default Button;
