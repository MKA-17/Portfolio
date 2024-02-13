import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/navbar/Navbar'
import Footer from '@/components/Footer/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Home',
  description: 'Portfolio home page',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
<body className="font-sans text-white bg-gradient-to-b from-[#0c0c1d] via-[#242450] to-blue-950  ">
      
      {/* <div className='text-white bg-gradient-to-b from-gray-800 to-gray-900 hover:bg-red-600'>
          <div className='h-20 '>
        </div> */}
          {/* <div className='h-[calc(100vh-5rem)] flex '> */}
          
        <Navbar/>
          

            {children}

            {/* Footer */}
            <Footer/>

  
  
           
          {/* </div> */}
          {/* <div className='h-28 '>
            <Navbar/>
          </div> */}
        {/* </div> */}
      </body>
    </html>
  )
}
