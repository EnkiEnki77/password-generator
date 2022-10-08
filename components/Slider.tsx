import React from 'react'

type Props = {}

const Slider = (props: Props) => {
  return (
    <div className='flex flex-wrap justify-between gap-4 md:gap-6 mb-10'>
        <p className="capitalize text-lightGrey h-min self-center">character length</p>
        <h1 className="text-green h-min">10</h1>
        <input type='range' className="w-full h-2 bg-black rounded-lg appearance-none cursor-pointer dark:bg-gray-700w"/>
    </div>
  )
}

export default Slider