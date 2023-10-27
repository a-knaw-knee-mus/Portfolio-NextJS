"use client"; 

import { useState, forwardRef, useImperativeHandle, useRef } from "react";
import { DarkModeSwitch } from "react-toggle-dark-mode";
import ContactModal from "./ContactModal";
import { useRouter } from 'next/navigation';
import Magnetic from "./Magnetic";

const Navbar = forwardRef(function Index({ isDarkMode, setIsDarkMode }, ref) {
  const [showContactModal, setShowContactModal] = useState(false);
  const router = useRouter();
  const projectsRef = useRef(null);
  const projectsTitleRef = useRef(null);
  const homeRef = useRef(null);
  const contactRef = useRef(null);
  const contactTitleRef = useRef(null);

  useImperativeHandle(ref, () => ({

    get projects() {
        return projectsRef.current;
    },
    get projectsTitle() {
      return projectsTitleRef.current;
    },

    get home() {
      return homeRef.current;
    },

    get contact() {
      return contactRef.current;
    },
    get contactTitle() {
      return contactTitleRef.current;
    }
  }));

  return (
    <>
      <nav className="max-w-2xl m-auto pt-3 text-xl sm:text-2xl font-overpass">
        <div className="mx-4 flex justify-between border-b">
          <h1
            className="cursor-pointer font-extrabold sm:hover:scale-[1.15] transition-all"
            onClick={() => router.push("/")}
            ref={homeRef}
          >
            Muhammad
          </h1>
          <ul className="flex font-semibold">
            <Magnetic>
              <li
                className="cursor-pointer mr-4 sm:mr-20 transition-all hover:mix-blend-difference relative left-0 top-0"
                onClick={() => router.push("/projects")}
                ref={projectsTitleRef}
              >
                <div className="w-full h-full hover:scale-x-[1.75] hover:scale-y-[3] absolute" ref={projectsRef}></div>
                Projects
              </li>
            </Magnetic>
            <Magnetic>
            <li
              className="cursor-pointer transition-all hover:mix-blend-difference relative left-0 top-0"
              onClick={() => {
                setShowContactModal(true);
              }}
              ref={contactTitleRef}
            >
              <div className="w-full h-full hover:scale-x-[1.75] hover:scale-y-[3] absolute" ref={contactRef}></div>
              Contact
            </li>
            </Magnetic>
            <DarkModeSwitch
              className="ml-4 sm:mt-[2px]"
              checked={isDarkMode}
              onChange={(checked) => setIsDarkMode(checked)}
              moonColor="silver"
            />
          </ul>
        </div>
      </nav>
      <ContactModal
        showContactModal={showContactModal}
        setShowContactModal={setShowContactModal}
      />
    </>
  );
})

export default Navbar;