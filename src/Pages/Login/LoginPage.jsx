import { Box, Flex, Heading, VStack, Text, Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import TextInput from "../../Components/TextInput";
const Login = () => {
    return (<>
        <Flex bg={'blue.200'} align={'center'} justify={'center'} w='100%' h={'100vh'} >
            <VStack justify={'center'} width={'30%'} bg={'white'} p={8} rounded={'lg'} boxShadow={'md'}>
                <Flex direction={'column'} align={'center'}>

                    <Heading size={'md'} fontWeight={'medium'} >Login</Heading>
                    <Text color={'gray.400'} fontSize={'sm'} py={'1'} >Please Login To Portal</Text>
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
                <Box py={'1'} w={'100%'}>
                    <Button bg={'blue.300'} w={'100%'} color={'white'}  >Login</Button>
                </Box>
                <Link to={'/forget'}>
                <Button variant={'link'} fontWeight={'normal'} fontSize={'sm'} >Forget Password</Button>
                </Link>
            </VStack>
        </Flex>
    </>)
}
export default Login