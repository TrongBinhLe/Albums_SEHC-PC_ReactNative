import React from 'react';
import {View} from 'react-native';

const Card = (props)=>{
    return(
        <View style={styles.containerStyle}>
           {props.children}
        </View>
    );
}
const styles ={
    containerStyle: {
        borderWidth: 1,
        borderRadius: 2,
        borderColor: 'blue',
        borderBottomWidth: 0,
        shadowColor: 'red',
        shadowOffset: {with: 0, height:2 },
        shadowOpacity: 0.9,
        shadowRadius: 2,
        elevation: 1,
        marginLeft: 5,
        marginRight: 5,
        marginTop: 5,
    }
}
export default Card;