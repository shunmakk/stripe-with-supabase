import React from 'react'
import Link from 'next/link'
import { Button } from './ui/button'
// import AuthSeverButton from './auth/AuthSeverButton'
import dynamic from 'next/dynamic'

const AuthSeverButton = dynamic(() => import('./auth/AuthSeverButton'), { ssr: false });

const Header = () => {
  return (
    <div className='flex py-4 px-6 border-b border-r-black'>
        <Link href="/">
            <Button variant="outline">ホーム</Button>
        </Link>
        <Link href="/pricing" className='ml-5'>
            <Button variant="outline">価格</Button>
        </Link>
        <div className='ml-auto'>
            <AuthSeverButton/>
        </div>
    </div>
  )
}

export default Header