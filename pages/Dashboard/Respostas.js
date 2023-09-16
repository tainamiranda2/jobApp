import { View,Text } from "react-native";
import { LineChart } from 'react-native-chart-kit';

export default function Respostas (){
    const data = {
        labels: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio'],
        datasets: [
          {
            data: [20, 45, 28, 80, 99],
            color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
            strokeWidth: 2,
          },
        ],
      };

    return(
        <View>
            <Text>Respostas</Text>
            <LineChart
                data={data}
                width={300}
                height={200}
                chartConfig={{
                backgroundGradientFrom: '#fff',
                backgroundGradientTo: '#fff',
                color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
                strokeWidth: 2,
        }}
      />
        </View>
    )
}