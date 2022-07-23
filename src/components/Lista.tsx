import { HStack, Text } from 'native-base';

export type ListaProps = {
    id: string
    patrimony: string
    when: string
    listStatus: 'open' | 'closed'
}

type Props ={
    data: ListaProps
}

export function Lista({data, ...rest}: Props){
  return (
    <HStack>
        <Text color='white'> Patrimonio: {data.id} </Text>
    </HStack>
  );
}