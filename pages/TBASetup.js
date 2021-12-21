import React, { useState } from 'react'
import {View, Text, Button} from 'react-native'
import axios from 'axios'
// import CheckBox from '@react-native-community/checkbox';

//TBA Token 
const gblToken = "AmlQfa3QBCCadNWB4synlSoHpN3Rby971VVRCUOGlDXS2daf8p5zJV8MtWIdnjld";
const gblServer = "https://www.thebluealliance.com/api/v3/";
const gblHeader = { headers: { 'X-TBA-Auth-Key': gblToken, 'User-Agent': 'Request' }, json: true };
const year = 2021;

const TBASetup = ({navigation})=>{
    // const [isSelected, setSelection] = useState(false);
    // Btw checkbox is exclusive to android



    return(
        <View>
            <Text style={{fontSize: 55}}>Set up TBA:</Text>
            <Button title='Click me to get Events' onPress={getEvents}/>
            {/* <CheckBox 
                value={isSelected}
                onValueChange={setSelection}
            /> */}

        </View>
    )

}
const getEvents = () => {
    let url = gblServer + "team/frc503/events/" + year + "/simple"
    axios.get(url, gblHeader)
        .then(response => {
            let data = response.data
            for(let i = 0; i < data.length; i++){
                console.log(data[i].name)
            }
        }

        )
}

export default TBASetup;