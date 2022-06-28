import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import SignInScreen from './screens/SignIn'
import SignUpScreen from './screens/SignUp'
export default function App() {
  return (
    <View>
      <SignInScreen />
      <SignUpScreen />
    </View>
  );
}

const styles = StyleSheet.create({

});
