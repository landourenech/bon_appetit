import React from 'react'
import Image from 'next/image'
export default function Footer() {
  return (
   <>
     
     <div className='w-full h-56 bg-black mt-32 '>
        <p className='flex justify-center text-2xl text-white mt-5'>Bon appétit</p>
        <div className='flex justify-center items-center gap-6 mt-6'>
<Image src="/facebook.svg"className="" alt="carte" width={50} height={50} />
<Image src="/twitter.svg" className="" alt="carte" width={50} height={50} />
</div>
     </div>
     <div>

     </div>

   </>
  )
}

