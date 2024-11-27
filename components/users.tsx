'use client'

import UsersForm from "./user-form";
import UsersList from "./user-list";
import {User} from "./type";
import {useState} from "react";

interface ArticleListProps {
  usersList: User[]
}

const Users = ({usersList}: ArticleListProps) => {
  const [users, setUsers] = useState(usersList);
  const addNewUser = (name: string, email: string) => {
    setUsers([...users, {name, email}]);
  }
  return (
    <div>
      <UsersForm addNewUser={addNewUser}/>
      <UsersList usersList={users}/>
    </div>
  )
}

export default Users