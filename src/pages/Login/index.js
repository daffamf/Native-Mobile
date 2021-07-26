import React, { useState } from 'react'
import { View, TextInput, TouchableHighlight, Text, Image, StyleSheet, KeyboardAvoidingView, ImageBackground } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { styles } from './styles'
import { login } from '../../actions'

export default function Login({ navigation }) {
    const [email, setEmail] = useState({ value: '', erorr: '' })
    const [password, setPassword] = useState({ value: '', erorr: '' })

    const { message } = useSelector(state => state.login)
    const dispatch = useDispatch()
    const onLogin = () => {
        dispatch(login({ email: email.value, password: password.value, navigation }))
    }

    return (
        <View style={styles.root}>
            <KeyboardAvoidingView style={sty.container} behavior='padding'>
                <Text style={{
                    fontSize: 40,
                    // fontWeight: 'bold'
                }}>GO CAMP </Text>
                <Image style={styles.img} source={require('../../assets/pictures/logo1.png')} />

                <Text style={sty.textmuted} >{message} </Text>

                <TextInput style={styles.forminput}
                    placeholder='Email'
                    value={email.value}
                    onChangeText={text => setEmail({ value: text, erorr: '' })}
                />
                <TextInput
                    style={styles.forminput}
                    placeholder='Passwoard'
                    value={password.value}
                    onChangeText={text => setPassword({ value: text, erorr: '' })}
                    secureTextEntry
                />
                <Text style={sty.txtpassword}>Forgot passwoard?</Text>
                <TouchableHighlight style={sty.btn} onPress={onLogin}>
                    <Text style={{
                        color: 'white',
                        fontWeight: 'bold',
                        textAlign: 'center',
                        lineHeight: 50,
                        fontSize: 20
                    }}>Login</Text>
                </TouchableHighlight>
                <Text>Don't have on account!<Text style={{ color: 'red' }}> Register </Text></Text>
            </KeyboardAvoidingView>

        </View>
    )
}

const sty = StyleSheet.create({
    textmuted: {
        color: 'red'
    },
    btn: {
        backgroundColor: '#F51C21',
        width: '95%',
        height: 60,
        borderRadius: 50,
        paddingVertical: 'auto',
        marginVertical: 10

    },
    container: {
        flex: 1,
        width: '100%',
        maxWidth: 340,
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center'
    },
    txtpassword: {
        marginLeft: 'auto',
        color: 'red'
    }

})