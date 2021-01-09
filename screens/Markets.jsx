import React from 'react'
import { StyleSheet, View, Text } from 'react-native'



const Markets = ( {title, adres, count}) => {
    return (
      <View>
            <Text>{title}</Text>
            <Text>{adres}</Text>
            <Text>{count}</Text>
      </View>        
    )
}

export default Markets
