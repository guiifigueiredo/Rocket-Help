import { HStack, IconButton, VStack, useTheme, Text, Heading, FlatList, Center } from 'native-base';
import { ChatTeardropDots, SignOut } from 'phosphor-react-native';
import { Filter } from '../components/Filter';
import { Button } from '../components/Button';
import Logo from '../assets/logo_secondary.svg'
import { useState } from 'react';
import { Lista, ListaProps } from '../components/Lista';
import { useNavigation } from '@react-navigation/native';

export function Home() {
  const navigation = useNavigation()
  const { colors } = useTheme()
  const [status, setStatus] = useState<'open' | 'closed'>('open')
  const [ordem, setOrdem] = useState<ListaProps[]>([{
    id:'123',
    patrimony: 'adfasdfa',
    when: '13',
    listStatus: 'open'
 }])

  function handleNewOrder(){
    navigation.navigate('new')
  }

  function handOpenDetails(listId:string){
    navigation.navigate('details', {listId})
  }

  return (
    <VStack flex={1} bg='gray.700' pb={6}>
      <HStack
        w='full'
        bg='gray.600'
        justifyContent='space-between'
        alignItems='center'
        pt={12}
        pb={6}
        px={6}
      >
        <Logo />
        <IconButton
          icon={<SignOut size={26} color={colors.gray[300]} />}
        />
      </HStack>

      <VStack flex={1} px={6}>
        <HStack w='full' mt={8} mb={4} justifyContent='space-between' alignItems='center'>
          <Heading color='gray.100'>
            Chamados
          </Heading>

          <Text color='gray.200'>
            5
          </Text>
        </HStack>

        <HStack space={2} mb={8}>
          <Filter
            title='Em andamento'
            type='open'
            onPress={() => setStatus('open')}
            isActive= {status === 'open'}
          />

          <Filter
            title='Finalizados'
            type='closed'
            onPress={() => setStatus('closed')}
            isActive={status === 'closed'}
          />
        </HStack>

        <FlatList
          data={ordem}
          keyExtractor={item => item.id}
          renderItem = {({item}) => <Lista data={item} onPress={() => handOpenDetails(item.id)}/>}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: 50 }}
          ListEmptyComponent={() => (
            <Center>
              <ChatTeardropDots color={colors.gray[300]} size={40}/>
              <Text color='gray.300' fontSize='xl' textAlign='center' mt={6}>
                 Você ainda não possui {'\n'} 
                 solicitações {status === 'open'? 'em andamento' : 'finalizadas'}
              </Text>
            </Center>
          )}
        />

        <Button title='Nova Solicitação' onPress={handleNewOrder}/>
      </VStack>
    </VStack>
  );
}