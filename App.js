//import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
//import Login from './pages/login/Login';
//import Rotas from './rotas';
import { NavigationContainer } from "@react-navigation/native"
import { createStackNavigator } from "@react-navigation/stack"
import Login from "./pages/login/Login";
import Menu from "./pages/menu/Menu";

export default function App() {
  const Stack=createStackNavigator();
  return (
    
   <NavigationContainer >
            <Stack.Navigator initialRouteName="Login">
                <Stack.Screen name="Login" component={Login}/>
                <Stack.Screen name="Menu" component={Menu}/>
            </Stack.Navigator>
        </NavigationContainer>

   
  );
}

/*const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
*/