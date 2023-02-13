import { HStack, Text, VStack } from "@chakra-ui/react";
import { AiOutlineLike } from 'react-icons/ai';
const PerformanceCard = ({
    title,
    data,
    Icon,
    colors
}) => {
    return (
        <HStack
            width={'23vw'}
            p={4}
            mr={5}
            shadow={'md'}
            rounded={'lg'}
            bgGradient={`linear(to-r, ${colors[0]} , ${colors[1]} )`}
            justify={'space-between'}
        >

            <VStack
                align={'flex-start'}

            >
                <Text
                    fontSize={'xl'}
                    color={'white'}
                >{data}</Text>
                <Text
                    color={'white'}
                    fontWeight={'semibold'}
                >{title}</Text>
            </VStack>
            <Icon />
        </HStack>
    )
}
export default PerformanceCard;