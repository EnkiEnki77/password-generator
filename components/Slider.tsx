import React, { useState } from 'react'

type Props = {}

const Slider = (props: Props) => {
  const [value, setValue] = useState(4)

  const handleSliderChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(parseInt(event.target.value))
  }
  return (
    <div className='flex flex-wrap justify-between gap-4 md:gap-6 mb-10'>
        <p className="capitalize text-lightGrey h-min self-center">character length</p>
        <h1 className="text-green h-min">{value}</h1>
        <input type='range' min='4' max='15' value={value} onChange={handleSliderChange} className="w-full h-2 bg-black rounded-lg appearance-none cursor-pointer dark:bg-gray-700w"/>
    </div>
  )
}

export default Slider