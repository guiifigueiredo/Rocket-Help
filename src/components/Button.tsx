import { Button as NativeBaseButton, IButtonProps, Heading } from 'native-base';

type Props = IButtonProps & {
    title: string
}

export function Button({title, ...rest}: Props) {
  return (
    <NativeBaseButton
    bg='green.700'
    h='14'
    fontSize='sm'
    rounded='sm'
    _pressed={{bg: 'green.500'}}
    {...rest}
    >
        <Heading fontSize='sm' color='white'>
            {title}
        </Heading>
    </NativeBaseButton>
  );
}