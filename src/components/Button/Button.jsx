import React, { useContext } from "react"
import './Button.scss'
import refresh from '../../assets/images/Refresh.svg'
import { AppContext } from '../../context/AppContext'
import cn from 'classnames'

const Button = () => {
    
    const {loading, getMatches} = useContext(AppContext)

    return (
        <div className="button">
            <button 
                className={cn("btn-update", {"btn-update--loading": loading})}
                onClick={getMatches}
                disabled={loading}
            >
                    Обновить 
                    <img src={refresh} alt="Refresh"/>
            </button>
        </div>
    )
}

export default Button