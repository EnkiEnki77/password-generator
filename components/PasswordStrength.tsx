import React from 'react'

type Props = {}

const PasswordStrength = (props: Props) => {
  return (
    <div className="mt-4 h-14 bg-black w-full flex justify-between px-4 items-center mb-4">
        <p className="uppercase text-grey">strength</p>
        <div className="flex gap-4">
            <h2 className="text-lightGrey uppercase">medium</h2>
            <div className="flex gap-2">
                <div className="w-[10px] h-7 border-2 border-lightGrey"></div>
                <div className="w-[10px] h-7 border-2 border-lightGrey"></div>
                <div className="w-[10px] h-7 border-2 border-lightGrey"></div>
                <div className="w-[10px] h-7 border-2 border-lightGrey"></div>
            </div>
        </div>
    </div>
  )
}

export default PasswordStrength