import { useState } from "react"
import {  Text, View } from "react-native"
import { globalStyles } from "../themes/global.styles";

import Icon from 'react-native-vector-icons/Ionicons';
import { FAB } from "react-native-paper";

export const CounterM3Screen = () => {
    
    const [count, setcount] = useState(10);

    return (
    <View style={globalStyles.centerContainer}>
        <Text style={globalStyles.title}>{count}</Text>

        
        <FAB
            // icon="plus"
            // label="+1"
            style={globalStyles.fab}
            onPress={() => setcount(count + 1)}
            onLongPress={() => setcount(0)}
            // icon={ () => <Icon name="accessibility-outline" size={ 25 }></Icon>}
            icon="add-outline"
        />
    </View>
    )
}