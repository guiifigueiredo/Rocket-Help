import { useNavigation } from '@react-navigation/native';
import { Heading, HStack, IconButton, useTheme, StyledProps } from 'native-base';
import { CaretLeft } from 'phosphor-react-native';

type Props = StyledProps & {
    title: string
}
export function Header({title, ...rest}: Props) {

  const navigation = useNavigation()
  const {colors} = useTheme()
  
  function handleGoBack(){
    navigation.goBack()
  }

  return (
    <HStack 
    w='full'
    justifyContent='space-between'
    alignItems='center'
    pb={6}
    bg='gray.600'
    pt={12}
    >
        <IconButton
            icon={<CaretLeft color={colors.gray[200]} size={24}
            />}
            onPress={handleGoBack} 
        />

        <Heading color='gray.100' textAlign='center' fontSize='lg' flex={1} ml={-6}>
            {title}
        </Heading>
    </HStack>
  );
}