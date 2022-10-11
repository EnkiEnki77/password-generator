import React, { useEffect, useState } from 'react'

type Props = {
    value: number
    isChecked: boolean[]
}



const PasswordStrength = (props: Props) => {
    const [strength, setStrength] = useState('too weak')

    const checkedArray:boolean[] = props.isChecked.filter(item => item === true)

    useEffect(() => {
        if(checkedArray.length === 4 && props.value >= 8){
            setStrength('strong')
        }else if(checkedArray.length >= 2 && props.value >= 8){
            setStrength('medium')
        }else if(checkedArray.length >= 1 && props.value >= 8){
            setStrength('weak')
        }else{
            setStrength('too weak')
        }
    }, [props.isChecked, props.value])

  return (
    <div className="mt-4  md:mb-8 h-14 md:h-[72px] bg-black w-full flex justify-between px-4 md:px-8 items-center mb-4">
        <p className="uppercase text-grey">strength</p>
        <div className="flex gap-4">
            <h2 className="text-lightGrey uppercase">{strength}</h2>
            <div className="flex gap-2">
                <div className={`w-[10px] h-7 border-2 ${checkedArray.length === 4 && props.value >= 8 ? 'bg-green border-green' : checkedArray.length >= 2 && props.value >= 8 ? 'bg-yellow border-yellow': checkedArray.length >= 1 && props.value >= 8 ? 'bg-orange border-orange' : 'bg-red border-red'}`}></div>
                <div className={`w-[10px] h-7 border-2 ${checkedArray.length === 4 && props.value >= 8 ? 'bg-green border-green' : checkedArray.length >= 2 && props.value >= 8 ? 'bg-yellow border-yellow': checkedArray.length >= 1 && props.value >= 8 ? 'bg-orange border-orange' : ' border-lightGrey'}`}></div>
                <div className={`w-[10px] h-7 border-2 ${checkedArray.length === 4 && props.value >= 8 ? 'bg-green border-green' : checkedArray.length >= 2 && props.value >= 8 ? 'bg-yellow border-yellow' : ' border-lightGrey'}`}></div>
                <div className={`w-[10px] h-7 border-2 ${checkedArray.length === 4 && props.value >= 8 ? 'bg-green border-green' : ' border-lightGrey'}`}></div>
            </div>
        </div>
    </div>
  )
}

export default PasswordStrength