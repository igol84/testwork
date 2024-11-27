const users = [{name: "name 1", email: "1@gmail.com"}, {name: "name 2", email: "2@gmail.com"}]

export const getUsers = () => {
  return users;
}

export const setUsers = (user: {name: string, email: string}) => {
  users.push(user)
}