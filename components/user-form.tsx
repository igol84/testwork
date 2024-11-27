import {FormEvent} from "react";

interface UsersFormProps {
  addNewUser: (name: string, email: string) => void
}

const UsersForm = ({addNewUser}: UsersFormProps) => {
  const onSubmit = (event: FormEvent<HTMLFormElement>)=>{
    event.preventDefault();
    const formData = new FormData(event.currentTarget)
    const name = formData.get('name');
    const email = formData.get('email');
    addNewUser(String(name), String(email))
  }
  return (
    <div style={{display: 'flex', gap: '10px'}}>
      <form onSubmit={onSubmit}>
        <div>name:<input type="text" name='name'/></div>
        <div>email:<input type="text" name='email'/></div>
        <button type='submit'>add</button>
      </form>
    </div>
  )
}
export default UsersForm