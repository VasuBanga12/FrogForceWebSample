import React from 'react'
import {View, Text, Button} from 'react-native'

const init = () =>{
    let sqlPrompt;
    console.log("Database Initializing");
    console.log("Dropping Existing Tables");
    ExecuteCommand("DROP TABLE IF EXISTS Events");
    ExecuteCommand("DROP TABLE IF EXISTS Teams");
    ExecuteCommand("DROP TABLE IF EXISTS Settings");
    ExecuteCommand("DROP TABLE IF EXISTS PitScouting");
    console.log("Tables Dropped. Opening new tables")
    sqlPrompt = "CREATE TABLE IF NOT EXISTS PitScouting(team_num INTEGER PRIMARY KEY, weight INTEGER, height INTEGER, drivetrain INTEGER)"
    ExecuteCommand(sqlPrompt)
    console.log("Pit Scouting Table Made")
    sqlPrompt = "CREATE TABLE IF NOT EXISTS Settings(key varchar(15) PRIMARY KEY, val varchar(30)) "
    ExecuteCommand(sqlPrompt)
    console.log("Settings table made")
    sqlPrompt = "CREATE TABLE IF NOT EXISTS Teams(team_num INTEGER PRIMARY KEY, team_name VARCHAR(30))"
    ExecuteCommand(sqlPrompt)
    console.log("Teams table made")
    sqlPrompt = "CREATE TABLE IF NOT EXISTS Events(event_id INTEGER PRIMARY KEY, event_key VARCHAR(15))"
}


const databaseInit = () => {
    return (
        <View>
            <Button title="Press me to cause Vasu pain" onPress={init}/>
        </View>
    )
}


export default databaseInit;

