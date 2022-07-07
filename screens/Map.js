import React from 'react';
import { StyleSheet, ImageBackground, TouchableOpacity, Text, Image } from "react-native";
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { View } from 'react-native-web';
const image = require('../assets/imgpsh_fullsize_anim.png');
const App = () => {
  return (
    <ImageBackground source={image} resizeMode="cover" style={styles.image}>
      <View style={styles.container}>
        <View style={styles.inputBlock}>
          {/* <View style={{ flexDirection: 'row', alignItems: 'center' }}> */}
          <GooglePlacesAutocomplete
            placeholder='Enter Location'
            minLength={2}
            autoFocus={false}
            returnKeyType={'default'}
            fetchDetails={true}
            styles={{
              textInputContainer: {
                backgroundColor: 'grey',
              },
              textInput: {
                height: 38,
                color: '#5d5d5d',
                fontSize: 16,
              },
              predefinedPlacesDescription: {
                color: '#1faadb',
              },
            }}
          />
          {/* <Image
            source={require('../assets/imgpsh_fullsize_anim.png')}
            style={{ width: 80, height: 80 }}
          /> */}
          {/* </View> */}
          <GooglePlacesAutocomplete
            placeholder='Enter Location'
            minLength={2}
            autoFocus={false}
            returnKeyType={'default'}
            fetchDetails={true}
            styles={{
              textInputContainer: {
                backgroundColor: 'grey',
              },
              textInput: {
                height: 38,
                color: '#5d5d5d',
                fontSize: 16,
              },
              predefinedPlacesDescription: {
                color: '#1faadb',
              },
            }}
          />
        </View>
        <View style={{ marginTop: 450 }}>
          <TouchableOpacity style={{ backgroundColor: 'yellow', width: '100%' }} >
            <Text style={{ textAlign: 'center', paddingVertical: 10 }}>REQUEST A RIDE</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
};
const styles = StyleSheet.create({
  image: {
    position: 'absolute',
    width: '100%',
    height: "100%"
  },
  inputBlock: {
    padding: 30
  },
  container: {
    alignItems: 'center',
  }
});

export default App;