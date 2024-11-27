import {setUsers} from "@/app/db";

export async function POST(request: Request) {
  const formData = await request.formData()
  const name = formData.get('name')
  const email = formData.get('email')
  setUsers({name: String(name), email: String(email)})
  return Response.json({ name, email })
}