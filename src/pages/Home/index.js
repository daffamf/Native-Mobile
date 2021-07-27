import React from 'react'
import { View } from 'react-native'
import { Searchbar,TextInput } from 'react-native-paper';

import './styles'

const MyComponent = () => {
    const [searchQuery, setSearchQuery] = React.useState('');

    const onChangeSearch = query => setSearchQuery(query);

    return (
      <>
            <Searchbar
                placeholder="Search"
                onChangeText={onChangeSearch}
                value={searchQuery}
                
               
            />

     </>
    )
}
export default MyComponent

