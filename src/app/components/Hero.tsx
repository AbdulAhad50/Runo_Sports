import Image from "next/image";

const Hero = () => {
  return (
    <div className='relative flex flex-wrap max-w-full justify-between items-center h-[100vh] px-[4vw] bg-black'>
      
      {/* Heading */}
      <div className="w-full sm:w-[500px]">
        <h1 className='gradient-text text-3xl sm:text-5xl md:text-6xl lg:text-7xl'>
          TOP<br/> SCORER TO THE FINAL MATCH 
        </h1>
      </div>

      {/* Hero image */}
      {/* <div className="absolute right-[10vw] sm:right-[20vw] top-[4vw] sm:top-[8vw]">
        <Image src={'/basket.svg'} alt="hero-image" width={650} height={300} layout="intrinsic" />
      </div> */}

      {/* GIF (hidden on mobile screens) */}
      <div className="flex-col gap-[2vw] mt-20 sm:mt-20 hidden sm:flex">
        <Image src="/images2.gif" alt={"rounded"} width={400} height={200} layout="intrinsic" />
      </div>
    </div>
  );
};

export default Hero;
