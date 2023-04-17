'use client'
 import { useRouter } from 'next/navigation';
 import Image from 'next/image';
const Logo = () => {
    const router = useRouter();

  return (
    <Image alt="Logo" className='hidden md:block cursor-pointer' height="100" width="100" 
    src="/Images/logo.png"/>
  )
}

export default Logo