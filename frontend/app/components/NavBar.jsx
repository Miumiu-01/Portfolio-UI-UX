"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function NavBar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-sm z-50">
      <div className="max-w-6xl mx-auto px-4 py-4">
        {/* --- Ligne principale : logo + burger --- */}
        <div className="flex justify-between items-center">
          <Image
            src="/images/Logo.svg"
            alt="Logo du site"
            width={120}
            height={60}
            priority
          />

          {/* Bouton Burger Mobile */}
          <button
            className="md:hidden text-3xl focus:outline-none z-[60]"
            onClick={() => setOpen(!open)}
            aria-label="Ouvrir le menu"
          >
            {open ? "✕" : "☰"}
          </button>

          {/* Menu Desktop */}
          <ul className="hidden md:flex items-center space-x-6">
            <li>
              <Link href="/" className="font-rubik text-black no-underline">
                Projets
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className="font-rubik text-black no-underline"
              >
                À propos
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="font-rubik text-black no-underline"
              >
                Contact
              </Link>
            </li>
            <li>
              <a
                href="/CV_Selva_Samantha_Product_UI_UX_Designer.pdf"
                download
                className="font-rubik text-[#000000] no-underline border-2 border-black bg-white py-2 px-4 rounded-lg"
              >
                Mon CV
              </a>
            </li>
          </ul>
        </div>

        {/* --- Menu Mobile (en dessous du logo) --- */}
        <div
          className={`md:hidden bg-white shadow-inner flex flex-col items-center space-y-4 transition-all duration-300 ease-in-out overflow-hidden ${
            open ? "max-h-96 opacity-100 mt-4 py-4" : "max-h-0 opacity-0"
          }`}
        >
          <Link
            href="/"
            onClick={() => setOpen(false)}
            className="font-rubik text-black no-underline"
          >
            Accueil
          </Link>
          <Link
            href="/about"
            onClick={() => setOpen(false)}
            className="font-rubik text-black no-underline"
          >
            À propos
          </Link>
          <Link
            href="/contact"
            onClick={() => setOpen(false)}
            className="font-rubik text-black no-underline"
          >
            Contact
          </Link>
          <a
            href="/CV_Selva_Samantha_Product_UI_UX_Designer.pdf"
            download
            onClick={() => setOpen(false)}
            className="font-rubik text-[#000000] no-underline border-2 border-black py-2 px-4 rounded-lg"
          >
            Mon CV
          </a>
        </div>
      </div>
    </nav>
  );
}
