import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import Title from "./src/components/Title";
import User from "./src/components/User";
import Users from "./src/components/Users";
// import Header from './src/components/Header';

const App = () => {
  return (
    <View style={styles.container}>

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
    </View>
  );
}

const styles = StyleSheet.create({ // componentlere stylesheet ataması yapıp öyle stillendiriyoruz
  container: {
    flex:1,
    justifyContent: "center",
    alignItems: "center",
    // flex: 1,
    // backgroundColor: 'yellow',
    // flexDirection: "column",
  },
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
});

export default App;