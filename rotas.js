import { NavigationContainer } from "@react-navigation/native"
import { createStackNavigator } from "@react-navigation/stack"
import Login from "./pages/login/Login";
import Menu from "./pages/menu/Menu";

export default function Rotas(){

    const Stack=createStackNavigator();

    return (
        <NavigationContainer >
            <Stack.Navigator initialRouteName="Login">
                <Stack.Screen name="Login" component={Login}/>
                <Stack.Screen name="Menu" component={Menu}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}