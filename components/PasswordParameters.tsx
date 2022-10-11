import React, { ChangeEvent, useState, useEffect } from 'react'
import Button from './Button'
import Checkbox from './Checkbox'
import PasswordStrength from './PasswordStrength'
import Slider from './Slider'

type Props = {}

const PasswordParameters = (props: Props) => {
    const checkArray: [{text: string, key: string}, {text: string, key: string}, {text: string, key: string}, {text: string, key: string},] = 
    [{text:'Include Uppercase Letters', key:'1'}, {text:'Include Lowercase Letters', key:'2'}, {text:'Include Numbers', key:'3'}, {text:'Include Symbols', key:'4'}]

    const [inputValue, setInputValue] = useState(4)

    const handleSliderChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(parseInt(event.target.value))
    }

    const [isChecked, setIsChecked] = useState([false, false, false, false])

    const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>, index: string) => {
        setIsChecked(prev => prev.map((bool, i) => {
            if(i === parseInt(index) - 1){
                return event.target.checked
            }else{
                return bool
            }
        }) )
    }

    useEffect(() => {
        console.log(isChecked)
    }, [isChecked])



  return (
    <form className="w-full h-[423px] md:h-[528px] max-w-[540px] bg-darkGrey md:p-8 px-4 pb-4 pt-5 flex flex-col">
        <Slider value={inputValue} eventHandler={handleSliderChange}/>
        {checkArray.map(item => <Checkbox  key={item.key} index={item.key} label={item.text} eventHandler={handleCheckboxChange}/>)}
        <PasswordStrength value={inputValue} isChecked={isChecked}/>
        <Button/>
    </form>
    
  )
}

export default PasswordParameters