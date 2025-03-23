import React, { useContext, useEffect } from "react"
import './Cards.scss'
import Card from "../Card/Card"
import { AppContext } from "../../context/AppContext"

const Cards = () => {
    const {matches, loading, error, getMatches} = useContext(AppContext)

    useEffect(() => {
        getMatches()
    }, [])

    if (loading) {
        return <div>Загрузка данных...</div>
    }

    if (error) {
        return null
    }

    return (
        <div className="cards">
            {matches.map((match) => (
                <Card match={match} key={match.title}/>        
            ))}
        </div>
    )
}

export default Cards