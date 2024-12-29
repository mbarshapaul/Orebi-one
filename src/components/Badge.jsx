import React from 'react'

const Badge = ({className,badgeName}) => {
  return (
   <div className={`text-sm font-sans font-bold text-white py-3 px-5 bg-black w-[90px] text-center ${className}`}>{badgeName}</div>
  )
}

export default Badge
