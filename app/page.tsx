import Grid from "@/components/Grid";
import Hero from "@/components/Hero";
import { FloatingNav } from "@/components/ui/FloatingNav";
import { FaHome, FaUser } from "react-icons/fa";
import { FaRegMessage } from "react-icons/fa6";

export default function Home() {
  const navItems = [
    {
      name: "Home",
      link: "/",
      icon: <FaHome />,
    },
    {
      name: "About",
      link: "/about",
      icon: <FaUser />,
    },
    {
      name: "Contact",
      link: "/contact",
      icon: <FaRegMessage />,
    },
  ];
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems} />
        <Hero />
        <Grid />
      </div>
    </main>
  );
}
