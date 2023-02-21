import { HStack, Box, Input } from "@chakra-ui/react";
import AnimatedSection from "../../../Components/AnimatedSection";
import TextInput from "../../../Components/TextInput";

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
                <Box w={'50%'}>
                    <Input type={'file'} />
                </Box>
            </HStack>

        </AnimatedSection>
    </>
}
export default CreateBlog;