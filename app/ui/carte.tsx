"use client";


import Image from "next/image"

import React from 'react'

export function Carte() {
  return (
    <>
  <div className="flex justify-center mt-10 text-3xl font-serif">
   <h1>Catégories</h1>
   </div>
      <div className="grid lg:grid-cols-4 grid-cols-2 gap-5 mt-20 p-8 justify-center mb-10 text-center ">

      

        <div className=" flex flex-col justify-center items-center">
        <div>
          <p className="mb-5">Africain</p>
        </div>
        <Image className=" shadow-lg shadow-red-500 lg:h-40 lg:w-40  md:h-40  w-20 h-20" src="/nourriture yoguba.jpg" alt="carte" width={200} height={200} />
        <p className="mt-8">Asun Nourriture yoruba</p>
         <button  className="w-28 mt-8 bg-black text-white rounded-full p-2">Détails</button>
        </div>

        <div  className=" flex flex-col justify-center items-center">
        <div>
          <p className="mb-5">Asiatique</p>
        </div>
        <Image className="shadow-lg shadow-red-500 lg:h-40 lg:w-40  md:h-40  w-20 h-20" src="/Asiatique.jpg" alt="carte" width={200} height={200} />
        <p className="mt-8">smoothie, ramen et poke</p>
         <button  className="w-28 mt-8 bg-black text-white rounded-full p-2">Détails</button>
        </div>

        <div  className=" flex flex-col justify-center items-center">
        <div>
          <p className="mb-5">Européen</p>
        </div>
        <Image className="shadow-lg shadow-red-500 lg:h-40 lg:w-40  md:h-40  w-20 h-20" src="/Europe.jpg" alt="carte" width={200} height={200} />
        <p className="mt-8">Gratin de pommes de terre à la cancoillote </p>
         <button  className="w-28 mt-5 bg-black text-white rounded-full p-2">Détails</button>
        </div>

        <div  className=" flex flex-col justify-center items-center">
        <div>
          <p className="mb-5">Americain</p>
        </div>
        <Image className="lg:h-40 lg:w-40  md:h-40  w-20 h-20 shadow-lg shadow-red-500" src="/Amerique.jpg" alt="carte" width={200} height={200} />
        <p className="mt-8">Beefaroni maison facile</p>
         <button  className="w-28 mt-8 bg-black text-white rounded-full p-2">Détails</button>
        </div>

        <div  className=" flex flex-col justify-center items-center mt-8">
        <div>
          <p className="mb-5">Australiene</p>
        </div>
        <Image className=" shadow-lg shadow-red-500 lg:h-40 lg:w-40  md:h-40  w-20 h-20" src="/Austra.jpg2.jpg" alt="carte" width={200} height={200} />
        <p className="mt-8">Crevettes grillées au beurre cajun et à l'ail avec sauce à l'avocat, à la coriandre et au citron vert</p>
         <button  className="w-28 mt-8 bg-black text-white rounded-full p-2">Détails</button>
        </div>
        
      </div>

    </>
  )
}



