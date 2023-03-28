import { HStack, Box, Text, Button, Image, useDisclosure } from "@chakra-ui/react"
import { primaryColor } from "../constant";
import DeleteModal from "./DeleteComponent";
const tableRowBg = '#D6EAF8';
const UserTable = ({ tableData, editFun, moreFun }) => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const deleteFun = () => {
        onOpen();
    }
    return (
        <>
            <DeleteModal isOpen={isOpen} onClose={onClose} />
            <HStack
                position={'sticky'}
                top={0}
                w={'100%'}
                bg={'#3498DB'}
                p={2}
                borderRadius={'lg'}

            >
                <Box
                    width={'10%'}
                >
                    <Text
                        color={'white'}
                    >
                        Sno.

                    </Text>
                </Box>
                <Box
                    width={"15%"}
                >
                    <Text
                        color={'white'}
                    >

                        User name
                    </Text>
                </Box>
                <Box
                    width={"20%"}
                >
                    <Text
                        color={'white'}
                    >

                        Email
                    </Text>
                </Box>
                <Box
                    width={"15%"}
                >
                    <Text
                        color={'white'}
                    >

                        Created At
                    </Text>
                </Box>
                <Box
                    width={"10%"}
                >
                    <Text
                        color={'white'}
                    >

                        Total Blogs
                    </Text>
                </Box>
                <Box
                    width={"20%"}
                >
                    <Text
                        color={'white'}
                    >

                        Actions
                    </Text>
                </Box>
            </HStack>
            {
                tableData.map((row, index) => {
                    return (

                        <HStack
                            borderRadius={'lg'}
                            key={index}
                            width={'100%'}
                            // border={'1px'}
                            bg={'#D6EAF8'}
                            p={2}
                        >
                            <Box
                                width={'10%'}
                            >
                                <Text
                                    color={'black'}
                                >
                                    {row.sNo}

                                </Text>
                            </Box>
                            <Box
                                width={"15%"}
                            >
                                <Text
                                    color={'black'}
                                >

                                    {row.name}
                                </Text>
                            </Box>
                            <Box
                                width={"20%"}
                            >
                                <Text
                                    color={'black'}
                                >

                                    {row.email}
                                </Text>
                            </Box>
                            <Box
                                width={"15%"}
                                display={'flex'}
                                alignItems={'center'}
                                fontSize={'sm'}
                            >
                                {new Date(row.createdAt).toDateString()}
                            </Box>
                            <Box
                                width={"10%"}
                            >
                                <Text
                                    // color={'white'}
                                    fontSize={'12'}
                                    fontWeight={'semibold'}
                                    // bg={'yellow.300'}
                                    // align={'center'}
                                    px={2}
                                    py={1}
                                    textTransform={'capitalize'}
                                // borderRadius={'full'}
                                >

                                    {row.totalBlogs}
                                </Text>
                            </Box>
                            <Box
                                width={"20%"}
                            >
                                <HStack
                                    justifyContent={'flex-start'}
                                    pl={3}
                                >
                                    <Box
                                        cursor={'pointer'}
                                        bg={'white'}
                                        px={3}
                                        py={1}
                                        shadow='sm'
                                        borderRadius={'full'}
                                        onClick={moreFun}
                                    >
                                        <Text
                                            fontSize={'sm'}
                                            fontWeight={'medium'}
                                            color={'black'}
                                        >More</Text>
                                    </Box>



                                    <Box
                                        bg={'white'}
                                        cursor={'pointer'}
                                        px={3}
                                        py={1}
                                        shadow='sm'
                                        borderRadius={'full'}
                                        onClick={deleteFun}
                                    >
                                        <Text
                                            fontSize={'sm'}
                                            fontWeight={'medium'}
                                            color={'red.300'}
                                        >Delete</Text>
                                    </Box>
                                </HStack>
                            </Box>
                        </HStack>
                    )
                })
            }
        </>
    )
}
const btnStyle = {

}
export default UserTable;
