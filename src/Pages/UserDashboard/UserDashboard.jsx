import { Flex, HStack, VStack, Text, Box, Button } from "@chakra-ui/react"
import { useCallback, useEffect, useMemo, useState } from "react"
import SearchBox from "../../Components/SeachBox"
import UserDashboardRouting from "../../Routing/UserDashboardRouting"
import { useNavigate } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { logoutUser } from "../../Store/Slices/userSlice"
const getPagesByUserType = (userType) => {
    console.log('call page')
    if (userType == 'user') {
        return [
            {
                title: 'Home',
                to: '/dashboard'
            },
            {
                title: 'All Blogs',
                to: '/dashboard/blogs'
            },
            {
                title: 'Create New Blog',
                to: '/dashboard/create',
                state:{type : 'create' }
            },

        ]
    }
    else {
        return [
            {
                title: 'Home',
                to: '/dashboard'
            },
            {
                title: 'All Blogs',
                to: '/dashboard/blogs'
            },
            {
                title: 'Create New Blog',
                to: '/dashboard/create'
            },
            {
                title: 'All Users',
                to: '/dashboard/allUsers'
            },
            {
                title: 'Recent Blogs',
                to: '/dashboard/create'
            }

        ]
    }
}
const UserDashBoard = () => {
    const userDispatch = useDispatch();
    const UserState = useSelector((state)=> state.user);
    const [activePage, setActivePage] = useState(0);
    const Nav = useNavigate();
    const Pages = useMemo(() => {
        return getPagesByUserType(UserState.type);
    }, [UserState.type]);
    // const Pages = getPagesByUserType(userType);
    const clickToPageButton = (index, to, state={ }) => {
        setActivePage(index);
        Nav(to, {state:state});
    }
    const logOutFun = () => {
        userDispatch(logoutUser())
        Nav('/');
    }

    useEffect(()=>{
        if(!UserState.logged){Nav('/')};
    },[UserState.logged])
    return (


        <HStack
            bg={'#F2F4F4'}
            width={'100%'}
            height={'100vh'}
            p={3}
        >
            <VStack
                rounded={'lg'}
                flex={1}
                height={'100%'}
                bg={'#3498DB'}
                p={2}
                align={'flex-start'}
                shadow={'lg'}
            >

                <Text
                    px={2}
                    color={'white'}
                    fontSize={'2xl'}
                    fontWeight={'medium'}
                >Blog</Text>


                <VStack
                    width={"100%"}
                    align={'flex-start'}

                >

                    {
                        Pages.map((item, index) => {
                            return (
                                <Box
                                    key={index}
                                    p={2}
                                    transition={'all 400ms ease'}
                                    mb={2}
                                    // bg={'rgba(255, 255, 255,1)'}
                                    w={'100%'}
                                    rounded={'md'}
                                    // shadow={'md'}
                                    cursor={'pointer'}
                                    onClick={() => { clickToPageButton(index, item.to, item?.state) }}
                                    bg={(activePage === index) && 'rgba(255,255,255,0.4)'}

                                >
                                    <Text
                                        fontWeight={'semibold'}
                                        color={'white'}
                                    >{item.title}</Text>
                                </Box>

                            )
                        })
                    }

                </VStack>


            </VStack>
            <VStack
                width={'85%'}
                // border={'1px'}
                height={'100vh'}
                px={3}
                py={2}

            >

                <Flex
                    flex={1}
                    // bg={'white'}

                    rounded={'lg'}
                    shadow={'lg'}
                    w={'100%'}
                    h={'100%'}
                    flexDirection={'column'}
                    px={10}
                    py={4}
                    bg={'#F7F9F9'}
                >
                    <HStack justify={'space-between'}
                        py={1}
                    >
                        <Text
                            fontWeight={'semibold'}
                            px={1}
                        >{Pages[activePage].title}</Text>
                        <SearchBox
                            style={{
                                boxShadow: '0 2px 6px -1px rgba(0, 0, 0, 0.2)'
                            }}
                        />
                        <Button
                            onClick={logOutFun}
                        >
                            Logout
                        </Button>
                    </HStack>
                    <UserDashboardRouting />
                </Flex>
            </VStack>
        </HStack>
    )
}
export default UserDashBoard