import React, { useContext } from "react"
import './Header.scss'
import Button from "../Button/Button"
import alert from '../../assets/images/alert-triangle.svg'
import { AppContext } from "../../context/AppContext"


const Error = () => (
  <div className="text-update">
    <img src={alert} alt="alert-triangle"/>
    <div>Ошибка: не удалось загрузить информацию</div> 
  </div>
)

const Header = () => {

  const {error} = useContext(AppContext)

    return (
      <div className="header">
        <h1>Match Tracker</h1>
        <div className="update">
          {error && <Error/>}
          <Button/>
        </div>
      </div>
    )
}

export default Header