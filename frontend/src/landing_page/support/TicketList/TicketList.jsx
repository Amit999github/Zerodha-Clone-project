import React from 'react'

function TicketList({ticket}) {
    return (
        <>
            <a className='text-decoration-none' style={{ fontSize:"14px",lineHeight:"2"}} href="">{ticket}</a>
        </>
    );
}

export default TicketList;