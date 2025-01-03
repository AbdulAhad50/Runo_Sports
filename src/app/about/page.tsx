
import style from './about.module.css'
import Image from "next/image"
const About = () => {
  return (
    <div className='relative flex flex-wrap justify-between bg-black h-[100vh]'>


        <div className="w-[50%] z-10">
            <Image src="/aboutus.png" alt="about" width={500} height={200}/>
        </div>

        <div>
            <Image src="/aboutImage.gif" alt='' width={400} height={200} className='absolute top-5 z-0 left-[350px]'/>
        </div>

        <div className="w-[50%] z-10 mt-[80px]">
            <h1 className={`${style.textH1} text-[8vw] `}>About Us</h1>

            <p className={`text-white ${style.abtC}`}>Welcome to Runo, your go-to source for everything sports! We are a team of passionate sports lovers dedicated to bringing you the latest news, expert analysis, and practical tips across a variety of sports. Whether you’re an athlete, a fan, or just staying active, we provide content that informs, inspires, and motivates. From training advice and gear reviews to breaking news and inspiring stories, we’ve got you covered. Join our community of sports enthusiasts and stay connected with the world of sports, right here at Runo.

</p>
        </div>
    </div>
  )
}

export default About