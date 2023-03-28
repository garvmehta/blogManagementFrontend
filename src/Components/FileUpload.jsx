import {
    InputGroup,
    InputRightElement,
    Input,
    Text

} from '@chakra-ui/react';
import { AiOutlineUpload } from 'react-icons/ai';
const FileUpload = ({onChange}) => {
    return (
        <>
            <Text
                p={'2'}
                fontWeight={'semibold'}
                fontSize={'sm'}
                textTransform={'capitalize'}
            >Upload Thumbnail</Text>
            <InputGroup position={'relative'}>
                <InputRightElement
                    pointerEvents='none'
                    children={
                        <>
                            <AiOutlineUpload className='UploadSvg' />
                        </>}
                />
                <Input type='text' placeholder='Upload Thumbnail' className='form-control p-2 onlyShow' readOnly />
                <Input type='file' className='thumbnail' w='100%'
                    onChange={(e) => {
                        onChange(e.target.files[0]);
                        // setFieldValue("thumbnail", e.target.files[0])
                    }} />
            </InputGroup>

        </>
    )

}
export default FileUpload