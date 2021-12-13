import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import Home from "./pages/Home/Home";
import ImcData from "./pages/ImcData/IMCApp";
import Register from "./pages/Register/Register";
import About from "./pages/About/About";
import Results from "./pages/Results/Results";

const Stack = createStackNavigator();
function AppStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="ImcData" component={ImcData} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="About" component={About} />
        <Stack.Screen name="Results" component={Results} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default AppStack;
