import React from 'react'

interface Button {
  text: string,
  color: string,
  textCol?: string,
}

const Button = ({ text, color, textCol }: Button) => {
  return (
    <div>
      <button className={`py-4 px-12 rounded-[4px] text-white font-[500] text-[16px] leading-[24px] hover:saturate-200 duration-300 ease-in-out`} style={{ backgroundColor: color, color: textCol }}>{text}</button>
    </div>
  )
}

export default Button
