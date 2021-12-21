import 'react-native-gesture-handler'
import React from 'react';
import { View, Image, TouchableOpacity, Dimensions, LogBox } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer, useNavigationContainerRef } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Home from './pages/Home';
import About from './pages/About';
import { navigationRef } from './pages/RootNav'
import DrawerMenu from './components/DrawerMenu'
import PitScouting from './pages/PitScouting';
import TBASetup from './pages/TBASetup';
import InitDatabase from './pages/InitDatabase';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();


const Main = ({ navigation }) => {
  LogBox.ignoreAllLogs(true)
  return (
    <View style={{ flex: 1 }}>
      <View style={{ flex: 1 }}>
        <View style={{ flex: 1, backgroundColor: "#006b37", flexDirection: "row" }}>
          <TouchableOpacity style={{ flex: 2, padding: "4%" }} onPress={() => {
            navigationRef.navigate('Home')
          }}>
            <Image source={require('./images/ff503fulllogo.png')} style={{
              flex: 1,
              height: (Dimensions.get("window").height),
              width: (Dimensions.get("window").width / 2),
              resizeMode: "contain",
              alignSelf: "center",
              justifyContent: "center",
            }} />
          </TouchableOpacity>
          <View style={{ flex: 2 }} />
          <TouchableOpacity style={{ flex: 1 }} onPress={() => {
            navigation.dispatch(navigation.toggleDrawer());
          }}>
            <Image source={require('./images/WhiteMenuIcon.jpg')} style={{
              flex: 1,
              height: (Dimensions.get("window").height),
              width: (Dimensions.get("window").width / 10),
              resizeMode: "contain",
              alignSelf: "center",
              justifyContent: "center",
            }} />
          </TouchableOpacity>
        </View>
      </View>
      <NavigationContainer style={{ flex: 1 }} ref={navigationRef} independent={true}>
        <View style={{ flex: 8 }}>
          <Stack.Navigator style={{ flex: 1 }}>
            <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} style={{ flex: 1 }} />
            <Stack.Screen name="About" component={About} options={{ headerShown: false }} style={{ flex: 1 }} />
            <Stack.Screen name="PitScouting" component={PitScouting} options={{ headerShown: false}} style={{flex: 1}} />
            <Stack.Screen name="TBASetup" component={TBASetup} options={{headerShown: false}} style={{flex: 1}}/>
            <Stack.Screen name="InitializeDatabase" component={InitDatabase} options={{ headerShown: false }} style={{ flex: 1 }}></Stack.Screen>
          </Stack.Navigator>
        </View>
      </NavigationContainer>
    </View>
  )
}


export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
      drawerContent={(props)=><DrawerMenu {...props} />}
      >
        <Drawer.Screen name="Home" component={Main} options={{ headerShown: false }}></Drawer.Screen>
      </Drawer.Navigator>
    </NavigationContainer>
  );
}