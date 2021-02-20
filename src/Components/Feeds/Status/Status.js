import React from 'react'
import CreateStatus from './CreateStatus/CreateStatus'
import Statuses from './Statuses/Statuses'
import './Status.css'

function Status() {
    return (
        <div className="Status">
            <CreateStatus />
            <Statuses />
            <Statuses />
            <Statuses />
            <Statuses />

        </div>
    )
}

export default Status
