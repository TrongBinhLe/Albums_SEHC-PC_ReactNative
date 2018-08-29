import React from 'react';
import { View,Text,Image,Linking }from 'react-native';
import Card from './Card';
import CardSection from './CardSection.js';
import Button from './Button';

const AlbumDetail = ({album}) => {
    const {title, artist, thumbnail_image, image, url} = album;
    const {
            thumbnailStyle, 
            headerContentStyle,
            thumbnailContainerStyle,
            headerTextStyle,
            imageStyle
        } =styles

    return(
        <Card>
            <CardSection>
                <View style={thumbnailContainerStyle}>
                    <Image  
                         source={{uri: thumbnail_image}}
                    />
                </View>
                <View style={headerContentStyle}>    
                    <Text style={headerTextStyle}>{title}</Text>
                    <Text>{artist}</Text>
                </View>
            </CardSection>

            <CardSection>
                <Image style={imageStyle} source={{uri: image}}/>
            </CardSection>

            <CardSection>
                <Button onPress={()=> Linking.openURL(url)}>
                    Buy Now !
                </Button>    
            </CardSection>
        </Card>
    );
};

const styles = {
    headerContentStyle: {
        flexDirection: 'column',        
        justifyContent: 'space-around',
    },
    headerTextStyle:{
        fontSize: 20,
        fontStyle: 'italic',    
    },
    thumbnailStyle: {
        width: 50,
        height: 50,
    },
    thumbnailContainerStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        
        marginRight: 10,
        marginLeft: 10,       
    },
    imageStyle: {
        width: null,
        height: 300,
        flex: 1,
    
    }   

};
export default AlbumDetail;
