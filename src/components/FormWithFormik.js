import {View, Text, TextInput, StyleSheet, Button} from 'react-native';
import React, {useState} from "react";
import { Formik } from "formik";

const FormWithFormik = () => {
    const { values, handlesubmit, handlechange} =useFormik({
        initialValues: {
            username:"",
            email:"",
            password:"",
            passwordConfirm:"",
        }
    })
    return(
        <View style =
        <View style={StyleSheet.container}>
            <View style={styles.item}>
            <Text>{JSON.stringify(form,null,2)}</Text>
            <TextInput
            style={styles.input}
            placeholder='username'
            value={form.username}
            onChangeText={(text) => handleChange (text, "username")} 
            />
            </View>
            <View stlye = {styles.item}>
                <TextInput
                style ={styles.input}
                autoCapitalize="none"
                keyboardType="email-address"
                placeholder="e-mail"
                value={form.email}
                onChangeText={(text) => handleChange (text, "email")}
                />
            </View>
            <View style={styles.item}>
            <TextInput
            style={styles.input}
            placeholder='password'
            secureTextEntry
            value={form.username}
            onChangeText={(text) => handleChange (text, "password")}
            />
            </View><View style={styles.item}>
            <TextInput
            style={styles.input}
            placeholder='set password again'
            secureTextEntry
            value={form.username}
            onChangeText={(text) => handleChange (text, "passwordConfirm")}
            />
            </View>

            <View stlye = {styles.item}>
                <Button title = "Register"/>
            </View>
            
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        width:"100%",
        padding: 20,
    },
    item:{
marginBottom:6,
    },
    input:{
        borderWidth:1,
        borderColor:"#999",
        padding: 10,
        fontSize: 24,
        width: "100%",
    }
});

export default Form;