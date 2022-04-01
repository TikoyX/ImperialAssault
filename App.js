import {StyleSheet, Image} from 'react-native';
import CreateBottomTabNavigator from "@react-navigation/bottom-tabs/src/navigators/createBottomTabNavigator";
import {NavigationContainer} from "@react-navigation/native";
import RebelScreen from "./src/screens/RebelScreen";
import EmpireScreen from "./src/screens/EmpireScreen";
import ItemScreen from "./src/screens/ItemScreen";
import CreateNativeStackNavigator from "@react-navigation/native-stack/src/navigators/createNativeStackNavigator";
import HeroScreen from "./src/screens/HeroScreen";
import CalculatorScreen from "./src/screens/CalculatorScreen";

const Tab = CreateBottomTabNavigator();
const Stack = CreateNativeStackNavigator();

function Rebel({ navigation }) {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name={"Heroes"}
                options={{ headerShown: false }}
                component={RebelScreen}
            />
            <Stack.Screen
                name={"Hero"}
                component={HeroScreen}
                options={({route}) => ({title: route.params.heroData.name})}
            />
        </Stack.Navigator>
    )
}

export default function App() {
    return (
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen
                    name="Rebel"
                    component={Rebel}
                    options={{
                        headerShown: false,
                        tabBarIcon: ({color}) => (
                            <Image style={styles.icon} source={require("./assets/icons/rebel_icon.png")}/>
                        )
                    }}
                />
                <Tab.Screen
                    name="Empire"
                    component={EmpireScreen}
                    options={{
                        headerShown: false,
                        tabBarIcon: ({color}) => (
                            <Image style={styles.icon} source={require("./assets/icons/empire_icon.png")}/>
                        )
                    }}
                />
                <Tab.Screen
                    name="Items"
                    component={ItemScreen}
                    options={{
                        headerShown: false,
                        tabBarIcon: ({color}) => (
                            <Image style={styles.icon} source={require("./assets/icons/damage_icon.png")}/>
                        )
                    }}
                />
                <Tab.Screen
                    name="Calculator"
                    component={CalculatorScreen}
                    options={{
                        headerShown: false,
                        tabBarIcon: ({color}) => (
                            <Image style={styles.icon} source={require("./assets/icons/Gaming-Dice-icon.png")}/>
                        )
                    }}
                    />
            </Tab.Navigator>
        </NavigationContainer>
    );
}

const styles = StyleSheet.create({
    icon: {
        height: 22,
        width: 22
    },
});
