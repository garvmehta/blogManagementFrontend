import { Box, Flex, Heading, VStack, Text, Button } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import TextInput from "../../Components/TextInput";
import * as yup from 'yup';
import { useFormik } from "formik";
import { loginFun } from "../../Functions/userFun";
import { useNavigate } from "react-router-dom";
const loginSchema = yup.object({
  email: yup.string().required().email("Email is not valid"),
  password: yup.string().required().min(6,"Password must be at least 6 characters long")
})

 const initialValues  = {
  email:'',
  password:''
 }
const Login = () => {
  const Nav  = useNavigate()
  const [ isLoading, setIsLoading] = useState(false);
  const [ errorMessage, setErrorMessage] = useState("");
  const loginForm = useFormik({
    initialValues,
    validationSchema: loginSchema,
    onSubmit:(values)=>{LoginFun(values)}
  })
  const LoginFun = async(values)=>{
    setIsLoading(true);
    try{
      const response = await loginFun({email:values.email, password:values.password});
      if(response.status){
          setIsLoading(false);
          Nav('/dashboard');
      }
      else{
        setIsLoading(false);
        setErrorMessage(response.errorMessage);
      }
    }catch(error){
      
    }
  }

  useEffect(()=>{
    setTimeout(()=>{

      setErrorMessage("")
    },3000)
  },[errorMessage])
  return (
    <>
      <Flex
        bg={"blue.200"}
        align={"center"}
        justify={"center"}
        w="100%"
        h={"100vh"}
      >
        <VStack
          justify={"center"}
          width={"30%"}
          bg={"white"}
          p={8}
          rounded={"lg"}
          boxShadow={"md"}
        >

          <Flex direction={"column"} align={"center"}>
            <Heading size={"md"} fontWeight={"medium"}>
              Login
            </Heading>
            <Text color={"gray.400"} fontSize={"sm"} py={"1"}>
              Please Login To Portal
            </Text>
          </Flex>
          <TextInput
            title={"Email"}
            placeholder={"Enter Email"}
            type={"email"}
            name={'email'}
            value={loginForm.values.email}
            onChange={loginForm.handleChange}
            error={loginForm.errors.email}
          />
          <TextInput
            title={"Password"}
            placeholder={"Enter Password"}
            type={"password"}
            name={'password'}
            value={loginForm.values.password}
            onChange={loginForm.handleChange}
            error={loginForm.errors.password}
          />
          <Text fontSize={'11px'} px={2} py={1}  color={'red.300'}>{errorMessage}</Text>
          <Box py={"1"} w={"100%"}>
            <Button isLoading={isLoading} bg={"blue.300"} w={"100%"} color={"white"} onClick={loginForm.handleSubmit}>
              Login
            </Button>
          </Box>
          <Link to={"/forget"}>
            <Button variant={"link"} fontWeight={"normal"} fontSize={"sm"}>
              Forget Password
            </Button>
          </Link>
          <Link to={"/sign-up"}>
            <Button variant={"link"} fontWeight={"normal"} fontSize={"sm"}>
              Create Your Account
            </Button>
          </Link>
        </VStack>
      </Flex>
    </>
  );
};
export default Login;
