import Image from "next/image";
import Link from "next/link";
import { CiClock2 } from "react-icons/ci";
const CardSh = () => {
  return (
    <div className="grid  h-[auto]  grid-cols-1 lg:grid-cols-2 cursor-pointer gap-[2vw]  w-[60%] ml-5 px-[4vw] pt-[20px] mb-9">
      <div className="w-[300px]">
        <Image 
          src="/bl.jpg" 
          alt="car" 
          width={250} 
          height={300} 
          className="object-cover h-full" 
        />
      </div>

      <div className="text-black overflow-hidden rounded-r-[10px]  w-[500px] px-[2vw] pt-4 flex flex-col h-[100%] gap-3">
          <h1 className="text-xl  md:text-[1.6vw] font-bold text-white w-[70%]">How To Become a Software Engineer?</h1>
          <p className="text-gray-400 w-[50%]
          ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus commodi a magni eum ratione aut.</p>
          <p className="flex text-gray-400 items-center gap-3"><CiClock2/> 12/22/2024</p>
          
          <Link href={`/${1}`}> <button className="bg-black text-teal-400 w-[200px] h-16 text-[1.2vw] rounded-[5px]">Read More</button></Link>
      </div>
    </div>
  );
};

export default CardSh;
