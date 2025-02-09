import useGeoLocation from "react-ipgeolocation";
import countryToCurrency from "country-to-currency";
import currencyFormatter from "currency-formatter";

import Input from "../component/Input";
import { useState } from "react";
import { ScrollView, View } from "react-native";
import Page from "../component/Page";
import styles from "../style/Style";
import Button from "../component/Button";
const TitheScreen = ({ navigation }) => {
  const [amount, setAmount] = useState(0);
  const [percentage, setPercentage] = useState(null);
  const location = useGeoLocation();
  const currency = countryToCurrency[location.country];

  const handleBlur = () => {
    if (!amount) {
      alert("Please enter an amount");
      return;
    }

    if (isNaN(amount)) {
      alert("Please only numbers are allowed");
      return;
    }

    const pay = (parseInt(amount) * parseInt(10)) / parseInt(100);
    const money = currencyFormatter.format(pay, { code: currency });

    setPercentage(money);
  };

  return (
    <ScrollView style={styles.body}>
      <View style={styles.mt150}>
        <Page title='Tithe Calculator' />

        <Input
          handleBlur={handleBlur}
          value={amount}
          setValue={setAmount}
          title='Amount'
          percentage={percentage}
        />
        <Button
          title='Switch to Currency Converter'
          navigate={() => navigation.navigate("ConverterScreen")}
        />
      </View>
    </ScrollView>
  );
};

export default TitheScreen;
