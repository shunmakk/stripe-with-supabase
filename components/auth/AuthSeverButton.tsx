
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'
import React from 'react'
import AuthClientButton from './AuthClientButton'

const AuthSeverButton  = async () => {

    const supbase = createServerComponentClient({cookies})

    const {data: user} = await supbase.auth.getSession();
    const session = user.session;

  return <AuthClientButton  session={session}  />
}

export default AuthSeverButton