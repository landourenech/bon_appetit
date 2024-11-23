"use client"

import Link from 'next/link';
import { UserPlusIcon, Bars3Icon, XMarkIcon, UserIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';
import { useState } from 'react';

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <header className="flex items-center justify-between p-4 lg:bg-transparent/55 shadow-md lg:sticky text-white lg:top-0">
        {/* Logo */}
        <div className="flex items-center bg-white ">
          <Image
            src="/4629a06112bb6ed5d47e800331367fa0.jpg" // Remplacez par le chemin de votre logo
            alt="logo image"
            width={50}
            height={50}
            className="max-md:block md:hidden rounded-full block"
          />
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center space-x-6">
          <ul className="flex gap-20">
            <li className="hover:text-red-200 cursor-pointer">Accueil</li>
            <li className="hover:text-red-200 cursor-pointer">À propos</li>
            <li className="hover:text-red-200 cursor-pointer">Contact</li>
          </ul>
        
          <Link
            href="/login"
            className="flex items-center gap-5 self-start rounded-lg bg-blue-500 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-blue-400 md:text-base"
          >
            <UserIcon className="w-5 md:w-6" />
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden block p-2 text-gray-600 hover:text-gray-800"
        >
          {menuOpen ? (
            <XMarkIcon className="w-6 h-6" />
          ) : (
            <Bars3Icon className="w-6 h-6" />
          )}
        </button>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="absolute top-[100px] left-0 w-full bg-red-500 shadow-md p-4 flex flex-col space-y-4 md:hidden">
            <ul className="flex flex-col items-center gap-4">
              <li className="hover:text-red-200 cursor-pointer">Accueil</li>
              <li className="hover:text-red-200 cursor-pointer">À propos</li>
              <li className="hover:text-red-200 cursor-pointer">Contact</li>
            </ul>

            <Link
              href="/singin"
              className="flex justify-center items-center gap-3 rounded-lg bg-blue-500 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-blue-400"
            >
              <span>Inscription</span> <UserPlusIcon className="w-5" />
            </Link>
            <Link
              href="/login"
              className="flex justify-center items-center gap-3 rounded-lg bg-blue-500 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-blue-400"
            >
              <span>Connexion</span> <UserIcon className="w-5" />
            </Link>
          </div>
        )}
      </header>
    </>
  );
}
