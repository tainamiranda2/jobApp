//import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
//import Login from './pages/login/Login';
//import Rotas from './rotas';
import { NavigationContainer } from "@react-navigation/native"
import { createStackNavigator } from "@react-navigation/stack"
import Login from "./pages/login/Login";
import Menu from "./pages/menu/Menu";
import Cargos from "./pages/cargos/Cargos";
import Candidatura from "./pages/candidatura/Candidatura";
import Dashboard from "./pages/dashboard/Dashboard";
import Regioes from "./pages/dashboard/Regioes";
import Motivo from "./pages/dashboard/Motivo";
import Respostas from "./pages/dashboard/Respostas";
import Resultados from "./pages/dashboard/Resultados";
import Empresas from "./pages/empresas/Empresas";
import Notificacao from "./pages/notificacao/Notificacao";

import Global from './styles/Global';
//import { Container } from './style';
export default function App() {
  const Stack=createStackNavigator();
  return (
    
   <NavigationContainer >

            <Stack.Navigator style={Global.container} initialRouteName="Login">
                <Stack.Screen name="Login" component={Login}/>
                <Stack.Screen name="Menu" component={Menu}/>
                <Stack.Screen name="Cargos" component={Cargos}/>
                <Stack.Screen name="Candidatura" component={Candidatura}/>
                <Stack.Screen name="Dashboard" component={Dashboard}/>
                <Stack.Screen name="Empresas" component={Empresas}/>
                <Stack.Screen name="Notificacao" component={Notificacao}/>
                <Stack.Screen name="Motivos" component={Motivo}/>
                <Stack.Screen name="Regioes" component={Regioes}/>
                <Stack.Screen name="Respostas" component={Respostas}/>
                <Stack.Screen name="Resultados" component={Resultados}/>

           
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