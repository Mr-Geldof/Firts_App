import React from 'react';
import { View,SafeAreaView} from 'react-native';
import Routes from './routes';

const App = () => {
  return (
    <View style={{flex:1}}>
      <SafeAreaView>
      </SafeAreaView>
      <Routes/>
  </View>
  );
};

export default App;