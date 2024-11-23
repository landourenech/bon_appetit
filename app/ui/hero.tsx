import { Header } from "@/app/ui/header";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import React from 'react';
import Image from "next/image"
import {Carte}  from "./carte";
import Carte2 from "./carte2";
import Cartemenu from "./cartemenu";
import Footer from "./footer";

export function Hero() {
  return (
    <>
      <main className="bg-cover bg-center w-full" style={{backgroundImage: `url(/2606601f10a527409bcef31091f77ac9.jpg)`}}>
        <Header />
    
        <div className="flex  max-md:grid-cols-1 gap-80 justify-center h-[100vh] items-center">
          <div className="flex flex-col -20 gap-14">
            <h1 className="text-red-600 flex justify-center text-xl">Bon appétit</h1>
            <p className="lg:text-3xl md:text-3xl text-xl  text-white text-center font-extrabold lg:w-[640px] md:w-[540px] w-[340px]">
              Les meilleures recettes faciles à faire avec notre
              communauté
            </p>
            <div className="flex justify-center">
            <Link
              href="/singin"
              className="flex justify-center w-[200px] gap-5 self-start rounded-lg bg-blue-500 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-blue-400 md:text-base"
            >
              <span>Inscription</span> <ArrowRightIcon className="w-5 md:w-6" />
            </Link>
            </div>
          </div>
        </div>
      </main>
      <Carte2/>
      <Carte/>
      <div className="flex justify-center items-center gap-3 mb-4 ">
      <hr className=" h-1 lg:w-[500px] w-14 bg-red-700" /> <h4 className="flex justify-center text-xs text-black font-extrabold">PLUS D'ARTICLES</h4> <hr className="h-1 w-14 lg:w-[500px] bg-red-700" /> 
      </div>
      <Cartemenu/>
      <Footer/>
    </>
  );
}
