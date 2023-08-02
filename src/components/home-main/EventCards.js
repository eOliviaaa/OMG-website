import {Card, CardActions, CardContent, CardMedia, Typography, Button} from '@mui/material';
import React from "react";
import useFetch from 'react-fetch-hook';

export default function EventCards(){
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

    const { isLoading, error, data} = useFetch("http://localhost:8080/event/getAllEvents");

    const listItems = data?.map((d, index) => ( index < 3 && (
            <Card style={styles.cardStyle} key={d.id}>
                <CardMedia
                    sx={{height: '15rem'}}
                    image={'../../img/temp.png'}
                    title={'omg logo'}
                />

                <CardContent>
                    <Typography gutterBottom variant={'h5'} component={'div'} className={'en'}>
                        {d.enHeader}
                    </Typography>
                    <Typography gutterBottom variant={'h5'} component={'div'} className={'nb'}>
                        {d.noHeader}
                    </Typography>

                    <Typography variant={'body2'} className={'en'}>
                        {d.enDesc}
                    </Typography>
                    <Typography variant={'body2'} className={'nb'}>
                        {d.noDesc}
                    </Typography>
                </CardContent>

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

    return(
        <div>
            {listItems}
        </div>
    )
}