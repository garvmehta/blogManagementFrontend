import { Flex, Input, Text } from "@chakra-ui/react";

const TextInput = ({title, placeholder, type,value, onChange, name, error}) => {
    return (
        <>
            <Flex direction={'column'} w="100%">
                <Text
                    p={'2'}
                    fontWeight={'semibold'}
                    fontSize={'sm'}
                    textTransform={'capitalize'}
                >{title}</Text>
                <Input
                    focusBorderColor={'blue.100'}
                    borderWidth={1}
                    placeholder={`${placeholder}`}
                    fontSize={'sm'}
                    type={type}
                    value={value}
                    name={name}
                    onChange={onChange}
                />
                <Text fontSize={'11px'} px={2} py={1}  color={'red.300'}>{error}</Text>
            </Flex>
        </>
    )
}
export default TextInput;