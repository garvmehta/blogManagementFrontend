import { HStack, Box, Text, Image, VStack } from "@chakra-ui/react"

const CommmentCard = () => {
    return <>
        
        <VStack p={2}
        style={{
            marginTop:'5%'
        }}
        shadow={'lg'}
        align={'flex-start'}
        w={'100%'}
        backgroundColor={'rgba(0,0,0,0.02)'}
        rounded={'lg'}
        >
            <HStack 
            
            >
                <Box
                    width={30}
                    height={30}
                    rounded={'full'}
                    overflow={'hidden'}
                >
                    <Image
                        w={'auto'}
                        h={'100%'}

                        src="https://bit.ly/dan-abramov"
                    />
                </Box>
                <Text
                fontSize={'sm'}
                fontWeight={'semibold'}
                >
                    UserName
                </Text>
            </HStack>
            <Text
            fontSize={'sm'}
            px={1}
            >
                Nice Blog
            </Text>
        </VStack>
    </>
}

export default CommmentCard