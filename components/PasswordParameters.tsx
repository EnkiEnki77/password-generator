import React from 'react'
import Button from './Button'
import Checkbox from './Checkbox'
import PasswordStrength from './PasswordStrength'
import Slider from './Slider'

type Props = {}

const PasswordParameters = (props: Props) => {
    const checkArray: [string, string, string, string] = 
    ['Include Uppercase Letters', 'Include Lowercase Letters', 'Include Numbers', 'Include Numbers']
  return (
    <div className="w-full h-[423px] bg-darkGrey px-4 pb-4 pt-5 flex flex-col">
        <Slider/>
        {checkArray.map(item => <Checkbox label={item}/>)}
        <PasswordStrength/>
        <Button/>
    </div>
    
  )
}

export default PasswordParameters