import { Flex, HStack, Image, Text, Box, Heading, VStack } from "@chakra-ui/react";
import AnimatedSection from "../../../Components/AnimatedSection";
import { primaryColor } from "../../../constant";
import { AiOutlineLike } from 'react-icons/ai';
import CommmentCard from "../../../Components/CommentCard";
import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { url } from "../../../Config/constant";

const SingleBlog = () => {
    const location = useLocation();
    const index = location.state.index;
    const userBlogs = useSelector((state)=>state.dashboard.allUserBlogs) 
    console.log(index, 'index');
    console.log(userBlogs[index], 'blog');
    return (
        <>
            {/* <Text>fdkdsf</Text> */}
            <AnimatedSection title={'Single Blog'}>
                <HStack
                    align={'flex-start'}
                    p={2}
                >
                    <Box
                        w={'25%'}
                        borderRadius={'lg'}
                        overflow={'hidden'}
                    >
                        <Image

                            src={`${url}/image/${userBlogs[index].thumbnail}`}
                        />
                    </Box>
                    <Flex
                        px={2}
                        w={'75%'}
                        align={'flex-start'}
                        justifyContent={'flex-start'}
                        direction={'column'}>
                        <HStack pb={2} justify={'space-between'} w={'100%'} align={"center"}>
                            <Heading
                                fontSize={'2xl'}

                            >{userBlogs[index].title}</Heading>
                            <Flex
                            direction={'column'}
                            align={'center'}
                            >
                                <AiOutlineLike
                                    color={primaryColor}
                                    size={20}
                                />
                                <Heading fontSize={'lg'} color={primaryColor}>

                                {userBlogs[index].totalLikes}</Heading>

                            </Flex>
                        </HStack>
                        <Text>
                            {userBlogs[index].description}
                        </Text>
                    </Flex>
                </HStack>

                <Heading
                    fontSize={'xl'}
                    p={2}
                    textAlign={'left'}
                    w={'100%'}
                >Comments</Heading>
                <VStack
                // border={'1px'}
                align={'flex-start'}
                justify={'flex-start'}
                w={'100%'}
                // flex={1}
                overflow={'scroll'}
                height={'44vh'}
                >
                    {
                         userBlogs[index].comments.map((item, index)=>{
                            return<CommmentCard key={index} style={{margin:'10px'}} width={'90%'} shadow={'md'} data={{userName:item.name, comment: item.comment}}/>
                        })
                    }
                    
                </VStack>
            </AnimatedSection>
        </>
    )
}
export default SingleBlog;