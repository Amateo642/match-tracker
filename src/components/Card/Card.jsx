import React from "react"
import { useState } from "react"
import './Card.scss'
import CardStatus from "../CardStatus/CardStatus"
import commandLogo from "../../assets/images/command.svg"
import userAvatar from "../../assets/images/avatar_global.svg"
import arrowDowm from "../../assets/images/arrow-down.svg"
import cn from "classnames"

const Squad = ({ team }) => (
    <div className="squad">
        <div className="users">
            {team.players.map((player) => (
                <div className="user" key={player.username}>
                    <div className="userInfo">
                        <div className="user-avatar"> 
                            <img src={userAvatar} alt="userAvatar" />
                        </div>
                        <div className="user-nickname">
                            <p>{player.username}</p>
                        </div>
                    </div>
                    <p>Убийств: {player.kills}</p>
                </div>
            ))}
        </div>
        <div className="teamInfo">
            <p>Points: {team.points}</p>
            <p>Место: {team.place}</p>
            <p>Всего убийств: {team.total_kills}</p>
        </div>
    </div>
);

const Card = ({ match }) => {
    const [open, setOpen] = useState(false)

    return (
        <div className="card" onClick={() => setOpen(!open)}>
            <div className="preview">
                <div className="content">
                    <div className="homeTeam team">
                        <div className="logo">
                            <img src={commandLogo} alt="commandLogo" />
                        </div>
                        <div className="teamName">
                            <h1>{match.homeTeam.name}</h1>
                        </div>
                    </div>

                    <div className="matchInfo">
                        <div className="score">
                            <h2>{match.homeScore} : {match.awayScore}</h2>
                        </div>
                        <div className="status">
                            <CardStatus
                                status = {match.status}
                            />
                        </div>
                    </div>

                    <div className="awayTeam team">
                        <div className="teamName">
                            <h1>{match.awayTeam.name}</h1>
                        </div>
                        <div className="logo">
                            <img src={commandLogo} alt="commandLogo" />
                        </div>
                    </div>
                </div> 

                <div className={cn("arrow", { "arrow--open": open })}>
                    <img src={arrowDowm} alt="arrowDown" />
                </div>
            </div>  

        {open && (
            <div className="details">
                <Squad team={match.homeTeam}/>    
                <Squad team={match.awayTeam}/>      
            </div>
        )}                                                         
        </div>
    )
}

export default Card