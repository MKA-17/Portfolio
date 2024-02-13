import { accounts } from '@/utils/editableData';
import Link from 'next/link';
import React from 'react'
import { SocialIcon } from 'react-social-icons';

export default function Footer() {
  return (
    <footer id='footer' className=" text-white py-4 text-center">
<Link href={"/"} className="md:text-7xl text-4xl font-bold mb-4 hover:text-gray-500">{"</>"}</Link>
             <div className="flex justify-center space-x-4 py-2 px-4 mt-8"  >
          
             {accounts.map(e=><SocialIcon
            network={e.name}
            style={{ height: '35px', width: '35px' }}
            href={e.url}
            bgColor="#2a2a66"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-black rounded-full"
            
          />)}
  </div> 
  
  </footer>
  )
}
