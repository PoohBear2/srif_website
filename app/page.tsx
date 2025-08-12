import AboutUs from "@/components/AboutUs";
import Grid from "@/components/Grid";
import Hero from "@/components/Hero";
import { FloatingNav } from "@/components/ui/FloatingNavbar";
import { CgHome } from "react-icons/cg";

export default function Home() {
  return (
    <main
      className="relative bg-black-100 flex
    justify-center items-center flex-col overflow-hidden
    mx-auto sm:px-10 px-5"
    >
      <div className="max-w-7xl w-full">
        <FloatingNav
          className=""
          navItems={[{ name: "Home", link: "/", icon: <CgHome /> }]}
        />
        <Hero />
        {/*<Grid />*/}
        <AboutUs />
      </div>
    </main>
  );
}
