import {Paper} from '@mui/material';
import EventCards from './EventCards';
import React from 'react';

export default function Events() {
    const styles={
        paperStyle:{
            width:'100rem',
            padding:'0.3rem 0.08rem',
            margin:'2rem auto',
            background: '#161616',
            color: 'var(--bodytext-color)'
        },
        cardStyle:{
            backgroundColor: '#0f0f0f',
            color: 'var(--bodytext-color)',
            margin: '2rem auto',
            maxWidth: '45rem',
            textAlign: 'left'
        }
    }
    
    return( // TODO: This should be generated from the database
        <Paper elevation={0} style={styles.paperStyle}>
            <h2>Events</h2>
            <div id={'eventList'}>
                <EventCards />
            </div>
        </Paper>
    );
}