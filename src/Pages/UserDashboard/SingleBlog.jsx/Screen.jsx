import { Flex, HStack, Image, Text, Box, Heading, VStack } from "@chakra-ui/react";
import AnimatedSection from "../../../Components/AnimatedSection";
import { primaryColor } from "../../../constant";
import { AiOutlineLike } from 'react-icons/ai';
import CommmentCard from "../../../Components/CommentCard";
const SingleBlog = () => {
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

                            src={'https://images.unsplash.com/photo-1522199755839-a2bacb67c546?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80'}
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

                            >Title</Heading>
                            <Flex
                            direction={'column'}
                            align={'center'}
                            >
                                <AiOutlineLike
                                    color={primaryColor}
                                    size={20}
                                />
                                <Heading fontSize={'lg'} color={primaryColor}>

                                    23K</Heading>

                            </Flex>
                        </HStack>
                        <Text>
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reiciendis vel ut accusantium placeat dolorem corporis incidunt eum fugit quisquam nobis eius omnis nulla perferendis, sint fuga voluptates rerum quam ipsam.
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reiciendis vel ut accusantium placeat dolorem corporis incidunt eum fugit quisquam nobis eius omnis nulla perferendis, sint fuga voluptates rerum quam ipsam.
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reiciendis vel ut accusantium placeat dolorem corporis incidunt eum fugit quisquam nobis eius omnis nulla perferendis, sint fuga voluptates rerum quam ipsam.
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
                        new Array(12).fill(1).map((item, index)=>{
                            return<CommmentCard key={index} style={{margin:'10px'}} width={'90%'} shadow={'md'}/>
                        })
                    }
                    
                </VStack>
            </AnimatedSection>
        </>
    )
}
export default SingleBlog;