import { VStack } from "@chakra-ui/react";
import BlogCard from "../../Components/BlogCard";

const Blogs = () => {
    return (
        <>
            <VStack>
                {/* BLogs */}

                <BlogCard />
                <BlogCard />
                <BlogCard />
            </VStack>
        </>
    )
}

export default Blogs;