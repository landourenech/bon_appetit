"use client"

import Link from 'next/link';
import { ArrowRightIcon, Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';
import { useState } from 'react';

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <header className="flex items-center justify-between p-4 bg-white shadow-md">
        {/* Logo */}
        <div className="flex items-center">
          <Image
            src="/path-to-logo.png" // Remplacez par le chemin de votre logo
            alt="logo image"
            width={50}
            height={50}
            className="max-md:block md:hidden"
          />
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center space-x-6">
          <ul className="flex gap-4">
            <li className="hover:text-red-200 cursor-pointer">Accueil</li>
            <li className="hover:text-red-200 cursor-pointer">À propos</li>
            <li className="hover:text-red-200 cursor-pointer">Contact</li>
          </ul>
          <Link
            href="/login"
            className="flex items-center gap-5 self-start rounded-lg bg-blue-500 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-blue-400 md:text-base"
          >
            <span>Connexion</span> <ArrowRightIcon className="w-5 md:w-6" />
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
          <div className="absolute top-16 left-0 w-full bg-white shadow-md p-4 flex flex-col space-y-4 md:hidden">
            <ul className="flex flex-col items-center gap-4">
              <li className="hover:text-red-200 cursor-pointer">Accueil</li>
              <li className="hover:text-red-200 cursor-pointer">À propos</li>
              <li className="hover:text-red-200 cursor-pointer">Contact</li>
            </ul>
            <Link
              href="/login"
              className="flex justify-center items-center gap-3 rounded-lg bg-blue-500 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-blue-400"
            >
              <span>Connexion</span> <ArrowRightIcon className="w-5" />
            </Link>
          </div>
        )}
      </header>
    </>
  );
}
