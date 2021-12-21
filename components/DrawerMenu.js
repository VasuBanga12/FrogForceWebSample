import React from 'react'
import { DrawerContentScrollView, DrawerItemList, DrawerItem } from '@react-navigation/drawer'
import { Button, SafeAreaView, Text } from 'react-native'
import { navigationRef } from '../pages/RootNav'

const DrawerMenu = ({ props, navigation }) => {

    return (
        <DrawerContentScrollView {...props}>
            <DrawerItem
                label="Home"
                onPress={() => {
                    navigationRef.navigate('Home')
                    navigation.closeDrawer()
                }}
            />
            <DrawerItem
                label="About"
                onPress={() => {
                    navigationRef.navigate('About')
                    navigation.closeDrawer()
                }}
            />
            <DrawerItem
                label="Pit Scouting"
                onPress={() => {
                    navigationRef.navigate('PitScouting')
                    navigation.closeDrawer()
                }}
            />
            <DrawerItem 
                label="TBA Setup"
                onPress={()=>{
                    navigationRef.navigate('TBASetup')
                    navigation.closeDrawer()
                }}
            />
            <DrawerItem
                label="Database Init"
                onPress={() => {
                    navigationRef.navigate('InitializeDatabase')
                    navigation.closeDrawer()
                }}
            />
        </DrawerContentScrollView>
    )
}
export default DrawerMenu;