import React from "react";
import {View, Text} from "react-native"

function HomeScreen(){
    return (
        <View style={{
            flex:1,
            alignItems: "center",
            justifyContent: "center"
        }}>
            <Text>Home Screen</Text>
            <Button title = "Users" onPress={()=> navigation.navigate("Users")}/>
        </View>
    )
}

export default HomeScreen;