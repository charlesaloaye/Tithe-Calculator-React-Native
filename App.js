import { StatusBar } from "expo-status-bar";
import TitheScreen from "./screens/TitheScreen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import ConverterScreen from "./screens/ConverterScreen";

const App = () => {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name='Tithe Calculator' component={TitheScreen} />
        {/* <Stack.Screen name='Currency Converter' component={ConverterScreen} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
