import React from 'react'
import { Text, View } from 'react-native'

export const Settings = () => {
  return (
    <View style={{ flex: 1, backgroundColor: 'gray', alignItems: 'center', justifyContent: 'center' }}>
        <Text style={{ fontSize: 30, color: 'black' }}>
            Pagina de configurações
        </Text>
    </View>
  )
}
