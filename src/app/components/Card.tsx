import Image from "next/image";
import { CiClock2 } from "react-icons/ci";

const CardData = () => {
  return (
    <div className="bShad w-[300px] h-[300px] cursor-pointer overflow-hidden">
      <div className="overflow-hidden">
        <Image 
          src="/bl.jpg" 
          alt="car" 
          width={300} 
          height={300} 
          className="object-cover imageB w-full h-full" 
        />
      </div>

      <div className="text-white bg-slate-900 px-[2vw] pt-4 flex flex-col h-[100%]">
          <h1 className="text-[1.5vw]">Title</h1>
          <p><CiClock2/> : 12/22/2024</p>
      </div>
    </div>
  );
};

export default CardData;
