import ReactNativeText from "@kaloraat/react-native-text";
import { View, StatusBar } from "react-native";

const Page = ({ title, color = "#000957" }) => {
  return (
    <View>
      <ReactNativeText color={color} center large>
        {title}
      </ReactNativeText>

      <StatusBar backgroundColor='#000957' barStyle={"default"} />
    </View>
  );
};

export default Page;
