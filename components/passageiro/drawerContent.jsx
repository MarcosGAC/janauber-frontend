import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';

function DrawerContent({ navigation, props }) {
  return (
    <DrawerContentScrollView >
      <View style={{ padding: 16 }}>
        {/* Seção de cabeçalho ou informações do usuário */}
        <Text>Seção de Cabeçalho</Text>
      </View>
      <View style={{ padding: 16 }}>
        {/* Seção de rodapé ou links adicionais  onPress={() => navigation.navigate('Configuracoes')}*/}
        <TouchableOpacity >
          <Text>Configurações</Text>
        </TouchableOpacity>
      </View>
    </DrawerContentScrollView>
  );
}

export default DrawerContent;