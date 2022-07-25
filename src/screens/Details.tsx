import { VStack, Text } from 'native-base';
import { Header } from '../components/Header';
import { useRoute } from '@react-navigation/native';


type RouteParams = {
  listId: string
}
export function Details() {

  const routes = useRoute()
  const {listId} = routes.params as RouteParams 
  return (
    <VStack flex={1} bg='gray.700'>
        <Header title='Solicitação'/>
        <Text color='white'>
          {listId}
        </Text>
    </VStack>
  );
}