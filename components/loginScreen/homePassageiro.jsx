import React from 'react';
import { StyleSheet, Text, View } from 'react-native';



function HomePassageiro(){
    return(
    <View style={styles.container}>
        <Text>Home Passageiro</Text>
    </View>
    );
  }

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#CCCCCC'
    }
});

export default HomePassageiro;