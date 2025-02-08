import useGeoLocation from "react-ipgeolocation";
import countryToCurrency from "country-to-currency";
import currencyFormatter from "currency-formatter";

import Input from "../component/Input";
import { useState } from "react";
const TitheScreen = () => {
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

    console.log(money);

    setPercentage(money);
  };

  return (
    <Input
      handleBlur={handleBlur}
      value={amount}
      setValue={setAmount}
      title='Amount'
      percentage={percentage}
    />
  );
};

export default TitheScreen;
