import { HStack, Box, Text, Button, Image , useDisclosure} from "@chakra-ui/react"
import { useState } from "react";
import { url } from "../Config/constant";
import { primaryColor } from "../constant";
import DeleteModal from "./DeleteComponent";
const tableRowBg = '#D6EAF8';
const Table = ({ tableData, editFun, moreFun , deleteAction }) => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [index, setIndex] = useState(0);
    const deleteFun =(index)=>{
        onOpen();
        setIndex(index);
    }
    

    return (
        <>
            <DeleteModal isOpen={isOpen} onClose={onClose} action={deleteAction} index={index}/>        
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

                        Title
                    </Text>
                </Box>
                <Box
                    width={"28%"}
                >
                    <Text
                        color={'white'}
                    >

                        Description
                    </Text>
                </Box>
                <Box
                    width={"15%"}
                >
                    <Text
                        color={'white'}
                    >

                        Thumbnail
                    </Text>
                </Box>
                <Box
                    width={"10%"}
                >
                    <Text
                        color={'white'}
                    >

                        Status
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
                                    {index +1}

                                </Text>
                            </Box>
                            <Box
                                width={"15%"}
                            >
                                <Text
                                    color={'black'}
                                >

                                    {row.title}
                                </Text>
                            </Box>
                            <Box
                                width={"28%"}
                            >
                                <Text
                                    color={'black'}
                                >

                                    {row.description}
                                </Text>
                            </Box>
                            <Box
                                width={"15%"}
                                display={'flex'}
                                alignItems={'center'}
                            >
                                <Box
                                    width={'40%'}
                                    borderRadius={'lg'}
                                    overflow={'hidden'}
                                >
                                    <Image

                                        src={`${url}/image/${row.thumbnail}`}
                                    />

                                </Box>
                            </Box>
                            <Box
                                width={"10%"}
                            >
                                <Text
                                    color={'white'}
                                    fontSize={'12'}
                                    bg={`${(row.status ==="pending")?"yellow.300":"green.300"}`}
                                    align={'center'}
                                    px={2}
                                    py={1}
                                    textTransform={'capitalize'}
                                    borderRadius={'full'}
                                >

                                    {row.status}
                                </Text>
                            </Box>
                            <Box
                                width={"20%"}
                            >
                                <HStack
                                    justifyContent={'space-around'}
                                    pl={3}
                                >
                                    <Box
                                        cursor={'pointer'}
                                        bg={'white'}
                                        px={3}
                                        py={1}
                                        shadow='sm'
                                        borderRadius={'full'}
                                        onClick={()=>{
                                            moreFun(index);
                                        }}
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
                                        onClick={()=>{
                                            editFun(index)
                                        }}
                                    >
                                        <Text
                                            fontSize={'sm'}
                                            fontWeight={'medium'}
                                            color={'yellow.300'}
                                        >Edit</Text>
                                    </Box>

                                    <Box
                                        bg={'white'}
                                        cursor={'pointer'}
                                        px={3}
                                        py={1}
                                        shadow='sm'
                                        borderRadius={'full'}
                                        onClick={()=>{deleteFun(index)}}
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
export default Table;
