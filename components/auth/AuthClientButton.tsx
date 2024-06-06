'use client'

import { Session, createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import React from 'react'
import { Button } from '../ui/button'
import { useRouter } from 'next/navigation'

const AuthClientButton = ({session}: {session: Session | null}) => {

const router = useRouter()

   const supbase = createClientComponentClient();

   const  signinwithGithub = async () => {
      await supbase.auth.signInWithOAuth({
        provider: "github",
        options: {
            redirectTo: `${location.origin}/auth/callback` //サーバー側で動くapi
        }
      });
   }

   const signoutwithGithub = async () => {
    window.confirm('ログアウトしますか？')
    await supbase.auth.signOut();
    router.refresh();
   }

  return (
    <>
    {session ? <Button onClick={signoutwithGithub}>ログアウト</Button> :
      <Button onClick={signinwithGithub}>サインイン</Button>
    }
    </>

  )
}

export default AuthClientButton