import React from 'react'
import copy from '../public/assets/images/icon-copy.svg'

type Props = {}

const GeneratedPassword = (props: Props) => {
  return (
    <div className="w-full h-16 md:h-20 max-w-[540px] bg-darkGrey md:p-8 px-4 flex items-center justify-between">
        <h1 className='text-lightGrey'>Pxty4FaD789</h1>
        <img src={copy.src} alt="copy-icon" />
    </div>
  )
}

export default GeneratedPassword