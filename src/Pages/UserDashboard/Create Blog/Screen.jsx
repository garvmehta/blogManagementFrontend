import { HStack, Box, Input, Text, Heading, VStack, Button, Flex } from "@chakra-ui/react";
import AnimatedSection from "../../../Components/AnimatedSection";
import FileUpload from "../../../Components/FileUpload";
import TextEditor from "../../../Components/TextEditor";
import TextInput from "../../../Components/TextInput";
import { primaryColor } from "../../../constant";
const CreateBlog = () => {
    return <>
        <AnimatedSection title={'Create New Blog'}>
            <HStack
                align={'flex-start'}

                width={'100%'}>
                <Box w={'50%'}>
                    <TextInput
                        title={'title'}
                        placeholder={'title of the blog'}
                    />
                </Box>
                <Box w={'50%'} >
                    <FileUpload />
                </Box>
            </HStack>
            <VStack
                w={'100%'}
                p={2}
                align={'flex-start'}
            >
                <Heading
                    fontSize={'lg'}
                >
                    Content
                </Heading>
                <Box w={'100%'}>
                    <TextEditor />
                </Box>
                <Flex width={'100%'}>
                <Button colorScheme='blue' w={'100%'} my={2} bg={primaryColor} >Create</Button>
                </Flex>
            </VStack>

        </AnimatedSection>
    </>
}
export default CreateBlog;