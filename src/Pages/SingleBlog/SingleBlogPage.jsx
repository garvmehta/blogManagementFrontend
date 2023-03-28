import {
  HStack,
  VStack,
  Text,
  Image,
  Box,
  Input,
  Flex,
  Button,
} from "@chakra-ui/react";
import { AiOutlineSend, AiOutlineLike, AiFillLike } from "react-icons/ai";
import CommmentCard from "../../Components/CommentCard";
import { useLocation } from "react-router-dom";
import { useMemo, useState } from "react";
import { useSelector } from "react-redux";
import { addCommentFun, likeBlogFun } from "../../Functions/blogsFun";

const getTotalLikes = (likes) => (likes > 0 ? likes : "");

const SingleBlogPage = () => {
  const location = useLocation();
  const { userName, title, description, thumnail, index } = location.state;
  const BlogState = useSelector((state) => state.blogs);
  const UserState = useSelector((state) => state.user);
  const [comment, setComment] = useState('')

  const { _id, createdAt } = useMemo(() => {
    console.log("useMemo data");
    return BlogState[index];
  }, [index]);
  console.log("data");
  const postComment = async () => {
    if (comment.trim().length > 0) {
      const commentData = {
        name: UserState.name,
        blog_id: _id,
        comment
      }
      const res = await addCommentFun({ userId: UserState._id, commentData, index });
      console.log(res, 'addComment fun...');
      setComment("");
    }
  }
  const likeBlog = async (status) => {
    const params = {
      userId: UserState._id, name: UserState.name, blogId: _id, status, index
    }
    const res =  await likeBlogFun(params);
    console.log(res, 'res of like blog');
  }
  return (
    <>
      <HStack
        // border={'1px'}
        width={"80%"}
        height={"100%"}
        p={3}
        align="flex-start"
      >
        {/* Full Article */}
        <VStack
          width={"65%"}
          // border={'1px'}
          bg={"white"}
          shadow={"xl"}
          rounded={"lg"}
          align="flex-start"
          p={3}
          mx={3}
        >
          <HStack
            p={2}
            w={"100%"}
            justify={"space-between"}
          // bg={'#D6EAF8 '}

          // border={'1px'}
          >
            <HStack w={"30%"}>
              {/* <Box
                            width={50}
                            height={50}
                            rounded={'full'}
                            overflow={'hidden'}
                        >
                            <Image
                                w={'auto'}
                                h={'100%'}

                                src="https://bit.ly/dan-abramov"
                            />
                        </Box> */}
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
              <Box px={3}>
                <Text
                  fontSize={"sm"}
                  fontWeight={"semibold"}
                  textTransform={"capitalize"}
                >
                  {userName}
                </Text>
                <Text fontSize={"xs"} fontWeight={"semibold"}>
                  {new Date(createdAt).toDateString()}
                </Text>
              </Box>
            </HStack>
            <HStack px={2} width={"70%"} justifyContent={"flex-end"}>
              <Button align={"center"} bg={"transparent"} p={0}>
                {BlogState[index].isliked ? (
                  <AiFillLike color={"#4299e1"} onClick={()=>likeBlog(false)} />
                ) : (
                  <AiOutlineLike color={"#4299e1"} onClick={()=>likeBlog(true)} />
                )}
                <Text>{getTotalLikes(BlogState[index].totalLikes)}</Text>
              </Button>
            </HStack>
          </HStack>

          <VStack align={"flex-start"}>
            <Text fontSize={"lg"} fontWeight={"bold"}>
              {title}
            </Text>
            <Box
              width={"100%"}
            // rounded={'lg'}
            // overflow={'hidden'}
            >
              <Image w={"auto"} h={"100%"} src={thumnail} />
            </Box>
            <Box p={2}>{description}</Box>
          </VStack>
        </VStack>
        {/* comments */}
        <VStack
          shadow={"lg"}
          rounded={"lg"}
          width={"35%"}
          align={"flex-start"}
          // border={'1px'}
          bg={"white"}
          p={2}
          style={{
            position: "sticky",
            top: "11%",
          }}
          height={"88vh"}
        >
          <Text fontSize={"lg"} fontWeight={"semibold"}>
            Comments
          </Text>
          <HStack width={"100%"} justify={"flex-start"}>
            {/* <Box width={50} height={50} rounded={"full"} overflow={"hidden"}>
              <Image w={"auto"} h={"100%"} src="https://bit.ly/dan-abramov" />
            </Box> */}
            <Flex
              rounded={"full"}
              overflow={"hidden"}
              w={"30px"}
              mx={1}
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
            <HStack w={"85%"}>
              <Input
                m={0}
                fontSize={"sm"}
                p={0}
                py={1}
                height={"auto"}
                _focusVisible={{
                  outline: "none",
                }}
                value={comment}
                onChange={(e) => {
                  setComment(e.target.value);
                }}
                rounded={"none"}
                placeholder="Add Comment"
                border={"none"}
                borderBottom={"1px solid black"}
              />
              <Box bg={"blue.300"} p={"2"} rounded={"full"} onClick={postComment}>
                <AiOutlineSend color={"white"} />
              </Box>
            </HStack>
          </HStack>
          <Box p={1} width={"100%"} minHeight={"80%"} overflow={"auto"}>
            {/* comments */}

            {BlogState[index].comments.map((item, index) => {
              return <CommmentCard key={index} data={{ userName: item.name, comment: item.comment }} />;
            })}
          </Box>
        </VStack>
      </HStack>
    </>
  );
};
export default SingleBlogPage;
