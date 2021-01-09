import React, {useState} from 'react'
import {StyleSheet, View,  Button, TextInput } from 'react-native'
import Markets from './Markets';



const MarketList = () => {

    const [marketList, setMarketList] = useState([])
    const [input, setInput] = useState('')
    const addMarket = () => {
        setMarketList([input, ...marketList])
        setInput('');
    }

    return (
        <View style={marketlist.container}>
            <TextInput 
                value={input}
                onChangeText={text => setInput(text)}
                placeholder="market"
                style={marketlist.input}
             />
            <Button onPress={addMarket} title="+"/>
            <View>
                {marketList.map(market => {
                    return (
                        <View>
                            <Markets title={market}/>
                            <Markets adres={market}/>
                            <Markets count={market}/>
                        </View>
                    );
                })}
            </View>
        </View>
    )
}










const marketlist = StyleSheet.create({
    container: {
        marginHorizontal: 30,
        justifyContent: 'center',

    },
    input : {
        width: '50%',
        height: 30,
        borderBottomWidth: '50%',
        borderBottomColor: 'black',
    }
})

export default MarketList
