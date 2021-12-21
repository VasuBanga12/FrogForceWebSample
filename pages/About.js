import React from "react"
import {View, Text} from "react-native"

const About = (navigation) => {

    return(
        <View style={{justifyContent: "center", alignItems: "center"}}>
            <Text style={{textAlign: "center",fontSize: 100}}>
                This is the about page
            </Text>
        </View>
    )
}

export default About;