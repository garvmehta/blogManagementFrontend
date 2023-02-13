import { HStack, VStack, Text, Button, position, Flex } from "@chakra-ui/react";
import {  useNavigate } from "react-router-dom";
import BlogCard from "../../Components/BlogCard";
import SearchBox from "../../Components/SeachBox";
import HomeRouting from "../../Routing/HomeRouting";

const Home = () => {
    const Nav = useNavigate();

    const goToDashboard = () => {
        Nav('/dashboard')
    }
    return <>
        <VStack

            style={{
                backgroundColor: '#F8F9F9',

            }}
        >
            <HStack
                justify={'space-between'}
                bg={'blue.400'}
                w={'100%'}
                p={3}
                style={
                    {
                        position: 'sticky',
                        top: "0",
                        zIndex: 2
                    }
                }
            >
                <Text
                    color={'white'}
                    fontWeight={'semibold'}
                    fontSize={'lg'}
                >Blogs</Text>
                <SearchBox />
                <Flex

                >

                    <Button
                        mx={2}
                        bg={'white'}
                        rounded={'md'}
                        color={'blue.300'}
                        onClick={goToDashboard}
                    >Go To Dashbord</Button>
                    <Button


                        px={5}
                        // rounded={'sm'}
                        bg={'red.300'}
                        color={'white'}
                    >Login</Button>
                </Flex>
            </HStack>

            {/* Home Routing */}
            <HomeRouting />


        </VStack>
    </>
}

export default Home;