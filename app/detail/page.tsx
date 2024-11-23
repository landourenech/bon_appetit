import React from 'react'
import Image from 'next/image'
import { ArrowLeftCircleIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'
export default function page ()  {
  return (
    <>
      <div className='flex gap-9 justify-around lg:flex-row md:flex-row  flex-col '>
      <Link href="/"><ArrowLeftCircleIcon className='w-5 h-16 mt-16 lg:block hidden'/></Link>
     <Link href="/"><button className='w-28 bg-sky-800 p-2 border-sky-800 lg:hidden block m-3 rounded-xl text-white '>Retour</button></Link> 
       <Image className='lg:w-[600px] lg:h-[600px] '  src="/xpicture3.jpg.pagespeed.ic_.sOoD_3xCgZ-768x652 1.png" alt="" width={1000} height={1000}/>
       <div className='mt-8 items-center ml-6'>
       <h1 className='text-3xl font-semibold mb-7'>Ingrédients</h1>
        <ul>
            <li>3 tasses de riz (du riz parfume ou cassé)</li>
            <li>4 gros morceaux de poisson (de votre choix ou de la dorade)</li>
            <li>3 tomates fraîches, réduites en purée</li>
            <li>3 cuillères à soupe de concentré de tomate</li>
            <li>1 bouquet de persil, écrasée</li>
            <li>1 grosse carotte, épluchée et coupée en morceaux moyenne</li>
            <li>2 pommes de terre, épluchées et coupées en morceaux</li>
            <li>1 gros oignon, émincé</li>
            <li>4 gousses d’ail, hachées finement</li>
            <li>2 petites aubergines, facultatif</li>
            <li>1 petit chou, coupé en 4 morceaux</li>
            <li>200ml d’huile d’arachide</li>
            <li>2 bouillons cube ou Maggi cube</li>
            <li>4 feuilles de laurier</li>
            <li>4 piments,</li>
            <li>1 cuillère à soupe de poivre noir</li>
            <li>Sel</li>
            <li>6 petits gombos</li>
            <li>1 cuillère à soupe de Yété, Si disponible</li>
            <li>1 cuillère à soupe de Nététou (si disponible)</li>
            <li>5l d’eau chaude</li>
        </ul>
       </div>
      </div>  
      <div className='m-12'>
        <p>Le Thieboudienne Sénégalais est aussi connu sous Riz au gras en Cote d’Ivoire, en Guinée et autre pays d’Afrique de l’ouest mais aussi sous Jollof Rice (Riz de Jollof) au Nigeria et au Ghana.La réalisation de la recette du thieboudienne vous prendra du temps mais ça en vaut la peine puisque le résultat est trop délicieux.Portions: 4Temps de préparations: 30 minTemps de cuisson: 1h </p>
      </div>

      <div className='flex justify-center lg:text-3xl font-bold '><h1>Préparation du Thieboudienne (Riz gras)</h1></div>
      <div className='flex justify-center m-32 gap-10 lg:flex-row md:flex-row flex-col w-48'>
        <p><span className='font-bold'>Étape 1:</span> Préparer la farce pour le poisson:
Mélanger le persil, la moitié de l’ail, un peu de piment, ajouter du sel et 1/2 d’une Maggi. Vous pouvez piller dans un mortier ou utiliser un robot culinaire.
Ensuite, insérez le mélange dans les morceaux de poisson et faites frire.</p> 
<p ><span className='font-bold'>Étape 2:</span> Faire la sauce de tomate.
Faire chauffer l’huile, ajouter les oignons, les tomates, le concentré de tomates, l’ail restant, le poivre noir. Puis les faire frire pendant 15 minutes à feu moyen.
Ensuite, ajoutez le poisson dans la sauce de tomate.
Ajouter les bouillons cube (ou Maggi), avec les feuilles de laurier et 1 tasse d’eau.
Ensuite, laissez mijoter jusqu’à ce que les morceaux de poisson soient bien cuits, 15 minutes environ.</p> 
<p ><span className='font-bold'>Étape 3:</span>
Retirer les morceaux de poisson et ajouter tout les légumes sauf le gombo avec 1 tasse d’eau et faire cuire les légumes jusqu’à ce qu’ils soient cuits (25 à 30 min).
Vous devez veiller à ce que les légumes soient bien prêts avant de les retirer et aussi de ne pas trop les cuire.
Ensuite retirez les légumes, puis ajoutez le gombo avec l’eau.
Après 5 min enlever le gombo et ajouter le riz.
Pour rendre le riz facile à cuisiner, vous pouvez le faire tremper dans de l’eau chaude pendant 20 minutes et lavez plusieurs fois avec de l’eau tiède.
Faites cuire le riz à feu très doux, en retournant le thieboudienne souvent pour que tous les côtés soient bien cuits.
Au moment de servir, placez le riz dans un plat et disposer les légumes et le poisson sur le dessus.
Bon Appétit!!!!</p>
      </div>
    </>
  )
}

