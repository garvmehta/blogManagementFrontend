import { Box, Flex, Heading, VStack, Text, Button } from "@chakra-ui/react";
import TextInput from "../../Components/TextInput";
import * as yup from 'yup';
import { useFormik } from "formik";
import { useEffect, useState } from "react";
import { signupFun } from "../../Functions/userFun";
import { useNavigate } from "react-router-dom";
const loginSchema = yup.object({
    email: yup.string().required().email("Email is not valid"),
    name: yup.string().required().min(2, "Name must be at least 2 character long"),
    password: yup.string().required().min(6, "Password must be at least 6 characters long"),
    cPassword: yup.string().oneOf([yup.ref('password'), null], "Confirm password must be matched")
})

const initialValues = {
    email: '',
    password: '',
    name: '',
    cPassword: ''
}
const SignUp = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState("")
    const Nav = useNavigate();
    const signUpForm = useFormik({
        initialValues,
        validationSchema: loginSchema,
        onSubmit: (values) => {
            initSignup(values);
        }
    })
    const initSignup = async (values) => {
        console.log(values);
        setIsLoading(true);
        const res = await signupFun({ name: values.name, email: values.email, password: values.password, type: 'user' });
        if (res.status) {
            setIsLoading(false);
            Nav('/dashboard');
        } else {
            setIsLoading(false);
            setErrorMessage(res.errorMessage);
        }
    }
    useEffect(() => {
        setTimeout(() => {
            setErrorMessage("")
        }, 3000);
    }, [errorMessage])
    return (
        <Flex bg={'blue.200'} align={'center'} justify={'center'} w='100%' h={'100vh'} >
            <VStack justify={'center'} width={'30%'} bg={'white'} p={8} rounded={'lg'} boxShadow={'md'}>
                <Flex direction={'column'} align={'center'}>

                    <Heading size={'md'} fontWeight={'medium'} >Signup</Heading>
                    <Text color={'gray.400'} fontSize={'sm'} py={'1'} textTransform={'capitalize'} >Create an account</Text>
                </Flex>
                <TextInput
                    title={'Name'}
                    placeholder={'Enter Name'}
                    type={"text"}
                    name={'name'}
                    value={signUpForm.values.name}
                    onChange={signUpForm.handleChange}
                    error={signUpForm.errors.name}
                />
                <TextInput
                    title={'Email'}
                    placeholder={'Enter Email'}
                    type={'email'}
                    name={'email'}
                    value={signUpForm.values.email}
                    onChange={signUpForm.handleChange}
                    error={signUpForm.errors.email}
                />
                <TextInput
                    title={'Password'}
                    placeholder={'Enter Password'}
                    type={'password'}
                    name={'password'}
                    value={signUpForm.values.password}
                    onChange={signUpForm.handleChange}
                    error={signUpForm.errors.password}
                />
                <TextInput
                    title={'Confirm Password'}
                    placeholder={'Enter Confirm Password'}
                    type={'password'}
                    name={'cPassword'}
                    value={signUpForm.values.cPassword}
                    onChange={signUpForm.handleChange}
                    error={signUpForm.errors.cPassword}
                />
                <Text fontSize={'11px'} px={2} py={1} color={'red.300'}>{errorMessage}</Text>
                <Box py={'1'} w={'100%'} >
                    <Button onClick={signUpForm.handleSubmit} isLoading={isLoading} bg={'blue.300'} w={'100%'} color={'white'}  >Signup</Button>
                </Box>
            </VStack>
        </Flex>
    )
}
export default SignUp