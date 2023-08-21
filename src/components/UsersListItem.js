import { GoTrash } from 'react-icons/go';
import Button from './Button';
import { removeUser } from '../store';
import useThunk from '../hooks/use-thunk';
import ExpandablePanel from './ExpandablePanel';
import AlbumsList from './AlbumsList';

export function UsersListItem({ user }) {
    const [doRemoveUser, isLoadingDeletingUser, error] = useThunk(removeUser);
    const handleClick = () => {
        doRemoveUser(user);
    }

    const header = <>
        <Button className="mr-3" loading={isLoadingDeletingUser} onClick={handleClick}>
            <GoTrash />
        </Button>
        {error && <div>Error deleting user.</div>}
        {user.name}
    </>

    return (
        <ExpandablePanel header={header}>
            <AlbumsList user={user} />
        </ExpandablePanel>
    );
}
