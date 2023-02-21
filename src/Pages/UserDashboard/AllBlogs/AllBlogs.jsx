import { Heading, HStack, VStack, Box, Flex, Text, useDisclosure } from "@chakra-ui/react";
import { useState, useRef, useEffect } from "react";
import DeleteModal from "../../../Components/DeleteComponent";
import Table from "../../../Components/TableComponent";
import { useNavigate, useLocation } from "react-router-dom";
const AllBlogs = () => {
    const containerRef = useRef(null);
    const Nav = useNavigate();
    const currentPath = useLocation().pathname;
    useEffect(() => {
        containerRef.current.style.transform = 'translateY(10%)';
        containerRef.current.style.opacity = 0;
        setTimeout(() => {
            containerRef.current.style.transform = 'translateY(0%)';
            containerRef.current.style.opacity = 1;
        }, 400)
    }, [0])

    const openSingleBlog = ()=>{
        Nav(`/dashboard/singleBlog`)
    }

    const tableData = [
        {
            sNo: 1,
            title: 'this is title',
            description: 'this is desctions',
            thumbnail: 'https://images.unsplash.com/photo-1522199755839-a2bacb67c546?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80',
            status: 'pending'
        },
        {
            sNo: 2,
            title: 'this is title',
            thumbnail: 'https://images.unsplash.com/photo-1522199755839-a2bacb67c546?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80',
            description: 'this is desctions',
            status: 'pending'
        },
        {
            sNo: 2,
            title: 'this is title',
            thumbnail: 'https://images.unsplash.com/photo-1522199755839-a2bacb67c546?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80',
            description: 'this is desctions',
            status: 'pending'
        },
        {
            sNo: 1,
            title: 'this is title',
            description: 'this is desctions',
            thumbnail: 'https://images.unsplash.com/photo-1522199755839-a2bacb67c546?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80',
            status: 'pending'
        },
        {
            sNo: 2,
            title: 'this is title',
            thumbnail: 'https://images.unsplash.com/photo-1522199755839-a2bacb67c546?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80',
            description: 'this is desctions',
            status: 'pending'
        },
        {
            sNo: 2,
            title: 'this is title',
            thumbnail: 'https://images.unsplash.com/photo-1522199755839-a2bacb67c546?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80',
            description: 'this is desctions',
            status: 'pending'
        },
        {
            sNo: 1,
            title: 'this is title',
            description: 'this is desctions',
            thumbnail: 'https://images.unsplash.com/photo-1522199755839-a2bacb67c546?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80',
            status: 'pending'
        },
        {
            sNo: 2,
            title: 'this is title',
            thumbnail: 'https://images.unsplash.com/photo-1522199755839-a2bacb67c546?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80',
            description: 'this is desctions',
            status: 'pending'
        },
        {
            sNo: 2,
            title: 'this is title',
            thumbnail: 'https://images.unsplash.com/photo-1522199755839-a2bacb67c546?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80',
            description: 'this is desctions',
            status: 'pending'
        },
        {
            sNo: 1,
            title: 'this is title',
            description: 'this is desctions',
            thumbnail: 'https://images.unsplash.com/photo-1522199755839-a2bacb67c546?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80',
            status: 'pending'
        },
        {
            sNo: 2,
            title: 'this is title',
            thumbnail: 'https://images.unsplash.com/photo-1522199755839-a2bacb67c546?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80',
            description: 'this is desctions',
            status: 'pending'
        },
        {
            sNo: 2,
            title: 'this is title',
            thumbnail: 'https://images.unsplash.com/photo-1522199755839-a2bacb67c546?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80',
            description: 'this is desctions',
            status: 'pending'
        }

    ]
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
                        <Table tableData={tableData} moreFun={openSingleBlog}/>


                    </VStack>
                </Box>
            </VStack >
        </>
    )
}
export default AllBlogs;