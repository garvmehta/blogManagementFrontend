import { HStack, Box, Input, Text, Heading, VStack, Button, Flex } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import AnimatedSection from "../../../Components/AnimatedSection";
import FileUpload from "../../../Components/FileUpload";
import TextEditor from "../../../Components/TextEditor";
import TextInput from "../../../Components/TextInput";
import { primaryColor } from "../../../constant";
import { editBlogFun } from "../../../Functions/blogsFun";

const CreateBlog = () => {
    const location = useLocation();
    const { type = "", title = "", description = "", id="" , index=0 } = location.state;
    const [fileData, setFileData] = useState(null);
    const [blogData, setBlogData] = useState({
        title: title,
        description: description
    })
    useEffect(()=>{
        console.log(location.state, 'state');
        console.log(blogData);
    },[blogData])
    const upDateBlog = async()=>{
        const res = await editBlogFun({blogId:id, index:index, toUpdate:{title:blogData.title,  description: blogData.description}});
        console.log(res,'edit blog');
    }
    return <>
        <AnimatedSection title={'Create New Blog'}>
            <HStack
                align={'flex-start'}

                width={'100%'}>
                <Box w={'50%'}>
                    <Flex direction={'column'} w="100%">
                        <Text
                            p={'2'}
                            fontWeight={'semibold'}
                            fontSize={'sm'}
                            textTransform={'capitalize'}
                        >{title}</Text>
                        <Input
                            focusBorderColor={'blue.100'}
                            borderWidth={1}
                            placeholder={`Enter title blog`}
                            fontSize={'sm'}
                            type={type}
                            value={blogData.title}
                            onChange={(e)=>{
                                setBlogData({...blogData, title: e.target.value})
                            }}
                        />
                    </Flex>
                </Box>
                <Box w={'50%'} >
                    {
                        (type !== "edit") &&
                        <FileUpload onChange={setFileData} />
                    }

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
                    <TextEditor initalValue={blogData.description} onChange={setBlogData} />
                </Box>
                <Flex width={'100%'}>
                    {
                        (type === 'edit')
                            ? <Button colorScheme='blue' w={'100%'} my={2} bg={primaryColor} onClick={upDateBlog} >Update</Button>
                            : <Button colorScheme='blue' w={'100%'} my={2} bg={primaryColor} >Create</Button>
                    }

                </Flex>
            </VStack>

        </AnimatedSection>
    </>
}
export default CreateBlog;