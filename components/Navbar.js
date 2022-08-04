import useRouter from "next/router";
import { useState } from "react";
import ContactModal from "./ContactModal";

export default function Navbar() {
  const [showContactModal, setShowContactModal] = useState(false);
  const router = useRouter;

  return (
    <>
      <nav className="max-w-xl m-auto mt-3 flex justify-around text-2xl border-b-2 border-black">
        <h1 className="cursor-pointer" onClick={() => router.push("/")}>
          Muhammad
        </h1>
        <ul className="flex">
          <li
            className="cursor-pointer mr-4 hover:animate-pulse"
            onClick={() => router.push("/projects")}
          >
            Projects
          </li>
          <li
            className="cursor-pointer hover:animate-pulse"
            onClick={() => {
              setShowContactModal(true);
            }}
          >
            Contact
          </li>
        </ul>
      </nav>
      <ContactModal
        showContactModal={showContactModal}
        setShowContactModal={setShowContactModal}
      />
    </>
  );
}
