import { Text, TouchableOpacity } from "react-native";
import styles from "../style/Style";
import ReactNativeText from "@kaloraat/react-native-text";

const Button = ({ title }) => {
  return (
    <TouchableOpacity style={styles.button}>
      <ReactNativeText medium bold color='#ff0000'>
        {title}
      </ReactNativeText>
    </TouchableOpacity>
  );
};

export default Button;
