import React from 'react'

const DetailsForecastTIme = ({time}) => {

    const newDate  = new Date(time)
    const timeInLocale  = newDate.toLocaleTimeString('en-US' , {hour12:true , minute:"2-digit" , hour:'2-digit'})

  return (
    <div>{timeInLocale}</div>
  )
}

export default DetailsForecastTIme