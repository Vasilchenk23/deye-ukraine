"use client";
import React, { useState } from "react";
import { IoClose } from "react-icons/io5";
import { IoMdMenu } from "react-icons/io";
import Image from "next/image";
import { useRouter, usePathname } from "next/navigation";

export const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [productsMenuOpen, setProductsMenuOpen] = useState(false);
  const router = useRouter();
  const currentPath = usePathname();

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const toggleProductsMenu = () => {
    setProductsMenuOpen(!productsMenuOpen);
  };

  const navigateAndScroll = (sectionId) => {
    if (currentPath === "/") {
      scrollToSection(sectionId);
    } else {
      router.push(`/#${sectionId}`);
      setMenuOpen(false);
      setProductsMenuOpen(false);
    }
  };

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setMenuOpen(false);
      setProductsMenuOpen(false);
    }
  };

  const navigateToPage = (page) => {
    router.push(page);
    setMenuOpen(false);
    setProductsMenuOpen(false);
  };

  return (
    <>
      <header className="header" id="header">
        <a href="/" aria-label="Головна" id="main">
          <Image src="/images/logo.png" alt="Logo" style={{ height:'auto', width:'auto'}} width={140} height={54} loading="lazy"/>
        </a>
        <nav className={`item-menu ${menuOpen ? "menu-open" : ""}`}>
          <h1 onClick={() => navigateAndScroll("header")}>Головна</h1>
          <h1 onClick={() => navigateAndScroll("advantages")}>Наші переваги</h1>
          <h1 onClick={() => navigateAndScroll("goods")}>Продукцiя</h1>
          <h1 onClick={() => navigateAndScroll("why-us")}>Чому ми?</h1>
          <h1 onClick={() => navigateAndScroll("blog")}>Блог</h1>
          <h1 onClick={() => navigateAndScroll("contact")}>Контакти</h1>
        </nav>
        <button className="burger-menu" onClick={toggleMenu}>
          {menuOpen ? <IoClose size={40} /> : <IoMdMenu size={40} />}
        </button>
      </header>
      <style jsx>{`
        .header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          background-color: #fff;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        }

        .logo-item {
          display: flex;
          align-items: center;
        }

        .item-menu {
          display: flex;
          gap: 2rem;
          align-items: center;
        }

        .submenu {
          position: absolute;
          background-color: #fff;
          top: 100%;
          left: 70%;
          border-radius: 0px 0px 10px 10px;
          z-index: 10;
        }

        .submenu h1 {
          margin: 0;
          cursor: pointer;
          padding: 10px 20px;
        }
        
        .submenu h1:hover {
          margin: 0;
          cursor: pointer;
          padding: 10px 20px;
          color: hsl(205, 70%, 52%);
        }

        .burger-menu {
          display: none;
        }

        @media (max-width: 768px) {
          .item-menu {
            display: ${menuOpen ? "block" : "none"};
            position: absolute;
            top: 100%;
            left: 0;
            right: 0;
            background-color: #fff;
          }

          .burger-menu {
            display: block;
            background: none;
            border: none;
            cursor: pointer;
          }

          .submenu {
            position: static;
            border: none;
          }

          .submenu h1 {
            font-size: 14px;
            color: hsl(205, 70%, 52%);
          }
          

          
        }
      `}</style>
    </>
  );
};
