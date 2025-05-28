import { Button } from "@/components/ui/button";
import Search from "../Search";
import Link from "next/link";

const Navbar = () => {
  return (
    <header>
      <nav className="flex justify-between items-center gap-20">
        <Search />
        <div className="flex gap-3 "> 
          <Button className="hover:cursor-pointer" size={"lg"} variant="ghost">
           <Link href="/#">Login</Link>
          </Button>
          <Button className="hover:cursor-pointer" size={"lg"}><Link href="/#">Sign Up</Link></Button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
