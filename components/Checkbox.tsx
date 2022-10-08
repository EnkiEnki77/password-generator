import React from 'react'

type Props = {
    label: string
}

const Checkbox = (props: Props) => {
  return (
    <div className='flex gap-5 mb-4'>
        <input type="checkbox" id={props.label} className='h-5 w-5 '/>
        <label htmlFor={props.label} className='capitalize text-lightGrey'>{props.label}</label>
    </div>
  )
}

export default Checkbox