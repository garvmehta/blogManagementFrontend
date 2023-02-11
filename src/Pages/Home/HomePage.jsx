import { HStack, VStack, Text, Button, position } from "@chakra-ui/react";
import BlogCard from "../../Components/BlogCard";
import SearchBox from "../../Components/SeachBox";
import HomeRouting from "../../Routing/HomeRouting";

const Home = () => {
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
                        zIndex:2
                    }
                }
            >
                <Text
                    color={'white'}
                    fontWeight={'semibold'}
                    fontSize={'lg'}
                >Blogs</Text>
                <SearchBox />
                <Button
                    bg={'yellow.300'}
                >Login</Button>
            </HStack>
            
            {/* Home Routing */}
            <HomeRouting/>


        </VStack>
    </>
}

export default Home;