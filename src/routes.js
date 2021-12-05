import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import Home from "./pages/Home/Home";
import ImcData from "./pages/ImcData/IMCApp";
import Register from "./pages/Register/Register";

const Stack = createStackNavigator();
function AppStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="ImcData" component={ImcData} />
        <Stack.Screen name="Register" component={Register} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default AppStack;
