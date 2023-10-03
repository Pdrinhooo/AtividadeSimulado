import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet, Image } from 'react-native';
import Espada from './src/pages/Espada';
import Armadura from './src/pages/Armadura';
import Arma from './src/pages/Arma';
import { NavigationContainer } from '@react-navigation/native';

const Stack = createNativeStackNavigator();

export default function App() {
    return (
        
        <NavigationContainer>
            
            <Stack.Navigator screenOptions={{headerShown: false}}>
                <Stack.Screen
                    name='Espada'
                    component={Espada}
                    />
                <Stack.Screen
                    name='Armadura'
                    component={Armadura}
                    />
                <Stack.Screen
                    name='Arma'
                    component={Arma}
                    />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#282828",
        alignItems: "center",
        justifyContent: "center",
    },
    img: {
        width: 200,
        height: 200,
        marginBottom: '20px'
    },
});
