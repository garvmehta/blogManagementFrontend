import { Box, Flex, Heading, VStack, Text, Button } from "@chakra-ui/react";
import TextInput from "../../Components/TextInput";
import * as yup from 'yup';
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import { useState, useEffect } from "react";
import { forgetPasswordFun } from "../../Functions/userFun";
const forgetPasswordSchema = yup.object({
    email: yup.string().required().email("Email is not valid"),
    password: yup.string().required().min(6, "password must at least 6 character long")
})
const initialValues = {
    email: '',
    password: ''
}
const ForgetPassword = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState("")
    const Nav = useNavigate();
    const forgetForm = useFormik({
        initialValues,
        validationSchema: forgetPasswordSchema,
        onSubmit: (values) => {
            initSignup(values);
        }
    })
    const initSignup = async (values) => {
        console.log(values);
        setIsLoading(true);
        const res = await forgetPasswordFun({email:values.email,password:values.password})
        if (res.status) {
            setIsLoading(false);
            Nav('/login');
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
    return (<>
        <Flex bg={'blue.200'} align={'center'} justify={'center'} w='100%' h={'100vh'} >
            <VStack justify={'center'} width={'30%'} bg={'white'} p={8} rounded={'lg'} boxShadow={'md'}>
                <Flex direction={'column'} align={'center'}>

                    <Heading size={'md'} fontWeight={'medium'} >Forget Password</Heading>
                    <Text color={'gray.400'} fontSize={'sm'} py={'1'} ></Text>
                </Flex>
                <TextInput
                    title={'Email'}
                    placeholder={'Enter Email'}
                    type={'email'}
                    name={'email'}
                    value={forgetForm.values.email}
                    onChange={forgetForm.handleChange}
                    error={forgetForm.errors.email}
                />
                <TextInput
                    title={'Password'}
                    placeholder={'Enter Password'}
                    type={'password'}
                    name={'password'}
                    value={forgetForm.values.password}
                    onChange={forgetForm.handleChange}
                    error={forgetForm.errors.password}
                />
                <Box py={'1'} w={'100%'}>
                    <Button isLoading={isLoading} onClick={forgetForm.handleSubmit} bg={'blue.300'} w={'100%'} color={'white'}  >Submit</Button>
                </Box>
            </VStack>
        </Flex>
    </>)
}
export default ForgetPassword