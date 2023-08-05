import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TouchableOpacity, TouchableHighlight, TouchableWithoutFeedback, Image, FlatList, SafeAreaView, ScrollView} from 'react-native';
import React, { useState} from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

import HomeScreen from './src/components/Home';
import UsersScreen from './src/components/Users';

// import Title from "./src/components/Title";
// import User from "./src/components/User";
// import Users from "./src/components/Users";
// import Header from './src/components/Header';

// function HomeScreen() {
//   return(
//     <View style = {{flex:1, alignItems: "center", justifyContent: "center"}}>
//       <Text>HomeScreen</Text>
//     </View>
//   )
// }

const Stack = createNativeStackNavigator();

// function App(){
//   return(
//     <NavigationContainer>
//       <Stack.Navigator initialRouteName='Home'>
//         <Stack.Screen 
//         name= "Home" 
//         component={HomeScreen}
//         options={{
//           title: "Anasayfa",
//         }} />
//         <></>
//         <Stack.Screen name= "Users" component={UsersScreen} options ={{title:"Kullanıcılar"}}/>
//       </Stack.Navigator>
//     </NavigationContainer>
//   )
// }
  //Array State
  // const [users, setUsers] = useState([
  //   { id: 1, name: "Ahmet"},
  //   {
  //     id: 2,
  //     name: "Mehmet",
  //   },
  // ]);
  // const handlePress = () => {
  //   setUsers((prev)=>[
  //     ...prev,
  //     { id: Mathfloor(Math.random()* 1000 ), name: Math.floor(Math.random() * 1000)},
  //   ]);
  // };
  // State
  // const[name, setName] = useState("Mehmet");
  // const[age, setAge] = useState(29);
  // const[isVisible, setIsVisible] = useState(true);
  return (
    <SafeAreaView style={styles.container}>
      {/* Array State */}
      {/* <FlatList 
      data = {users}
      keyExtractor={(item) => item.id}
      renderItem={({item})=> (
        <View style = {styles.item}>
        <Text style={styles.text}>{item.name}</Text>
        </View>
      )}
      />
      <Button title= "Add" onPress={handlePress}/> */}
      {/* State */}
      {/* <Button
      title ={isVisible ? "Gizle": "Göster"}
      onPress = {() => setIsVisible(!isVisible)}
      />
      
      {isVisible && (

      <>
      <Text>İsim:{name}</Text>
      <Text>Yaş:{age}</Text>
      <Button title = "İsmi Değiştir" onPress={() => setName("Ahmet")}>Click</Button>
      <Button title = "Yaşı Değiştir" onPress={() => setAge("30")}>Click</Button>
      </>
      )} */}
         {/* ScrollView -> https://reactnative.dev/docs/scrollview */}
      {/* <ScrollView style={styles.scrollView}>
        <Text style={styles.text}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Text>
        <Text style={styles.text}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Text>
        <Text style={styles.text}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Text>
        <Text style={styles.text}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Text>
        <Text style={styles.text}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Text>
        <Text style={styles.text}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Text>
        <Text style={styles.text}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Text>

      </ScrollView> */}
        {/* Flatlist kullanımı https://reactnative.dev/docs/flatlist
        const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Second Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
  },
];
const Item = ({title}: ItemProps) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
  </View>
); */}
      {/* Image Kullanımı */}
      {/* <Image 
      resizeMode ="strech"
      style={{
        width:"100%",
        height: 180,
        borderWidth: 2,
        borderColor: "red",
      }}
      source ={{
        uri: "https://travellersworldwide.com/wp-content/uploads/2022/11/Shutterstock_1568592469-768x480.jpg.webp",
      }}/> */}
      {/* require("./assets/wallpaper.jpg") -> dosyanın içerisinden resime erişme */}
        {/* Buttonların Kullanımı */}
     {/* <Button title = "Click Button" onPress={handleClick}/>
     <TouchableOpacity onPress={handleClick}>         
      <Text>Click TouchableOpacity</Text>
     </TouchableOpacity> */}
     {/* <TouchableHighlight
      activeOpacity={0.6}
      underlayColor="#DDDDDD"
      onPress={() => alert('Pressed!')}>
     <Text>Click TouchableHighlight</Text>
</TouchableHighlight>; */}
     {/* <TouchableWithoutFeedback onPress={() => alert("Pressed!")}>
      <Text>Click TouchableWithoutFeedback</Text>
     </TouchableWithoutFeedback> */}

      {/* PropTypes Kullanımı */}
      {/* <Title text = "React" color= "red" number= {2} isVisible={true}/> */}

       {/* Props */}
      {/* <Title text = "React" color= "red" number= {2}/>
      <Title text = "React Native" color = "green" number={1}/>
      <Title text = "JavaScript" color = "blue" number={3}/>
      <User data= {{id:1 , name: "Mehmet"}}/>
      <Users data = {["Ahmet","Mehmet","Ayşe","Fatma"]}/> */}
      
      {/* PropTypes Kullanımı */}
      {/* <User data= {{id:1 , name: "Mehmet"}}/> */}
      {/* <Users data = {["Ahmet","Mehmet","Ayşe","Fatma"]}/> */}

        {/* Componentler */}
       {/* <Header/> 
      <Title>React Native</Title> */}

         {/* Flex ve FlexDirection Kullanımı */}
      {/* <View style = {styles.box1}>
        <View style = {styles.child4}></View>
        <View style = {styles.child5}></View>
      </View>
      <View style = {styles.box2}>
        <View style ={styles.child1}></View>
        <View style ={styles.child2}></View>
        <View style ={styles.child3}></View>
      </View> */}




      {/* 1.Stillendirme, StyleSheet Kullanımı
      <View style = {[styles.box, styles.box1]}>
        <Text style = {[styles.text, styles.text1]}>React Native</Text>
      </View>
      
      <View style = {[styles.box, styles.box2]}>
        <Text style = {[styles.text, styles.text2]}>React</Text>
      </View>
      <View>
        <View style = {styles.box}>
          <Text style = {[styles.text, styles.text3]}>Javascript</Text>
        </View>
      </View> */}
      <StatusBar style="auto" />
    </SafeAreaView>
  );

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor:"#fff",
    alignItems: "center",
    justifyContent: "center",
  }
})
// const styles = StyleSheet.create({ // componentlere stylesheet ataması yapıp öyle stillendiriyoruz
//   container: {
//     flex:1,
//     justifyContent: "center",
//     alignItems: "center",
    // flex: 1,
    // backgroundColor: 'yellow',
    // flexDirection: "column",
  // },
  //1.Stillendirme, StyleSheet
  // box: {
  //   width: 200,
  //   height:200,
  //   backgroundColor:"red",
  //   marginBottom: 10,
  // },
  // box1:{
  //   backgroundColor: "blue"

  // },
  // box2: {
  //   backgroundColor: "bisque"
  // },
  // text: {
  //   color: "#fff",
  //   fonSize: 30,
  //   backgroundColor:"gray",
  //   textAlign: "center",
  // },
  // text1: {
  //   backgroundColor: "black",
  //   color: "#000"
  // },
  // text2: {
  //   backgroundColor: "aquamarine",
  //   color: "#000"
  // },
  // text3: {
  //   backgroundColor:"yellow",
  //   color: "#000"
  // }

  //2.Flex ve FlexDirection Kullanımı
  // box1:{
  //   backgroundColor:"gray",
  //   flex: 1, // 1/2lik alanın 1 birimlik alanını almış eğer 2 yapsakydık 2/3lük alanını kaplayacaktı
  //   flexDirection: "row",
  // },
  // child4: {
  //   flex: 1,
  //   backgroundColor: "#ec4c4c",
  // },
  // child5: {
  //   flex:1,
  //   backgroundColor: "azure",
  // },
  // box2: {
  //   backgroundColor: "bisque",
  //   flex: 1, //alanları doğru ayarlayıp güzel bir ui tasarımı yapabiliriz
  //   flexDirection:"row",
  // },
  // child1:{
  //   flex: 1,
  //   backgroundColor:"#ffc107",
  // },
  // child2:{
  //   flex: 2,
  //   backgroundColor:"#0ac556",
  // },
  // child3:{
  //   flex: 1,
  //   backgroundColor: "#4630eb",
  // },
// });

export default App;