import { FaFacebook, FaHamburger } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa6";
import { FaPinterest } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import Link from "next/link";
import { Popover, PopoverContent, PopoverTrigger } from "../../components/ui/popover";
import {Sheet, SheetContent, SheetTrigger } from "../../components/ui/sheet";

  

const Nav = () => {
  return (
    <div className="blNav">
      <nav className="text-white flex justify-between items-center w-[100%]">
        <h1 className="text-[30px] font-bold logo">RUNO</h1>
        <div className="hidden md:flex gap-[5vw]">
          <ul className="flex gap-[2vw] navB">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
                
                <Popover>
                    <PopoverTrigger>Sports</PopoverTrigger>
                    <PopoverContent className="bg-white">
                        <ul className="flex w-[100%] flex-col gap-4 navui">
                            <li className=""><Link href={"/cricket"}>Cricket</Link></li>
                            <li className=""><Link href={"/football"}>Football</Link></li>
                            <li className=""><Link href={"/tennis"}>Tennis</Link></li>
                            <li className=""><Link href={"/soccer"}>Soccer</Link></li>
                        </ul>
                    </PopoverContent>
                </Popover>

                
            </li>
          </ul>
          <ul className="flex gap-[1.5vw] items-center navB">
            <li>
              <FaFacebook />
            </li>
            <li>
              <FaSquareXTwitter />
            </li>
            <li>
              <FaYoutube />
            </li>
            <li>
              <FaPinterest />
            </li>
          </ul>
          <ul className="flex gap-[1vw] items-center">
            <li>
              <CiSearch />
            </li>
          </ul>
        </div>

        <Sheet>
          <SheetTrigger className="flex md:hidden">
            <FaHamburger />
          </SheetTrigger>
          <SheetContent className="text-white bg-black flex flex-col gap-[3vw] md:hidden">
            <ul className="flex w-[100%] pb-5 mScreenB flex-col gap-[2vw]">
              <li className="">
                <Link href="/">Home</Link>
              </li>
    
              <li className="">
              <Popover>
                    <PopoverTrigger>Sports</PopoverTrigger>
                    <PopoverContent className="bg-white">
                        <ul className="flex w-[100%] flex-col gap-4 navui">
                            <li className=""><Link href={"/cricket"}>Cricket</Link></li>
                            <li className=""><Link href={"/football"}>Football</Link></li>
                            <li className=""><Link href={"/tennis"}>Tennis</Link></li>
                            <li className=""><Link href={"/soccer"}>Soccer</Link></li>
                        </ul>
                    </PopoverContent>
                </Popover>
              </li>
      
            </ul>
            <ul className="flex mScreenB text-[3vw] w-[100%] flex-col gap-[2vw] pb-5">
              <li className="">
                <FaFacebook />
              </li>
              <li className="">
                <FaSquareXTwitter />
              </li>
              <li className="">
                <FaYoutube />
              </li>
              <li className="">
                <FaPinterest />
              </li>
            </ul>

            <ul className="flex pb-5 mScreenB w-[100%] flex-col gap-[2vw]">
              <li className="">
                <CiSearch />
              </li>
            </ul>
          </SheetContent>
        </Sheet>
      </nav>
    </div>
  );
};

export default Nav;
