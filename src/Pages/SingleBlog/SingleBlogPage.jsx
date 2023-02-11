import { HStack, VStack, Text, Image, Box, Input, Flex, Button } from "@chakra-ui/react"
import { AiOutlineSend, AiFillLike } from 'react-icons/ai';
import CommmentCard from "../../Components/CommentCard";

const SingleBlogPage = () => {
    return (<>
        <HStack

            // border={'1px'}
            width={'80%'}
            height={'100%'}
            p={3}
            align='flex-start'
        >
            {/* Full Article */}
            <VStack
                width={'65%'}
                // border={'1px'}
                bg={'white'}
                shadow={'xl'}
                rounded={'lg'}
                align="flex-start"
                p={3}
                mx={3}
            >
                <HStack
                    p={2}
                    w={'100%'}
                    justify={'space-between'}
                    // bg={'#D6EAF8 '}
                    
                // border={'1px'}
                >
                    <HStack w={'30%'}>

                        <Box
                            width={50}
                            height={50}
                            rounded={'full'}
                            overflow={'hidden'}
                        >
                            <Image
                                w={'auto'}
                                h={'100%'}

                                src="https://bit.ly/dan-abramov"
                            />
                        </Box>
                        <Box
                            px={3}
                        >
                            <Text
                                fontSize={'sm'}
                                fontWeight={'semibold'}
                            >
                                User Name
                            </Text>
                            <Text
                                fontSize={'xs'}
                                fontWeight={'semibold'}
                            >
                                26 Jan
                            </Text>
                        </Box>
                    </HStack>
                    <HStack
                        px={2}
                        width={'70%'}
                        justifyContent={'flex-end'}

                    >
                        <Button
                            align={'center'}

                            bg={'transparent'}
                            p={0}
                        >
                            <AiFillLike
                                color={'blue'}
                            />
                            <Text>2K</Text>
                        </Button>
                    </HStack>
                </HStack>

                <VStack
                    align={'flex-start'}
                >
                    <Text
                        fontSize={'lg'}
                        fontWeight={'bold'}
                    >
                        Blog Title
                    </Text>
                    <Box
                        width={"100%"}
                        // rounded={'lg'}
                        // overflow={'hidden'}
                    >
                        <Image
                            w={'auto'}
                            h={'100%'}

                            src="https://images.unsplash.com/photo-1522199755839-a2bacb67c546?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80"
                        />
                    </Box>
                    <Box
                        p={2}
                    >
                        <Text>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse porttitor, enim ut dictum faucibus, ante purus condimentum ante, a dignissim augue ex vitae elit. Integer imperdiet eget orci id porta. Maecenas posuere ante dui, sed ornare tellus blandit vel. Sed quis tempus mi. Maecenas scelerisque orci vel justo vehicula dictum. Donec sit amet lorem a mi varius molestie. Etiam vehicula urna quis orci tincidunt, quis congue massa euismod. Integer eu metus non dolor pharetra molestie auctor sed velit.

                            Sed a pellentesque dolor. Aliquam volutpat ipsum metus. Suspendisse eros mauris, mattis ut hendrerit vitae, fringilla sit amet risus. Nulla felis diam, eleifend eget sollicitudin eget, bibendum id neque. Integer rutrum, dolor in molestie tincidunt, neque neque varius erat, ac varius erat massa in lacus. In id turpis nunc. Phasellus in arcu eu est efficitur pharetra. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas urna velit, dignissim a interdum id, feugiat euismod mauris. Fusce vestibulum sapien at sem elementum commodo.

                            Ut accumsan dapibus velit vitae feugiat. Nunc rhoncus dui nulla, vitae aliquet lacus commodo ut. Nam malesuada nulla et nulla luctus, quis efficitur tellus gravida. Duis eu quam eget erat pulvinar euismod. Cras pulvinar interdum tellus a sodales. Aenean at aliquet velit. Pellentesque vitae tincidunt dui. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vestibulum quis odio et risus placerat vehicula quis quis magna.

                            Suspendisse consectetur iaculis fringilla. Aliquam lobortis sed est eu gravida. Etiam lobortis mauris mi, sed posuere ante facilisis at. Aenean pharetra, metus vitae porta volutpat, odio nisl congue odio, vel pellentesque tortor lacus eget lorem. Aenean a facilisis felis. Nam cursus nisl lacus, ut viverra sem finibus id. Proin lorem urna, rutrum vel massa in, ultricies pellentesque augue. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        </Text>
                    </Box>
                </VStack>

            </VStack>
            {/* comments */}
            <VStack
                shadow={'lg'}
                rounded={'lg'}
                width={'35%'}
                align={'flex-start'}
                // border={'1px'}
                bg={'white'}
                p={2}
                style={{
                    position: 'sticky',
                    top: '11%'
                }}
                height={'88vh'}
            >
                <Text
                    fontSize={'lg'}
                    fontWeight={'semibold'}
                >
                    Comments
                </Text>
                <HStack

                    width={'100%'}
                    justify={'space-between'}
                >
                    <Box
                        width={50}
                        height={50}
                        rounded={'full'}
                        overflow={'hidden'}
                    >
                        <Image
                            w={'auto'}
                            h={'100%'}

                            src="https://bit.ly/dan-abramov"
                        />
                    </Box>
                    <HStack
                        w={'82%'}
                    >
                        <Input
                            m={0}
                            fontSize={'sm'}
                            p={0}
                            py={1}
                            height={'auto'}
                            _focusVisible={{
                                outline: 'none'
                            }}
                            rounded={'none'}
                            placeholder="Add Comment"
                            border={'none'}

                            borderBottom={'1px solid black'}
                        />
                        <Box
                            bg={'yellow.300'}
                            p={'2'}
                            rounded={'full'}
                        >
                            <AiOutlineSend
                                color={'black'}
                            />
                        </Box>
                    </HStack>

                </HStack>
                <Box
                    p={1}
                    width={'100%'}

                    minHeight={'80%'}
                    overflow={'auto'}

                >
                    {/* comments */}

                    {
                        new Array(60).fill(1).map((item, index) => {
                            return <CommmentCard key={index} />
                        })
                    }

                </Box>

            </VStack>
        </HStack>
    </>)
}
export default SingleBlogPage