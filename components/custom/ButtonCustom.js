import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, Dimensions } from 'react-native';

const ButtonCustom = (props) => {
  const [fontLoaded, setFontLoaded] = useState(false);

  useEffect(() => {
    Font.loadAsync({
      Poppins,
    }).then(() => setFontLoaded(true));
  }, []);

  return (
    <TouchableOpacity
    onPress={props.onPress}
      style={{
        backgroundColor: props.bg,
        width: width - 35,
        padding: 12,
        marginTop: 20,
      }}>
      <Text
        style={{
          fontFamily: fontLoaded ? 'Poppins' : 'sans-serif',
          color: 'white',
          fontSize: 24,
          textAlign: 'center',
        }}>
        {props.title}
      </Text>
    </TouchableOpacity>
  );
};

export default ButtonCustom;
