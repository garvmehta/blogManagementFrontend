import { Heading, HStack, VStack, Box, Flex, Text } from "@chakra-ui/react";
import { useState, useRef, useEffect } from "react";
const AllBlogs = () => {
    const containerRef = useRef(null);
    useEffect(() => {
        containerRef.current.style.transform = 'translateY(10%)';
        containerRef.current.style.opacity = 0;
        setTimeout(() => {
            containerRef.current.style.transform = 'translateY(0%)';
            containerRef.current.style.opacity = 1;
        }, 400)
    }, [0])

    const TableHead = [
        {
            title: 'Sno',
            minWidth: '5%'
        },
        {
            title: 'Title',
            minWidth: '20%'
        }, {
            title: 'Description',
            minWidth: '30%'
        }, {
            title: 'Thumbnail',
            minWidth: '10%'
        }, {
            title: 'Status',
            minWidth: '5%'
        }, {
            title: 'Actions',
            minWidth: '25%'
        },];
    const tableData = [
        {
            sNo: 1,
            title: 'this is title',
            description: 'this is desctions',
            thumbnail:'',
            status: 'pending'
        },
        {
            sNo: 2,
            title: 'this is title',
            thumbnail:'',
            description: 'this is desctions',
            status: 'pending'
        }
    ]
    const getKeyAccordingToIndex = (index)=>{
        let keyName = ''
        switch (index) {
            case 0: keyName = 'sNo'
                break;
            case 1: keyName = 'title';
                break;
            
            case 2: keyName = 'description';
                break;
            case 3: keyName = 'thumba'
                break;
            case 4: keyName = 'action'
        }
        return keyName;
    }

    return (
        <>
            <VStack
                ref={containerRef}
                className="fadeIn"
                w={'100%'}
                align={'flex-start'}
            >
                <Box
                    // border={'1px'}
                    width={'100%'}

                >
                    <Heading
                        pb={2}
                        fontSize={'lg'}
                    >All BLogs</Heading>
                </Box>
                {/* Table*/}
                <Box w={'100%'}>
                    <VStack
                        width={'100%'}

                    >
                        <HStack
                            width={'100%'}
                            // border={'1px'}
                            bg={'#3498DB'}
                            p={2}
                        >
                            {
                                TableHead.map((item, index) => {
                                    return (
                                        <Box key={index}
                                            width={item.minWidth}
                                        >
                                            <Text
                                                color={'white'}
                                            >

                                                {item.title}
                                            </Text>
                                        </Box>
                                    )
                                })

                            }


                        </HStack>
                        {
                            tableData.map((row, rowIndex) => {
                                return (
                                    <HStack
                                        width={'100%'}
                                        // border={'1px'}
                                        bg={'#D6EAF8'}
                                        p={2}
                                    >
                                        {
                                            TableHead.map((col, colIndex) => {

                                                return (
                                                    <Box key={colIndex}
                                                        width={col.minWidth}
                                                    >
                                                        <Text
                                                            color={'black'}
                                                        >
                                                            {row[getKeyAccordingToIndex(colIndex)]}

                                                        </Text>
                                                    </Box>
                                                )
                                            })

                                        }


                                    </HStack>
                                )
                            })
                        }


                    </VStack>
                </Box>
            </VStack >
        </>
    )
}
export default AllBlogs;