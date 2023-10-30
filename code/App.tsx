import React from 'react';
import {StyleSheet} from 'react-native';
import WebView from 'react-native-webview';
import Loader from './components/Loader';

function App() {
  return (
    <WebView
      source={{uri: 'https://beveragebeckett.com/app'}}
      style={styles.wrapper}
      startInLoadingState={true}
      renderLoading={Loader}
    />
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    minHeight: 500,
  },
});

export default App;
