import { View, Text, TextInput } from "react-native";
import styles from "../style/Style";
const Select = ({ title }) => {
  return (
    <View>
      <TextInput
        style={[styles.input, styles.inputPadding, styles.horizontalMove]}
      >
        {title}
      </TextInput>
    </View>
  );
};

export default Select;
