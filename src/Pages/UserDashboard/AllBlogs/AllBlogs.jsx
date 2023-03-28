import { Heading, HStack, VStack, Box, Flex, Text, useDisclosure } from "@chakra-ui/react";
import { useState, useRef, useEffect } from "react";
import DeleteModal from "../../../Components/DeleteComponent";
import Table from "../../../Components/TableComponent";
import { useNavigate, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { deleteBlogFun } from "../../../Functions/blogsFun";
const AllBlogs = () => {
    const userAllBlogs = useSelector((state)=> state.dashboard.allUserBlogs)
    const containerRef = useRef(null);
    const Nav = useNavigate();
    const currentPath = useLocation().pathname;
    useEffect(() => {
        console.log(userAllBlogs, 'user blogs');
        containerRef.current.style.transform = 'translateY(10%)';
        containerRef.current.style.opacity = 0;
        setTimeout(() => {
            containerRef.current.style.transform = 'translateY(0%)';
            containerRef.current.style.opacity = 1;
        }, 400)
    }, [])
    const deleteBlog = async(index)=>{
        console.log(index, 'index');
         const res = await deleteBlogFun({index,id:userAllBlogs[index]._id})
         console.log(res, 'delete blog');
    }
    const editPage = (index)=>{
        Nav(`/dashboard/create`, {state:{title:userAllBlogs[index].title, description:userAllBlogs[index].description, type: 'edit', index, id:userAllBlogs[index]._id }});  
    }
    const openSingleBlog = (index)=>{
        Nav(`/dashboard/singleBlog`,{state:{index:index}})
    }
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
                    >All BLogs</Heading>
                </Box>
                {/* Table*/}
                <Box w={'100%'}>
                    <VStack
                        width={'100%'}
                        height={'100%'}
                        position={'relative'}

                    >
                        <Table tableData={userAllBlogs} moreFun={openSingleBlog}  deleteAction={deleteBlog} editFun={editPage}/>


                    </VStack>
                </Box>
            </VStack >
        </>
    )
}
export default AllBlogs;