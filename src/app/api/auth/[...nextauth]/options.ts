import type { NextAuthOptions, User } from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"


export const options: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: {
          label: "Username",
          type: "text",
          placeholder: "username"
        },
        password: {
          label: "Password",
          type: "password",
          placeholder: "password"
        }
      },
      async authorize(credentials) {
        const user: User = { id: "0", name: "testUsername", email: "testEmail@gmail.com" }
        return user
      }
    })
  ]
}