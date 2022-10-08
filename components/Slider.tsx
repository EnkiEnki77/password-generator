import React from 'react'

type Props = {}

const Slider = (props: Props) => {
  return (
    <div className="flex flex-wrap justify-between  items-center  md:max-w-[540px] md:h-[143px] md:w-full bg-darkGrey px-8 py-8 gap-4">
        <p className="capitalize text-lightGrey h-min">character length</p>
        <h1 className="text-green h-min">10</h1>
        <input type='range' className="w-full h-2 bg-black rounded-lg appearance-none cursor-pointer dark:bg-gray-700w"/>

    </div>
  )
}

export default Slider