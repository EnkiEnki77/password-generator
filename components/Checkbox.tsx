import React from 'react'

type Props = {}

const Checkbox = (props: Props) => {
  return (
    <div className='flex'>
        <input type="checkbox" id='check' />
        <label htmlFor="check" className='capitalize'>include uppercase letters</label>
    </div>
  )
}

export default Checkbox