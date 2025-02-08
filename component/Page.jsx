import ReactNativeText from "@kaloraat/react-native-text";

const Page = ({ title, color = "#000" }) => {
  return (
    <ReactNativeText color={color} center large>
      {title}
    </ReactNativeText>
  );
};

export default Page;
