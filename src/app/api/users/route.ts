import {getUsers} from "@/app/db";

export async function GET() {
  const users = getUsers()
  return Response.json(
    {users},
    {status: 200},
  );
}