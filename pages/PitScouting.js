import React, {useState} from 'react'
import {View,Button,Text} from 'react-native'
import PitScoutingItem from '../components/PitScoutingItem'


const PitScouting = ({navigation}) => {
    let [weight, setWeight] = useState(0);
    let [height, setHeight] = useState(0);
    let [drivetrainType, setDriveTrain] = useState('Other');
    return(
        <View style={{flexDirection:"column", flex: 1}}>
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text style={{ fontSize: 50 }}>Put Match Selection Here</Text>
            </View>
            <View style={{flex:5,flexDirection: 'row'}}>
                <View style={{ flex: 1, backgroundColor: "red", justifyContent: 'center'}}>
                    <Button
                        title="Press me to get values"
                        onPress={() => {
                            console.log(weight)
                            console.log(height)
                            console.log(drivetrainType)
                        }}
                    />
                    <Text style={{ fontSize: 50 }}>Put Camera Button and Image Picker Here</Text>
                </View>
                <View style={{ flex: 1, backgroundColor: "green", justifyContent: "space-evenly"}}>
                    <PitScoutingItem textValue="Weight" bottomDivider="true" keyboardType="numeric" hasDropdown="false" val={weight.toString()} onChange={(weight)=>{setWeight(weight)}} textStyle={{fontSize: 20}}/>
                    <PitScoutingItem textValue="Height" bottomDivider="true" keyboardType="numeric" hasDropdown="false" val={height.toString()} onChange={(height) => { setHeight(height) }} textStyle={{ fontSize: 20 }}/>
                    <PitScoutingItem textValue="Drivetrain Type" hasDropdown="true" val={drivetrainType} onChange={(drivetrain) => { setDriveTrain(drivetrain) }} textStyle={{ fontSize: 20 }}/>
                    
                </View>
            </View>
            <View style={{flex:5,flexDirection:'row'}}>
                <View style={{ flex: 1, backgroundColor: "yellow", alignItems: 'center', justifyContent: 'center' }}>
                    <Text style={{ fontSize: 50 }}>Photo 1 of Bot Here</Text>
                </View>
                <View style={{ flex: 1, backgroundColor: "purple", alignItems: 'center', justifyContent: 'center'  }}>
                    <Text style={{ fontSize: 50 }}>Photo 2 of Bot Here</Text>
                </View>
            </View>
            
        </View>
    )
}

export default PitScouting