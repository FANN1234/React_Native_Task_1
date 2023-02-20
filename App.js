import { Text, View, StyleSheet,TouchableOpacity } from 'react-native';
import   {useRef}  from "react";



const styles = StyleSheet.create({

  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center', 
  },

  section: {
    flex: 1,
    justifyContent: "space-evenly", 
    alignItems: "center"
  },

  exampleContainer: {
    backgroundColor: "lightblue",
    width: 125,
    height: 100,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'space-evenly',
    elevation: 20,
    shadowColor: 'black',
    shadowOffset: {width: -2,height: 4},
    shadowOpacity: 0.2,
    shadowRadius: 3  
  },

  exampleButton: {
   backgroundColor: "skyblue",
    width: 125,
    height: 50,
    margin: 20,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 20,
    shadowColor: 'black',
    shadowOffset: {width: -2,height: 4},
    shadowOpacity: 0.2,
    shadowRadius: 3
 
  },

  text: {
    fontSize: 16,
    color: 'grey', 
  },

  title: {
    justifyContent:'center',
    alignSelf: 'center',
    fontSize:20,
    color: 'brown'
  },

  titlebox: {
    backgroundColor:'turquoise',
    width: '90%',
    height: 50,
    margin: 20,
    marginTop: 45,
    borderRadius: 10,
    alignSelf: 'center',
    justifyContent: 'center',
    elevation: 20,
    shadowColor: 'black',
    shadowOffset: {width: -2,height: 4},
    shadowOpacity: 0.2,
    shadowRadius: 3 
  }
  
});

export default function App() {
  const cache = useRef({
    click1: false,
    click2: false,
    click3: false,
    click4: false,
    });
    const ref1 = useRef();
    const ref2 = useRef();
    const ref3 = useRef();
    const ref4 = useRef();
  return (
    <View style={{flex: 1,backgroundColor:'lightgrey'}}>
    
    <View style={styles.titlebox}>
    <Text style={styles.title} >Hybrid Mobile Application {'\n'}                TASK 1</Text></View>
    <View style={styles.container}>
    
    
      <View style={styles.section}>

          <TouchableOpacity
          style ={styles.exampleButton}
          onPress={() => {
          cache.current.click1 = !cache.current.click1;
          ref1.current.setNativeProps({
          style: { backgroundColor: cache.current.click1 ? "lightgreen" : "orange"}
          });
          }}>
          <Text style={styles.text}>Button 1</Text>
          </TouchableOpacity>
          
          <TouchableOpacity style ={styles.exampleButton}
          onPress={() => {
          cache.current.click2 = !cache.current.click2;
          ref2.current.setNativeProps({
          style: { backgroundColor: cache.current.click2 ? "darkgray" : "brown"}
          });
          }}>
          <Text style={styles.text}>Button 2</Text>
          </TouchableOpacity>
          
          <TouchableOpacity style ={styles.exampleButton}
          onPress={() => {
          cache.current.click3 = !cache.current.click3;
          ref3.current.setNativeProps({
          style: { backgroundColor: cache.current.click3 ? "purple" : "yellow"}
          });
          }}>
          <Text style={styles.text}>Button 3</Text>
          </TouchableOpacity>

          <TouchableOpacity style ={styles.exampleButton}
          onPress={() => {
          cache.current.click4 = !cache.current.click4;
          ref4.current.setNativeProps({
          style: { backgroundColor: cache.current.click4 ? "pink" : "violet"}
          });
          }}>
          <Text style={styles.text}>Button 4</Text>
          </TouchableOpacity>
                   
      </View>
               
      <View style={styles.section}>
            <View ref={ref1} style={[styles.exampleContainer, {justifyContent: 'center'}]}>
            <Text style = {styles.text}>BOX 1</Text>
            </View>
            <View ref={ref2} style={[styles.exampleContainer, {justifyContent: 'center'}]}>
            <Text style = {styles.text}>BOX 2</Text>
            </View>
            <View ref={ref3} style={[styles.exampleContainer, {justifyContent: 'center'}]}>
            <Text style = {styles.text}>BOX 3</Text>
            </View>
            <View ref={ref4} style={[styles.exampleContainer, {justifyContent: 'center'}]}>
            <Text style = {styles.text}>BOX 4</Text>
            </View>
            
      </View>
      </View>      
    </View>
  
  );
}
