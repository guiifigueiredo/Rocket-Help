import { VStack, Heading,Icon, useTheme } from 'native-base'
import { useState } from 'react'
import Logo from '../assets/logo_primary.svg'
import { Envelope, Key } from 'phosphor-react-native'
import { Input } from '../components/Input'
import { Button } from '../components/Button'

export function SignIn(){
    const {colors} = useTheme()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    function handleSignIn(){
        console.log(email, password)
    }

    return(
        <VStack flex={1} alignItems='center' bg='gray.600' px={8} pt={24}>
            <Logo/> 

            <Heading color='gray.100' fontSize={14} mt={20} mb={6}>
                Acesse a sua conta
            </Heading>

            <Input 
            placeholder="E-mail" 
            mb={5}
            leftElement={<Icon as={<Envelope color={colors.gray[300]}/>} ml={5}/>}
            onChangeText = {setEmail} 
            />

            <Input 
            mb={8}
            placeholder="Senha"
            leftElement={<Icon as={<Key color={colors.gray[300]}/>} ml={5}/>}
            secureTextEntry
            onChangeText = {setPassword}
            />

            <Button title='Entrar' w="full" onPress={handleSignIn}/>

        </VStack>
    )
}