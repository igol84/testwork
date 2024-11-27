import {User} from "./type";

interface UsersListProps {
  usersList: User[]
}

const UsersList = ({usersList}: UsersListProps) => {
  return [...usersList].map((user, index) => (
    <div key={index} style={{display: 'flex', gap: '10px'}}>
      <div>{user.name}</div>
      <div>{user.email}</div>
    </div>
  ))
}
export default UsersList