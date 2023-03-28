import {
  Box,
  Button,
  Flex,
  HStack,
  Image,
  Text,
  VStack,
} from "@chakra-ui/react";
import { useMemo } from "react";
import { AiFillLike, AiOutlineLike } from "react-icons/ai";
import { MdOutlineInsertComment } from "react-icons/md";
import { RiShareForwardLine } from "react-icons/ri";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { likeBlogFun } from "../Functions/blogsFun";
const BlogCard = ({ userName, title, description, thumnail, isLiked, index }) => {
  const Nav = useNavigate();
  const BlogState = useSelector((state)=> state.blogs);
  const UserState = useSelector((state)=> state.user);
  const navigateToSingleBlog = ()=>{
    Nav("/blog", {state:{userName, title, description, thumnail, index}});
  }
  const likeBlog = async (status) => {
    const params = {
      userId: UserState._id, name: UserState.name, blogId: BlogState[index]._id, status, index
    }
    const res =  await likeBlogFun(params);
    console.log(res, 'res of like blog');
  }
  return (
    <>
      <Flex
        // border={'1px'}
        bg={"white"}
        w={"35vw"}
        p={4}
        boxShadow={"md"}
        rounded={"lg"}
        style={{
          marginBottom: "20px",
          marginTop: "10px",
        }}
      >
        <VStack align={"flex-start"} w={"100%"}>
          <HStack w={"100%"}>
            <Flex align={"center"}>
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
                {/* <Image
                                    h={'100%'}
                                    w={'100%'}
                                    src="https://bit.ly/dan-abramov"
                                /> */}
              </Flex>

              <Text
                fontSize={"sm"}
                px={2}
                textTransform={"capitalize"}
                fontWeight={"semibold"}
              >
                {userName}
              </Text>
            </Flex>
          </HStack>
          <Text p={1} fontSize={"md"} fontWeight={"bold"}>
            {String(title).substring(0, 20)}
            {`${title.length > 20 ? `...` : ``}`}
          </Text>
          <Box
            w={"100%"}
            cursor={"pointer"}
            onClick={navigateToSingleBlog}
          >
            <Flex
              w={"100%"}
              h={"35vh"}
              align={"center"}
              justify={"center"}
              rounded={"lg"}
              overflow="hidden"
            >
              <Image w={"auto"} h={"100%"} src={thumnail} />
            </Flex>
            <Text fontSize={"md"} fontWeight={"semibold"}>
              {String(description).substring(0, 20)}
              {`${description.length > 20 ? `...` : ``}`}
            </Text>
          </Box>

          <HStack py={1} justify={"space-between"} w={"100%"}>
            <Button variant={"unstyled"}>
              <Flex align={"center"}>
                {BlogState[index].isliked ? (
                  <AiFillLike color={"#4299e1"} size={20} onClick={()=>likeBlog(false)} />
                ) : (
                  <AiOutlineLike
                  onClick={()=>likeBlog(true)}
                    // color={'#4299e1'}
                    size={20}
                  />
                )}

                <Text px={1} fontWeight={"semibold"}>
                  Like
                </Text>
              </Flex>
            </Button>
            <Button variant={"unstyled"} onClick={navigateToSingleBlog}>
              <Flex align={"center"} >
                <MdOutlineInsertComment
                  // color={'#4299e1'}
                  size={20}
                />
                <Text px={1} fontWeight={"semibold"}>
                  Comment
                </Text>
              </Flex>
            </Button>
            <Button variant={"unstyled"}>
              <Flex align={"center"}>
                <RiShareForwardLine
                  // color={'#4299e1'}
                  size={20}
                />
                <Text px={1} fontWeight={"semibold"}>
                  Share
                </Text>
              </Flex>
            </Button>
          </HStack>
        </VStack>
      </Flex>
    </>
  );
};
export default BlogCard;
