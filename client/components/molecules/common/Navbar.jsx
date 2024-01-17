import HamBurger from "@/components/atoms/MobileHamburger";
import React, { useEffect, useRef } from "react";
import { MobileNavbar } from "../mobile-navbar/MobileNavbar";
import { useRouter } from "next/navigation";
const Navbar = () => {
  const refNav = useRef(null);
  const router = useRouter();
  useEffect(() => {
    document.body.addEventListener("scroll", () => {
      refNav.current.classList.remove("bg-black");
      if (refNav) {
        if (document.body.scrollTop > 50) {
          refNav.current.classList.add("nav-shadow");
        } else {
          refNav.current.classList.remove("nav-shadow");
        }
      }
    });
  }, []);

  const scrollToSection = () => {
    const section = document.getElementById("about");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    } else {
      router.push("/");
    }
  };
  const scrollToSponsorsSection = () => {
    const section = document.getElementById("sponsors");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    } else {
      router.push("/");
    }
  };
  const scrollToFAQSection = () => {
    const section = document.getElementById("faq");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    } else {
      router.push("/");
    }
  };
  const scrollToContactSection = () => {
    const section = document.getElementById("contact");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    } else {
      router.push("/");
    }
  };
  const scrollToHero = () => {
    const section = document.getElementById("hero");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    } else {
      router.push("/");
    }
  };

  return (
    <div
      ref={refNav}
      className="flex sticky min-h-24 bg-black sm:justify-normal justify-between top-0 backdrop-blur-md z-10"
    >
      <div className="">
        <p className="text-[#122f4c] absolute ml-[36px] md:ml-[38px] text-black font-extrabold text-[8px] md:text-xs z-10">
          AWAITING
        </p>
        <img
          src={"/mlh-trust-badge-2024-white.svg"}
          className="absolute ml-8 w-[56px] md:w-[76px]"
        />
      </div>
      <div className="md:flex hidden gap-20 self-center justify-center text-xl px-10 py-8 word-spacing tracking-tight text-white  w-full top-0 z-10">
        <span
          className="hover-underline-animation cursor-pointer hover:text-primary-blue transition-colors"
          // href="/"
          onClick={scrollToHero}
        >
          Home
        </span>
        <span
          className="hover-underline-animation cursor-pointer hover:text-primary-blue transition-colors"
          // href="/about"
          onClick={scrollToSection}
        >
          About
        </span>
        <span
          className="hover-underline-animation cursor-pointer hover:text-primary-blue transition-colors"
          onClick={scrollToSponsorsSection}
        >
          Sponsors
        </span>
        <span
          className="hover-underline-animation cursor-pointer hover:text-primary-blue transition-colors"
          // href="/faqs"
          onClick={scrollToFAQSection}
        >
          FAQ
        </span>
        <span
          className="hover-underline-animation cursor-pointer hover:text-primary-blue transition-colors"
          // href="/contact"
          onClick={scrollToContactSection}
        >
          Contact Us
        </span>
      </div>
      <HamBurger />
    </div>
  );
};

export default Navbar;
