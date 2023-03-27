import { VStack } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import BlogCard from "../../Components/BlogCard";
import { url } from "../../Config/constant";

const Blogs = () => {
    const BlogState = useSelector((state)=> state.blogs );
    return (
        <>
            <VStack>
                {
                    BlogState.map((item, index)=>{
                        return(
                            <BlogCard key={index} 
                             userName={item.userInfo[0].name}
                             title={item.title}
                             description={item.description}
                             thumnail={`${url}/image/${item.thumbnail}`}
                             isLiked={item.liked}
                             />            
                        );
                    })
                }
                {/* BLogs */}

                
            </VStack>
        </>
    )
}

export default Blogs;