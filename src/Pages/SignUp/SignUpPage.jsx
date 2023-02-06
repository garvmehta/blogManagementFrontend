import { Box, Flex, Heading, VStack, Text, Button } from "@chakra-ui/react";
import TextInput from "../../Components/TextInput";
const SignUp = () => {
    return (
        <Flex bg={'blue.200'} align={'center'} justify={'center'} w='100%' h={'100vh'} >
            <VStack justify={'center'} width={'30%'} bg={'white'} p={8} rounded={'lg'} boxShadow={'md'}>
                <Flex direction={'column'} align={'center'}>

                    <Heading size={'md'} fontWeight={'medium'} >Signup</Heading>
                    <Text color={'gray.400'} fontSize={'sm'} py={'1'} textTransform={'capitalize'} >Create an account</Text>
                </Flex>
                <TextInput
                    title={'Email'}
                    placeholder={'Enter Email'}
                    type={'email'}
                />
                <TextInput
                    title={'Password'}
                    placeholder={'Enter Password'}
                    type={'password'}
                />
                <TextInput
                    title={'Confirm Password'}
                    placeholder={'Enter Confirm Password'}
                    type={'password'}
                />
                <Box py={'1'} w={'100%'}>
                    <Button bg={'blue.300'} w={'100%'} color={'white'}  >Signup</Button>
                </Box>
            </VStack>
        </Flex>
    )
}
export default SignUp