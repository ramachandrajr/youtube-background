import React from "react";
import { StyleSheet, Text, View, WebView } from "react-native";

export default class App extends React.Component {
  render() {
    var youtubeUrl = "https://youtube.com";
    return (
      <View style={{ flex: 1 }}>
        <WebView          
          automaticallyAdjustContentInsets={false}
          source={{ uri: youtubeUrl }}
          javaScriptEnabled={true}
          domStorageEnabled={true}
          decelerationRate="normal"
          startInLoadingState={true}
          style={{marginTop: 20}}
        />
      </View>
    );
  }
}
