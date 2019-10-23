import React from 'react';
import { ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';
import { ExpoLinksView } from '@expo/samples';

export default function LinksScreen() {
  
/**  constructor(props) {
    super(props);
    this.state={text: ''};
  }
         <TextInput
            style={{height: 40}}
            placeholder="Type here to translate!"
            onChangeText={(text)=>this.setState({text})}
            value={this.state.text}
          />
          <Text style={{padding:10, fontSize:42}}>
            {this.state.next.split(' ').map((word)=>word && '🍕').join(' ')}
          </Text>
          
  */
  return (
    <ScrollView style={styles.container}>
      {/**
       * Go ahead and delete ExpoLinksView and replace it with your content;
       * we just wanted to provide you with some helpful links.
       */}
      <ExpoLinksView />
      <View style={{
        height:450, 
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        }}>
        <View style={{width:50,height:50, padding:10, alignSelf:'center',backgroundColor: 'powderblue'}}>
        </View>
        <View style={{width:50,height:50, backgroundColor: 'skyblue'}} />
        <View style={{width:50,height:100, backgroundColor: 'steelblue'}} />
      </View>
    </ScrollView>
  );
}

LinksScreen.navigationOptions = {
  title: 'Links',
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
});
