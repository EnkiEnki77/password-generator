import React, { ChangeEvent } from 'react'

type Props = {
    label: string
    index: string
    eventHandler: (event:ChangeEvent<HTMLInputElement>, index: string) => void
    
}

const Checkbox = (props: Props) => {

   
    
  return (
    <div className='flex gap-5 mb-4'>
        <input type="checkbox" id={props.label} onChange={event => props.eventHandler(event, props.index)} className='h-5 w-5 '/>
        <label htmlFor={props.label} className='capitalize text-lightGrey'>{props.label}</label>
        
    </div>
  )
}

export default Checkbox