import { View, Text, Alert } from 'react-native'
import React, { useState } from 'react'

export default function useConter() {
    const [count, setCount] = useState(0);
  const [history, setHistory] = useState([0]);

  const onPress = () => {
    if (count < 20) {
      const newCount = count + 1;
      setCount(newCount);
      setHistory([...history, newCount]);
    }
  };

  // ✅ Reiniciar contador con confirmación
  const onLongPress = () => {
    Alert.alert(
      "Confirmar reinicio",
      "¿Deseas reiniciar el contador a 0?",
      [
        { text: "Cancelar", style: "cancel"},
        {
          text: "Sí, reiniciar",
          onPress: () => {
            setCount(0);
            setHistory([...history, 0]);
          },
        },
      ]
    );
  };
  return  { count, history, onPress, onLongPress };
 
  
}