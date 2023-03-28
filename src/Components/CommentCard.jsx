import { HStack, Box, Text, Image, VStack, Flex } from "@chakra-ui/react"
import { useMemo } from "react";

const CommmentCard = ({style={marginTop:'5%'}, width='100%', shadow='lg', data }) => {
    const {userName = "",comment=""} = useMemo(()=>{
        return data;
    },[data]);
    
    return <>
        
        <VStack p={2}
        w={width}
        style={style}
        shadow={shadow}
        align={'flex-start'}
        backgroundColor={'rgba(0,0,0,0.02)'}
        rounded={'lg'}
        >
            <HStack 
            
            >
                <Flex
                rounded={"full"}
                overflow={"hidden"}
                w={"30px"}
                align={"center"}
                bg={"blue.300"}
                justifyContent={"center"}
                h={"30px"}
              >
                <Text
                  fontWeight={"semibold"}
                  color={"white"}
                  textTransform={"capitalize"}
                >
                  {String(userName).charAt(0)}
                </Text>
                
              </Flex>
                <Text
                fontSize={'sm'}
                fontWeight={'semibold'}
                textTransform={'capitalize'}
                >
                    {userName}
                </Text>
            </HStack>
            <Text
            fontSize={'sm'}
            px={1}
            >
                {comment}
            </Text>
        </VStack>
    </>
    
}

export default CommmentCard