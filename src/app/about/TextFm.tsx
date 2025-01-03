import style from './about.module.css'

export default function TextData({text,heading}:{text:string,heading:string}){
  return (
    <>
        <h1 className='text-white font-bold text-[3vw]'>{heading}</h1>
        <p className={`${style.sectAbt} w-[30%] text-white mt-4`}>{text}</p>
    </>
  )
}