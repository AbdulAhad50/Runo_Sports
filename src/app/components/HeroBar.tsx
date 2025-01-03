import Image from "next/image"
const HeroBar = () => {
  return (

  <div className="w-[100%] bg-black p-[3vw] flex justify-center">

 
    <div className="relative flex gap-[2vw] w-[80%] h-[400px] bg-black px-[20px]">
        <Image src={"/carImage.png"} alt="hero" width={200} height={0} className="ml-5 w-[50%] h-[600px] top-0 left-0 float-left" style={{width:"50%", height:"400px"}}/>

        <div className="text-[#ffffff] pt-[10%] flex flex-col gap-[2vw] text-left z-10">
          <h1 className="text-[2.2vw] font-bold">This is First Car?</h1>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis quibusdam, deserunt enim, eligendi minus magnam, adipisci illo a libero explicabo earum tempore harum non iusto laboriosam quaerat consequuntur quidem! Quidem.</p>
          <button className="w-[10vw] bg-slate-700 h-[3vw] rounded-[10px]">Read...</button>
        </div>

        <div className="fullScreen absolute">

        </div>
    </div>
  </div>
  )
}

export default HeroBar