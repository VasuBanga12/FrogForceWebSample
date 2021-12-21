import React from "react";
import { View, Text, Button, Image, TouchableOpacity, Dimensions } from 'react-native';
import SQLite from 'react-native-sqlite-storage'

//Open the database once for all components 
global.db = SQLite.openDatabase(
        { name: 'Swamp.db' },
        () => { },
        error => {
                console.log("Database Open Error: " + error);
        }
);

/*************************************************
 * Define Global Functions that can be called by  
 * any component 
 **************************************************/

/**
* Execute sql queries
* 
* @param sql
* @param params
* 
* @returns {resolve} results
*/
ExecuteQuery = (sql, params = []) => new Promise((resolve, reject) => {
        global.db.transaction((trans) => {
                trans.executeSql(sql, params, (trans, results) => {
                        console.log("Home:DB Query: " + sql.substring(0, 30) + "--Completed!");
                        resolve(results);
                },
                        (error) => {
                                reject(error);
                        });
        });
});

/**
* Await promise return of sql queries
* 
* @param sql
* @param params
* 
* @returns {resolve} results
*/
ExecuteCommand = async (sql) => {
        try {
                let nonReturnQry = await ExecuteQuery(sql, []);
                console.log("Home:DB Cmd: " + sql.substring(0, 30) + "--Completed!");
        } catch (err) {
                console.log("Error in Settings:ExecuteCommand: " + sql + " " + err.message);
        }
}

/**
* Await promise return of sql queries
* 
* @param sql
* @param params
* 
* @returns {resolve} results
*/
ExecuteCommandWithParms = async (sql, parms = []) => {
        try {
                let nonReturnQry = await ExecuteQuery(sql, parms);
                //console.log("Home:DB Cmd: " + sql.substring(0,30) + "--Completed!");
        } catch (err) {
                console.log("Error in Settings:ExecuteCommand: " + sql + " " + err.message);
        }
}


const Home = ({ navigation }) => {
        return (
                <View style={{ flex: 8, flexDirection: 'column' }}>
                        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center'  }}>
                                <Text style={{ fontSize: 50 }}>Put Match Selection Here</Text>
                        </View>
                        <View style={{ flex: 5, flexDirection: 'row' }}>
                                <View style={{ flex: 1, backgroundColor: 'red', alignItems: 'center', justifyContent: 'center' }}>
                                        <Text style={{ fontSize: 50 }}>Photo of Robot Goes Here</Text>
                                </View>
                                <View style={{ flex: 1, backgroundColor: 'blue', alignItems: 'center', justifyContent: 'center' }}>
                                        <Text style={{ fontSize: 50 }}>Team To Scout</Text>
                                </View>
                        </View>
                        <View style={{ flex: 3, alignItems: 'center', justifyContent: 'center'  }}>
                                <Text style={{ fontSize: 50 }}>Table of All the Teams Go Here</Text>
                        </View>
                </View>
        )
}

export default Home;