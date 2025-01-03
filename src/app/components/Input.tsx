import React from 'react'

const Input = ({name,placeholder}:{name:string, placeholder:string}) => {
  return (
    <div className='block'>
      <label htmlFor="" className='text-gray-300'>{name}</label>
      <br />
      <input type="text" placeholder={`${placeholder}`} className='borderLine outline-none mt-2'/>
    </div>
  )
}

export default Input


export function Gender(){
    return(
      <div className='flex gap-6'>
          <br/>
          <label htmlFor="gender">Male</label><input type="radio" name='gender' id='gender'/>
          <label htmlFor="gender">Female</label><input type="radio" name='gender' id='gender'/>
      </div>
    )
}   

