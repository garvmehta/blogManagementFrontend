import { HStack, Input } from "@chakra-ui/react";
import { FiSearch } from 'react-icons/fi';

const SearchBox = () => {
    return (
        <HStack
            width={"40%"}
            style={{
                backgroundColor: 'rgba(255,255,255,1)'
            }}

            px={2}
            rounded={'lg'}
        >
            <Input
                bg={'transparent'}
                outline={'none'}
                _focusVisible={{
                    outline: 'none'
                }}
                fontSize={'sm'}
                px={0}
                py={2}
                m={0}
                height={'auto'}
                border={'0px'}
                placeholder="Search Blogs"
                fontWeight={'semibold'}
                _placeholder={{
                    color: 'black.300',
                }}
            />
            <FiSearch
                color={'#4299e1'}
                size={20}
            />

        </HStack>
    )
}
export default SearchBox