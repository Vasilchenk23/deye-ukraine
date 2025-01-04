"use client";
import React, { useState } from "react";
import { IoClose } from "react-icons/io5";
import { IoMdMenu } from "react-icons/io";
import Image from "next/image";
import { useRouter } from "next/navigation";

export const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [submenuOpen, setSubmenuOpen] = useState(false);
  const router = useRouter(); 

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const toggleSubmenu = () => {
    setSubmenuOpen(!submenuOpen); 
  };

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    section.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false); 
  };

  const navigateToPage = (page) => {
    router.push(page); 
    setMenuOpen(false);
  };

  return (
    <>
      <header className="header">
        <div className="logo-item" id="mai">
          <Image src="/images/logo.png" alt="Logo" width={140} height={54} />
        </div>
        <div className={`item-menu ${menuOpen ? "menu-open" : ""}`}>
          <h1 onClick={toggleSubmenu}>Головна</h1>
          {submenuOpen && (
            <div className="submenu">
              <h1 onClick={() => navigateToPage('/solar-panels')}>Солнечные панели</h1>
              <h1 onClick={() => navigateToPage('/inverters')}>Инверторы</h1>
              <h1 onClick={() => navigateToPage('/ups')}>Бесперебойники</h1>
              <h1 onClick={() => navigateToPage('/mountings')}>Крепления</h1>
            </div>
          )}
          <h1 onClick={() => scrollToSection('solution')}>Рiшення</h1>
          <h1 onClick={() => scrollToSection('goods')}>Продукцiя</h1>
          <h1 onClick={() => scrollToSection('contact')}>Контакти</h1>
        </div>
        <button className="burger-menu" onClick={toggleMenu}>
          {menuOpen ? <IoClose size={40} /> : <IoMdMenu size={40} />}
        </button>
      </header>
    </>
  );
};
