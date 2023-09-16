import { View,Text } from "react-native";
import { BarChart } from 'react-native-chart-kit';

export default function Resultado (){
    const data = {
        labels: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio'],
        datasets: [
          {
            data: [20, 45, 28, 80, 99],
          },
        ],
      };
    
      const chartConfig = {
        backgroundGradientFrom: '#fff',
        backgroundGradientTo: '#fff',
        color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
        strokeWidth: 2, // optional, default 3
      };
    return(
        <View>
            <Text>Resultado</Text>
                 
      <BarChart
        style={{ width: 300, height: 200 }}
        data={data}
        width={300}
        height={200}
        chartConfig={chartConfig}
      />
        </View>
    )
}