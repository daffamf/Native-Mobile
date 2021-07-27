import React from 'react'
import { View } from 'react-native';
import Icon from 'react-native-vector-icons/dist/MaterialCommunityIcons'
import { Appbar } from 'react-native-paper';

import './styles'


const MyComponent = () => {
    const _handleSearch = () => console.log('Searching');
    const _handleMore = () => console.log('Shown more');

    return (
        <View>
            <Appbar.Header>  
                <Appbar.Content icon="home" title="HOME" />
                <Appbar.Action icon="magnify" onPress={_handleSearch} />
                <Appbar.Action icon="dots-vertical" onPress={_handleMore} />

            </Appbar.Header>
        </View>
    );
};
export default MyComponent

