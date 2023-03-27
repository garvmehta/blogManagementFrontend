import { HStack, VStack, Text, Button, Flex } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
// import BlogCard from "../../Components/BlogCard";
import SearchBox from "../../Components/SeachBox";
import HomeRouting from "../../Routing/HomeRouting";
import { useSelector, } from "react-redux";
import { useEffect } from "react";
import { getAllBlogFun } from "../../Functions/blogsFun";

const Home = () => {
    const Nav = useNavigate();

    const UserState = useSelector((state) => state.user);
    const goToDashboard = () => {
        Nav('/dashboard')
    }

    useEffect(() => {
        console.log(UserState);
        getPublishedBlogs();

    }, [0])
    const getPublishedBlogs = async () => {
        await getAllBlogFun({ status: 'approved', userId: UserState._id });
        // if(res.status){
        //    con 
        // }
        // else{

        // }
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
                    {
                        (UserState.logged) ?
                            <Button
                                mx={2}
                                bg={'white'}
                                rounded={'md'}
                                color={'blue.300'}
                                onClick={goToDashboard}
                            >Go To Dashbord</Button> :
                            <Button
                                onClick={() => {
                                    Nav('/login')
                                }}

                                px={5}
                                // rounded={'sm'}
                                bg={'red.300'}
                                color={'white'}
                            >Login</Button>
                    }




                </Flex>
            </HStack>

            {/* Home Routing */}
            <HomeRouting />


        </VStack>
    </>
}

export default Home;