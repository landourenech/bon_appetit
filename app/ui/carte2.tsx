"use client"

import React from 'react'
import Image from "next/image"
import Link from 'next/link'
import {motion} from 'framer-motion'

export default function Carte2 () {
  return (
    <>
   <div className='flex justify-center mt-16 text-3xl font-serif'>
      <h1>Nos recettes </h1>
   </div>
     
   <div  className=" grid lg:grid-cols-4 grid-cols-2 gap-5 mt-20 p-8  justify-center mb-10 text-center ">

      

<div  className=" flex flex-col justify-center items-center  p-5  shadow-black">
<Image className="  lg:h-40 lg:w-40  md:h-40  w-20 h-20 shadow-lg shadow-red-500 " src="/xpicture3.jpg.pagespeed.ic_.sOoD_3xCgZ-768x652 1.png" alt="carte" width={200} height={200} />
<p className='mt-8'>Thieboudienne ou Riz au gras</p>
<Link href="/detail"><button  className="w-28 mt-8 bg-black text-white rounded-full p-2">Détails</button>  </Link> 
</div>

<div  className=" flex flex-col justify-center items-center  p-10  shadow-black">
<Image className=" lg:h-40  lg:w-40 md:h-40  w-20 h-20 shadow-lg shadow-red-500" src="/xpicture5.jpg.pagespeed.ic_.N4-TzDkQJh 1.png" alt="carte" width={2000} height={2000} />
<p className='mt-8'>Le poisson braisé</p>
 <button  className="w-28 mt-8 bg-black text-white rounded-full p-2">Détails</button>
</div>

<div  className=" flex flex-col justify-center items-center  p-5  shadow-black">
<Image className=" lg:h-40 lg:w-40  md:h-40  w-20 h-20 shadow-lg shadow-red-500 " src="/xrizgras-soumbala.jpg.pagespeed.ic_.cJoj25PeeB 1.png" alt="carte" width={200} height={200} />
<p className='mt-8'>Riz Gras Soumbala</p>
 <button  className="w-28 mt-8 bg-black text-white rounded-full p-2">Détails</button>
</div>

<div  className=" flex flex-col justify-center items-center p-5  shadow-black">
<Image className=" lg:h-40 lg:w-40  md:h-40  w-20 h-20 shadow-lg shadow-red-500" src="/xsaucearachide.jpg.pagespeed.ic_.3IyozpUKTZ 1.png" alt="carte" width={200} height={200} />
<p className='mt-8'> sauce d’arachide</p>
 <button  className="w-28 mt-8 bg-black text-white rounded-full p-2">Détails</button>
</div>


<div  className=" flex flex-col justify-center items-center p-5 shadow-black">
<Image className=" lg:h-40 lg:w-40  md:h-40  w-20 h-20 shadow-lg shadow-red-500" src="/xsaucearachide.jpg.pagespeed.ic_.3IyozpUKTZ 1.png" alt="carte" width={200} height={200} />
<p className='mt-8'>le riz</p>
 <button  className="w-28 mt-8 bg-black text-white rounded-full p-2">Détails</button>
</div>


<div  className=" flex flex-col justify-center items-center  p-5 shadow-black">
<Image className=" lg:h-40 lg:w-40  md:h-40  w-20 h-20 shadow-lg shadow-red-500  " src="/xsaucearachide.jpg.pagespeed.ic_.3IyozpUKTZ 1.png" alt="carte" width={200} height={200} />
<p className='mt-8'>le riz</p>
 <button  className="w-28 mt-8 bg-black text-white rounded-full p-2">Détails</button>
</div>


<div  className=" flex flex-col justify-center items-center p-5  shadow-black">
<Image className="lg:h-40  lg:w-40 md:h-40  w-20 h-20 shadow-lg shadow-red-500" src="/xsaucearachide.jpg.pagespeed.ic_.3IyozpUKTZ 1.png" alt="carte" width={200} height={200} />
<p className='mt-8'>le riz</p>
 <button  className="w-28 mt-8 bg-black text-white rounded-full p-2">Détails</button>
</div>

<div  className=" flex flex-col justify-center items-center  p-5 shadow-black">
<Image className="lg:h-40 lg:w-40 md:h-40  w-20 h-20 shadow-lg shadow-red-500" src="/xsaucearachide.jpg.pagespeed.ic_.3IyozpUKTZ 1.png" alt="carte" width={200} height={200} />
<p className='mt-8'>le riz</p>
 <button  className="w-28 mt-8 bg-black text-white rounded-full p-2">Détails</button>
</div>

</div>

    </>
  )
}

