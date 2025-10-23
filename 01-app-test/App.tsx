import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View,ImageBackground, Alert } from 'react-native';
import FAB from './components/FAB';

export default function App() {
  const showAlert = () =>
  Alert.alert(
    'Alert Title',
    'My Alert Msg',
    [
      {
        text: 'Cancel',
        onPress: () => Alert.alert('Cancel Pressed'),
        style: 'cancel',
      },
    ],
    {
      cancelable: true,
      onDismiss: () =>
        Alert.alert(
          'This alert was dismissed by tapping outside of the alert dialog.',
        ),
    },
  );
  const [history, setHistory] = useState([0]);
  const [count, setCount] = useState(0);
  return (
    <ImageBackground source={require('./assets/images.jpg')} // ✅ aquí va tu imagen de fondo
      style={styles.container}
    >

    
     <Text style={styles.textHuge}>{count}</Text>

     <Text style={styles.historyTitle}>Historial:</Text>
      <Text style={styles.historyText}>{history.join(", ")}</Text>

<FAB
        label="+1"
       
       onPress={() => {
          if (count < 20) {
            setCount(count + 1);
            setHistory([...history, count + 1]); 
            // 🔹 se guarda el nuevo valor
            
          }
        }}
       onLongPress={showAlert}
        position="right"
        />
<FAB
        label="reset"
        
        onPress={() => {
          setCount(0);
          setHistory([]); // 🔹 limpia historial
        }}
          onLongPress={showAlert}
        position="left"
        
        />

      <StatusBar style="auto" />
   
        </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  
    alignItems: 'center',
    justifyContent: 'center',
  },
  textHuge: {
    fontSize: 96,
    fontWeight: "bold",
    color: "#f7f7f7ff",
  },
  historyTitle: {
    fontSize: 22,
    color: '#fff',
    marginTop: 20,
    fontWeight: 'bold',
  },
  historyText: {
    fontSize: 16,
    color: '#ccc',
    marginTop: 5,
  },

});
