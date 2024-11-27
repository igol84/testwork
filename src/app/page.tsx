import {getUsers} from "@/app/db";
import Users from "../../components/users";

export default function Home() {
  const usersDB = getUsers()
  return (
    <div>
      <Users usersList={usersDB}/>
    </div>
  );
}
