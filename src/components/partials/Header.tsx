import React from 'react'

type HeaderProps = {
    data: number,
    eventHandler: (e: React.MouseEvent<HTMLDivElement>) => void 
}
const Header:React.FC<HeaderProps> = (props) => {
  return (
    <div onClick={props.eventHandler}>{props.data}</div>
  )
}

export default Header