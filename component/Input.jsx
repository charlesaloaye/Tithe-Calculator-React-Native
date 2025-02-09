import { Text, TextInput, View } from "react-native";
import styles from "../style/Style";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import ReactNativeText from "@kaloraat/react-native-text";
const Input = ({
  title,
  autoCorrect = false,
  autoComplete = "off",
  keyboardType = "decimal-pad",
  value,
  setValue,
  handleBlur,
  percentage,
}) => {
  return (
    <KeyboardAwareScrollView contentContainerStyle={styles.formContainer}>
      <ReactNativeText center large style={styles.percentage}>
        {percentage}
      </ReactNativeText>

      <View style={styles.horizontalMove}>
        <Text>{title}</Text>
        <TextInput
          style={styles.input}
          keyboardType={keyboardType}
          autoCorrect={autoCorrect}
          autoComplete={autoComplete}
          placeholder='Enter amount...'
          value={value}
          onChangeText={(value) => setValue(value)}
          onBlur={handleBlur}
        />
      </View>
    </KeyboardAwareScrollView>
  );
};

export default Input;
