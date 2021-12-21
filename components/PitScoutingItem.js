import React from 'react'
import { View, Text, TextInput } from 'react-native'
import { Dropdown } from 'react-native-material-dropdown-v2-fixed'

const PitScoutingItem = (props) => {
    if (props.hasDropdown.valueOf() == "true".valueOf()) {
        const driveSelection = [{
            value: 'Swerve'
        }, {
            value: 'Tank'
        }, {
            value: 'Meccanum'
        }, {
            value: 'Other'
        }]
        return (
            <View style={{ flex: 1, flexDirection: 'row', borderBottomWidth: props.bottomDivider ? 2 : 0, padding: 10 }}>
                <View style={{ flex: 2, justifyContent: "center" }}>
                    <Text style={props.textStyle}>
                        {props.textValue}
                    </Text>
                </View>
                <View style={{ flex: 1 }} />
                <View style={{ flex: 3, justifyContent: "center" }}>
                    <Dropdown
                     label="Drivetrain"
                      data={driveSelection}
                      value={props.val}
                      onChangeText = {props.onChange}
                      />
                </View>
            </View>
        )
    } else {
        return (
            <View style={{ flex: 1, flexDirection: 'row', borderBottomWidth: props.bottomDivider ? 2 : 0, padding: 10 }}>
                <View style={{ flex: 2, justifyContent: "center" }}>
                    <Text style={props.textStyle}>
                        {props.textValue}
                    </Text>
                </View>
                <View style={{ flex: 1 }} />
                <View style={{ flex: 3, justifyContent: "center" }}>
                    <TextInput
                        style={{
                            borderWidth: 2
                        }}
                        keyboardType={props.keyboardType}
                        value={props.val}
                        onChangeText={props.onChange}
                    />
                </View>
            </View>
        )
    }
}

export default PitScoutingItem