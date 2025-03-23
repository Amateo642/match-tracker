import React from "react"
import './CardStatus.scss'
import cn from "classnames"

const STATUS_CLASS = {
  Ongoing: 'live',
  Finished: 'finished',
  Scheduled: 'preparing',
};

const STATUS_TEXT = {
  Ongoing: 'Live',
  Scheduled: 'Match preparing',
};

const CardStatus = ({ status }) => {
    const statusClass = STATUS_CLASS[status] || '';
    const statusText = STATUS_TEXT[status] || status;
    return (
        <div className={cn("card-status", `card-status--${statusClass}`)}>
            {statusText}
        </div>
    )
}

export default CardStatus