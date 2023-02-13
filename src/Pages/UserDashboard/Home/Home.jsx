import { Heading, HStack, VStack, Box, Flex } from "@chakra-ui/react";
import PerformanceCard from "../../../Components/PerformanceCard";
import { AiOutlineLike, AiOutlineComment } from 'react-icons/ai';
import { MdOutlineArticle } from 'react-icons/md';
import BarGraph from "../../../Components/BarGraph";
import LineGraph from "../../../Components/LineGraph";
import { useEffect, useRef } from "react";
const UserDashBoardHome = () => {
    const containerRef = useRef(null);
    useEffect(()=>{
        containerRef.current.style.transform='translateY(10%)';
            containerRef.current.style.opacity=0;
        setTimeout(()=>{
            containerRef.current.style.transform='translateY(0%)';
            containerRef.current.style.opacity=1;
        },400)
    },[0])
    return (
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
                >Recent Activity</Heading>
                <Flex
                    justify={'flex-start'}
                >
                    <PerformanceCard
                        title={'Total Blogs'}
                        data={'20'}
                        Icon={
                            () => {
                                return <MdOutlineArticle size={40} color={'white'} />
                            }
                        }
                        colors={['#36d1dc', '#5b86e5']}
                    />
                    <PerformanceCard
                        title={'Total Likes'}
                        data={'20K'}
                        Icon={
                            () => {
                                return <AiOutlineLike size={40} color={'white'} />
                            }
                        }
                        colors={['#ff512f', '#dd2476']}
                    />
                    <PerformanceCard
                        title={'Total Comments'}
                        data={'20K'}
                        Icon={
                            () => {
                                return <AiOutlineComment size={40} color={'white'} />
                            }
                        }
                        colors={['#4568dc', '#b06ab3']}
                    />


                    {/* <PerformanceCard /> */}
                </Flex>
            </Box>
            <Heading
                py={2}
                fontSize={'lg'}
            >Statistics</Heading>
            <HStack
                width={"100%"}
                height={'100%'}
                flex={1}
            >
                <BarGraph />
                <LineGraph />

            </HStack>
        </VStack >

    )
}

export default UserDashBoardHome;