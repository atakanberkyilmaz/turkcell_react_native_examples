import {View, Text, TextInput, StyleSheet, Button} from 'react-native';
import React, {useState} from "react";
import { Formik } from "formik";
import validationSchema from './validation';
import FormWithFormik from "./src/components/FormWithFormik"

const FormWithFormik = () => {
    const { values, errors, touched, isSubmitting, handleSubmit, handleChange, handleBlur} =useFormik({
        initialValues: {
            username:"",
            email:"",
            password:"",
            passwordConfirm:"",
        },
        onSubmit:async (values, bag) => {
           await new Promise((r)=> setTimeout(r,1000));

           if  (values.email === "test@test.com"){
            return bag.setFieldError({email: "Bu mail adresi zaten kullanılıyor."});
           }
           
           bag.resetForm();

           console.log(values);
           console.log(bag);
        },
        validationSchema,
    });
    return(
        <View style={styles.container}>
            <Box alignItems= "center">
                <FormControl isInvalid w="100%">
                    <FormControl.Label>Username</FormControl.Label>
                    <Input 
                    placeholder="Username"
                    value={values.username}
                    onChangeText={handleChange("username")}
                    onBlur={handleBlur("username")}
                    editable={!isSubmitting}
                    />
                    <FormControl.ErrorMessage leftIcon ={<WarningOutlineIcon size="xs"/>} >
                        {errors.username}
                    </FormControl.ErrorMessage>
                </FormControl>
            </Box>
            <Box alignItems= "center">
                <FormControl isInvalid w="100%">
                    <FormControl.Label>Email</FormControl.Label>
                    <Input 
                    placeholder="email"
                    value={values.email}
                    onChangeText={handleChange("email")}
                    onBlur={handleBlur("email")}
                    editable={!isSubmitting}
                    />
                    <FormControl.ErrorMessage leftIcon ={<WarningOutlineIcon size="xs"/>} >
                        {errors.email}
                    </FormControl.ErrorMessage>
                </FormControl>
            </Box>
            <Box alignItems= "center">
                <FormControl isInvalid w="100%">
                    <FormControl.Label>Password</FormControl.Label>
                    <Input 
                    placeholder="password"
                    value={values.password}
                    onChangeText={handleChange("password")}
                    onBlur={handleBlur("password")}
                    editable={!isSubmitting}
                    />
                    <FormControl.ErrorMessage leftIcon ={<WarningOutlineIcon size="xs"/>} >
                        {errors.password}
                    </FormControl.ErrorMessage>
                </FormControl>
            </Box>
            <Box alignItems= "center">
                <FormControl isInvalid w="100%">
                    <FormControl.Label>Password Confirm</FormControl.Label>
                    <Input 
                    placeholder="passwordConfirm"
                    value={values.passwordConfirm}
                    onChangeText={handleChange("passwordConfirm")}
                    onBlur={handleBlur("passwordConfirm")}
                    editable={!isSubmitting}
                    />
                    <FormControl.ErrorMessage leftIcon ={<WarningOutlineIcon size="xs"/>} >
                        {errors.username}
                    </FormControl.ErrorMessage>
                </FormControl>
            </Box>
            {/* <View style= {styles.item}>
            <TextInput
            style={styles.input}
            placeholder='username'
            value={form.username}
            onChangeText={(text) => handleChange (text, "username")}
            onBlur={handleBlur("username")} 
            />
            {errors.username && touched.username && (
                <Text style = {styles.error}>{errors.username}</Text>
            )}
            </View>
            
            <View stlye = {styles.item}>
                <TextInput
                style ={styles.input}
                autoCapitalize="none"
                keyboardType="email-address"
                placeholder="e-mail"
                value={form.email}
                onChangeText={(text) => handleChange (text, "email")}
                onBlur={handleBlur("email")}
            />
            {errors.email && touched.email && (
                <Text style = {styles.error}>{errors.email}</Text>
            )}
            </View>
            <View style={styles.item}>
            <TextInput
            style={styles.input}
            placeholder='password'
            secureTextEntry
            value={form.username}
            onChangeText={(text) => handleChange (text, "password")}
            onBlur={handleBlur("password")}
            />
            {errors.password && touched.password && (
                <Text style = {styles.error}>{errors.password}</Text>
            )}
            </View><View style={styles.item}>
            <TextInput
            style={styles.input}
            placeholder='set password again'
            secureTextEntry
            value={form.username}
            onChangeText={(text) => handleChange (text, "passwordConfirm")}
            onBlur={handleBlur("passwordConfirm")}
            />
            {errors.passwordConfirm && touched.passwordConfirm && (
                <Text style = {styles.error}>{errors.passwordConfirm}</Text>
            )}
            </View>

            <View stlye = {styles.item}>
                <Button 
                title = "Register"
                onPress={handleSubmit}
                disabled={isSubmitting}
                />
            </View> */}
            
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