import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useDisclosure,
    Button,
    Text,
    CloseButton
} from '@chakra-ui/react'

const DeleteModal = ({ isOpen, onClose }) => {

    return (
        <>
            <Modal isCentered isOpen={isOpen} onClose={onClose} >
                <ModalOverlay />

                <ModalContent m={0} >
                    <ModalHeader position={'relative'}>
                        <CloseButton
                            onClick={onClose}
                            _hover={{backgroundColor:'transparent'}}
                            color={'red.500'} position={'absolute'} right={'2%'} />
                        <Text>Delete Blog</Text>
                    </ModalHeader>

                    <ModalBody>
                        <Text textTransform={'capitalize'}>Do You Really Want To delete this Blog?</Text>
                    </ModalBody>

                    <ModalFooter>
                        <Button 
                        _hover={{backgroundColor:'transparent'}}
                        variant='outline' borderWidth={2} borderColor={'red.500'} color={'red.500'}onClick={onClose} >Cancel</Button>
                        <Button 
                        _hover={{backgroundColor:'defualt'}}
                        colorScheme='red' mx={3} >
                            Delete
                        </Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    )
}
export default DeleteModal