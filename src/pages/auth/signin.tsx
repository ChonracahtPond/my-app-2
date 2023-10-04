import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function LoginPage() {
    const { data: session } = useSession()
    const router = useRouter()
    useEffect(() => {
        if (session) router.push("/");
    })

    return <>
        <button onClick={() => signIn('credentials', {
            username: 'jsmith@example.com',
            password: 'password'
        })}>LOGIN</button>
    </>
}