import { Text } from '@chakra-ui/react'
import AnimatedSection from "../../../Components/AnimatedSection";
import Table from '../../../Components/TableComponent';
import UserTable from '../../../Components/UsersTable';
const data = [
    {
        sNo: 1,
        name: 'User Name',
        email: 'email@gmail.com',
        createdAt: '2023-02-15T09:51:38.491Z',
        totalBlogs: 20

    },
    {
        sNo: 1,
        name: 'User Name',
        email: 'email@gmail.com',
        createdAt: '2023-02-15T09:51:38.491Z',
        totalBlogs: 20

    },
    {
        sNo: 1,
        name: 'User Name',
        email: 'email@gmail.com',
        createdAt: '2023-02-15T09:51:38.491Z',
        totalBlogs: 20

    }
]
const AllUsers = () => {
    return (
        <>
            <AnimatedSection title={'All Users'}>
                    <UserTable tableData={data} />
            </AnimatedSection>
        </>
    )
}
export default AllUsers;