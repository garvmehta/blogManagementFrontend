import { Flex, Input, Text } from "@chakra-ui/react";

const TextInput = ({title, placeholder, type,}) => {
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
                    bodderWidth={1}
                    placeholder={`${placeholder}`}
                    fontSize={'sm'}
                    type={type}
                />
            </Flex>
        </>
    )
}
export default TextInput;