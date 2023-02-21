import { Heading, HStack, VStack, Box, Flex, Text, useDisclosure } from "@chakra-ui/react";
import { useState, useRef, useEffect } from "react";

const AnimatedSection = ({children, title}) => {
    const containerRef = useRef(null);
    
    
    useEffect(() => {
        console.log(children);
        containerRef.current.style.transform = 'translateY(10%)';
        containerRef.current.style.opacity = 0;
        setTimeout(() => {
            containerRef.current.style.transform = 'translateY(0%)';
            containerRef.current.style.opacity = 1;
        }, 400)
    }, [0])

    

    
    return (
        <>
            
            <VStack
                ref={containerRef}
                className="fadeIn"
                w={'100%'}
                h={'100%'}
                overflow={'scroll'}
                align={'flex-start'}
                position={'relative'}
            >
                <Box
                    // border={'1px'}

                    width={'100%'}
                    position={'sticky'}
                    top={0}

                >
                    <Heading
                        pb={2}
                        fontSize={'lg'}
                    >{title}</Heading>
                </Box>
                {/* Table*/}
                <Box w={'100%'}>
                    <VStack
                        width={'100%'}
                        height={'100%'}
                        position={'relative'}

                    >
                        {/* <Table tableData={tableData} moreFun={openSingleBlog}/> */}

                        {children}
                    </VStack>
                </Box>
            </VStack >
        </>
    )
}
export default AnimatedSection;