import { Box, HStack, Text, useTheme, VStack, Circle, Pressable, IPressableProps } from 'native-base';
import { CircleWavyCheck, ClockAfternoon, Hourglass, } from 'phosphor-react-native';

export type ListaProps = {
  id: string
  patrimony: string
  when: string
  listStatus: 'open' | 'closed'
}

type Props = IPressableProps & {
  data: ListaProps
}

export function Lista({ data, ...rest }: Props) {
  const { colors } = useTheme()
  const statusColor = data.listStatus === 'open' ? colors.secondary[700] : colors.green[300]
  return (
    <Pressable {...rest}>
      <HStack
        bg='gray.600'
        mb={4}
        alignItems='center'
        justifyContent='space-between'
        rounded='sm'
        overflow='hidden'
      >

        <Box h='full' w={2} bg={statusColor} />

        <VStack flex={1} my={5} ml={5}>
          <Text color='white'> 
            Patrimonio: {data.id} 
          </Text>
          <HStack alignItems='center'>
            <ClockAfternoon size={15} color={colors.gray[300]}/>
            <Text color='gray.200' fontSize='xs' ml={1}> 
                {data.when}
            </Text>

            
          </HStack>
        </VStack>
        <Circle h={12} bg='gray.500' w={12} mr={5}>
          {
            data.listStatus === 'closed'
              ? <CircleWavyCheck size={24} color={statusColor} />
              : <Hourglass size={24} color={statusColor} />
          }
        </Circle>
      </HStack>
    </Pressable>
  );
}
