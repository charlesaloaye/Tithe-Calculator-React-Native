import { ScrollView, View } from "react-native";

import Input from "../component/Input";
import { useState } from "react";
import Page from "../component/Page";
import styles from "../style/Style";
import Button from "../component/Button";
import Select from "../component/Select";
const ConverterScreen = ({ navigation }) => {
  const [amount, setAmount] = useState(0);
  const [fromCurrency, setFromCurrency] = useState("USD");
  const [toCurrency, setToCurrency] = useState("NGN");

  const handleBlur = () => {
    if (!amount) {
      alert("Please enter an amount to convert");
      return;
    }

    if (isNaN(amount)) {
      alert("Please only numbers are allowed");
      return;
    }

    if (!fromCurrency || !toCurrency) {
      alert("From currency to currency is required");
      return;
    }
  };

  return (
    <ScrollView style={[styles.body]}>
      <View style={styles.mt100}>
        <Page title='Currency Converter' />

        <Input
          handleBlur={handleBlur}
          value={amount}
          setValue={setAmount}
          title='Amount'
        />
        <Select title='From' />
        <Select title='To' />

        <Button
          title='Switch to Tithe Calculator'
          navigate={() => navigation.navigate("TitheScreen")}
        />
      </View>
    </ScrollView>
  );
};

export default ConverterScreen;
