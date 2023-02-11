import { Box, Button, Flex, HStack, Image, Text, VStack } from "@chakra-ui/react"
import { AiFillLike, AiOutlineLike } from 'react-icons/ai'
import { MdOutlineInsertComment } from 'react-icons/md';
import { RiShareForwardLine } from 'react-icons/ri';
import { useNavigate } from "react-router-dom";
const BlogCard = () => {
    const Nav = useNavigate();
    return (
        <>
            <Flex
                // border={'1px'}
                bg={'white'}
                w={'40%'}
                p={4}
                boxShadow={'md'}
                rounded={'lg'}
                style={{
                    marginBottom: '20px',
                    marginTop: '10px'
                }}
            >
                <VStack align={'flex-start'}
                >
                    <HStack>
                        <Flex
                            align={'center'}
                        >
                            <Box
                                rounded={'full'}
                                overflow={'hidden'}
                                w={'40px'}

                                h={'40px'}>
                                <Image
                                    h={'100%'}
                                    w={'100%'}
                                    src="https://bit.ly/dan-abramov"
                                />
                            </Box>

                            <Text
                                fontSize={'sm   '}
                                px={1}
                                fontWeight={'semibold'}
                            >
                                UserName
                            </Text>
                        </Flex>
                    </HStack>
                    <Text
                        p={1}
                        fontSize={'md'}
                        fontWeight={'bold'}
                    >
                        Blog Title
                    </Text>
                    <Box
                        cursor={'pointer'}
                        onClick={() => {
                            Nav('/blog')
                        }}
                    >

                        <Flex
                            w={'100%'}
                            h={'35vh'}
                            align={'center'}
                            justify={'center'}

                            rounded={'lg'}
                            overflow='hidden'
                        >
                            <Image
                                w={'auto'}
                                h={'100%'}

                                src="https://images.unsplash.com/photo-1522199755839-a2bacb67c546?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80"
                            />
                        </Flex>
                        <Text
                            fontSize={'md'}
                            fontWeight={'semibold'}
                        >
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry....
                        </Text>
                    </Box>

                    <HStack
                        py={1}
                        justify={'space-between'}
                        w={'100%'}
                    >
                        <Button variant={'unstyled'}>

                            <Flex align={'center'}>
                                <AiOutlineLike
                                    // color={'#4299e1'}
                                    size={20}
                                />
                                <Text px={1} fontWeight={'semibold'} >
                                    Like
                                </Text>
                            </Flex>
                        </Button>
                        <Button variant={'unstyled'}>
                            <Flex align={'center'}>
                                <MdOutlineInsertComment
                                    // color={'#4299e1'}
                                    size={20}
                                />
                                <Text px={1} fontWeight={'semibold'} >
                                    Comment
                                </Text>
                            </Flex>
                        </Button>
                        <Button variant={'unstyled'}>

                            <Flex align={'center'}>
                                <RiShareForwardLine
                                    // color={'#4299e1'}
                                    size={20}
                                />
                                <Text px={1} fontWeight={'semibold'} >
                                    Share
                                </Text>
                            </Flex>
                        </Button>
                    </HStack>
                </VStack>
            </Flex>
        </>
    )
}
export default BlogCard