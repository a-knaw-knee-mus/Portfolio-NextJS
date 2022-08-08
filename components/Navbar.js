import useRouter from "next/router";
import { useState } from "react";
import ContactModal from "./ContactModal";

export default function Navbar() {
  const [showContactModal, setShowContactModal] = useState(false);
  const router = useRouter;

  return (
    <>
      <nav className="max-w-2xl m-auto mt-3 text-xl sm:text-2xl font-overpass">
        <div className="mx-4 flex justify-between border-b">
        <h1 className="cursor-pointer font-extrabold sm:hover:scale-[1.15] transition-all" onClick={() => router.push("/")}>
          Muhammad
        </h1>
        <ul className="flex font-semibold">
          <li
            className="cursor-pointer mr-4 sm:hover:scale-[1.15] transition-all"
            onClick={() => router.push("/projects")}
          >
            Projects
          </li>
          <li
            className="cursor-pointer sm:hover:scale-[1.15] transition-all"
            onClick={() => {
              setShowContactModal(true);
            }}
          >
            Contact
          </li>
        </ul>
        </div>
      </nav>
      <ContactModal
        showContactModal={showContactModal}
        setShowContactModal={setShowContactModal}
      />
    </>
  );
}
