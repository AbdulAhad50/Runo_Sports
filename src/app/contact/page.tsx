import Input, { Gender } from '../components/Input'
import style from './contact.module.css'
import { FaPhoneVolume } from "react-icons/fa6";
import { FaEnvelope } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";
import { FaFacebook } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa";



const Contact = () => {
  return (
    <div className={`${style.textF} flex flex-col md:flex-wrap w-[100%] bg-black h-[100vh] p-[20px] `}>



        <div className={`text-white ${style.width} flex flex-col md: justify-around rounded-bl-[10px] rounded-tl-[10px] w-[30vw] h-full bg-gray-900 pl-[20px]`}>
            <div>
                <h1 className='text-[2vw]'>Contact Information</h1>
                <p className='text-[1vw]'>Say something to start a live chat!</p>
            </div>

            <div className='flex flex-wrap:items-center gap-[20px]'>

                <ul className='flex flex-col gap-6 text-[2vw] mt-2'>
                    <li><FaPhoneVolume/></li>
                    <li><FaEnvelope/></li>
                    <li><IoLocationSharp/></li>
                </ul>

                <ul className='flex flex-col gap-5 mt-6 text-[1.2vw]'>
                    <li>+1012 3456 789</li>
                    <li>demo@gmail.com</li>
                    <li>132 Dartmouth Street Boston, Massachusetts 02156 United States</li>
                </ul>        
            </div>

            <div className='flex gap-[2.2vw] text-[2vw]'>
                <FaFacebook/>
                <FaYoutube/>
                <FaDiscord/>
            </div>

        </div>

{ /* User Detail Int */}
        <div className='w-[65vw] rounded-tr-[10px] h-full bg-white rounded-br-[10px]'>

            <div className='grid grid-cols-2 grid-rows-4 gap-5 justify-items-center pt-[3vw]'>
                    <div className='grid grid-cols-1 gap-10'>
                        <Input name="First Name" placeholder='Jhon'/>
                        <Input name="Last Name" placeholder='Doe'/>
                    </div>

                    <div className='grid grid-cols-1 gap-10'>
                        <Input name='Email' placeholder='demo@gmail.com'/>
                        <Input name='Phone Number' placeholder='+9263242788'/>
                    </div>

                    <div className='grid grid-cols-1 gap-10 col-span-2'>
                        <textarea name="" id="" cols={80} rows={5} className='borderLine outline-none' placeholder='message'></textarea>
                    </div>

                    <div className='grid grid-cols-1 gap-10 col-span-2 mt-[0.8vw]'>
                        <button className='bg-black w-[10vw] h-10 rounded-[10px] text-white'>Submit</button>
                    </div>
            </div>

        </div>
    </div>
  )
}

export default Contact