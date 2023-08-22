import {Paper, Card, CardActions, CardContent, CardMedia, Typography, Button} from '@mui/material';
import React from 'react';
import useFetch from 'react-fetch-hook';

export default function Events() {
    const styles={
        paperStyle:{
            width:'45rem',
            padding:'0.3rem 0.08rem',
            margin:'2rem auto',
            background: '#161616',
            color: 'var(--bodytext-color)'
        },
        cardStyle:{
            backgroundColor: '#0f0f0f',
            color: 'var(--bodytext-color)',
            margin: '2rem auto',
            maxWidth: '30rem',
            textAlign: 'left'
        },
        positioningStyle:{
            display: 'grid',
            gridTemplateColumns: 'auto auto',
            columnGap: '1rem'
        }
    }

    const { isLoading, error, data} = useFetch("http://localhost:8080/event/getAll");

    const dateOptions = {
        month: "long",
        day: "numeric",
        hour: "numeric",
        minute: "numeric",
        weekday: "long"
    }

    const listItems = data?.map((d, index) => ( index < 3 && (
            <Card style={styles.cardStyle} key={d.id}>
                <CardMedia
                    sx={{height: '15rem'}}
                    image={'../../img/omg-logo-black-bg-rounded.png'}
                    title={'omg logo'}
                />
                <div style={styles.positioningStyle}>
                    <CardContent>
                        <Typography gutterBottom variant={'h5'} component={'div'}>
                            {d.header}
                        </Typography>

                        <Typography variant={'body2'}>
                            {d.description}
                        </Typography>
                    </CardContent>
                    <CardContent style={{textAlign: "right"}}>
                        <Typography variant={'body2'} className={'en'}>
                            {new Date(d.startTime).toLocaleString('en-gb', dateOptions)}
                        </Typography>
                        <Typography variant={'body2'} className={'nb'}>
                            {new Date(d.startTime).toLocaleString('no-nb', dateOptions)}
                        </Typography>
                    </CardContent>
                </div>

                <CardActions>
                    <Button size={'small'}>
                        <a href={"https://www.google.com"} target={'_blank'} rel="noopener noreferrer" className={'en'}>Save to calendar</a>
                        <a href={"https://www.google.com"} target={'_blank'} rel="noopener noreferrer" className={'nb'}>Legg til i kalender</a>
                    </Button>
                </CardActions>
            </Card>
        )
    ));

    if (isLoading) return "Loading...";
    if (error) return "Error!";
    
    return( // TODO: This should be generated from the database
        <Paper elevation={0} style={styles.paperStyle}>
            <h2>Events</h2>
            <div id={'eventList'}>
                {listItems}
            </div>
        </Paper>
    );
}