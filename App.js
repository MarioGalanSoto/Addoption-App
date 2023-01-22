import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
// import a from './assets/profile-image';
export default function App() {
  return (
    <View style={styles.container}>
      <Text>Start working on your app!</Text>
      {/* <Image source={require('./assets')}></Image> */}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
