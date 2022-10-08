import React from 'react'
import arrow from '../public/assets/images/icon-arrow-right.svg'

type Props = {}

const Button = (props: Props) => {
  return (
    <button className="w-full bg-green h-14 md:h-16 justify-center items-center gap-4 flex ">
        <p className="uppercase">generate</p>
        <img src={arrow.src} alt="arrow" />
    </button>
  )
}

export default Button