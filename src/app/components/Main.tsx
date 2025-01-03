import React from 'react'
import Card from './Card'

const Main = () => {
  return (
    <div className='min-h-screen flex justify-center items-center'>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  )
}

export default Main
