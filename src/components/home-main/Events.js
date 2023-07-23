import {Paper} from '@mui/material';
import {Card, CardActions, CardContent, CardMedia, Typography, Button} from '@mui/material';

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
            <Card style={styles.cardStyle}>
                <CardMedia
                    sx={{height: '15rem'}}
                    image={'../../img/temp.png'}
                    title={'omg logo'}
                />

                <CardContent>
                    <Typography gutterBottom variant={'h5'} component={'div'} className={'en'}>
                        Event Header
                    </Typography>
                    <Typography gutterBottom variant={'h5'} component={'div'} className={'nb'}>
                        Event Overskrift
                    </Typography>

                    <Typography variant={'body2'} className={'en'}>
                        This is some text to simulate an events description. <br />
                        There could be specifications aobut place and date or maybe even time.
                    </Typography>
                    <Typography variant={'body2'} className={'nb'}>
                        Dette er litt tekst for å simulere brødtekst i arrangementer. <br />
                        Her kan en legge til spesifikasjoner som sted, tid eller dato.
                    </Typography>
                </CardContent>

                <CardActions>
                    <Button size={'small'}>
                        <a href={"https://www.google.com"} target={'_blank'} rel="noopener noreferrer" className={'en'}>Save to calendar</a>
                        <a href={"https://www.google.com"} target={'_blank'} rel="noopener noreferrer" className={'nb'}>Legg til i kalender</a>
                    </Button>
                </CardActions>
            </Card>

            <Card style={styles.cardStyle}>
                <CardMedia
                    sx={{height: '15rem'}}
                    image={'../../img/temp.png'}
                    title={'Event'}
                />

                <CardContent>
                    <Typography gutterBottom variant={'h5'} component={'div'} className={'en'}>
                        Event Header
                    </Typography>
                    <Typography gutterBottom variant={'h5'} component={'div'} className={'nb'}>
                        Event Overskrift
                    </Typography>

                    <Typography variant={'body2'} className={'en'}>
                        This is some text to simulate an events description. <br />
                        There could be specifications aobut place and date or maybe even time.
                    </Typography>
                    <Typography variant={'body2'} className={'nb'}>
                        Dette er litt tekst for å simulere brødtekst i arrangementer. <br />
                        Her kan en legge til spesifikasjoner som sted, tid eller dato.
                    </Typography>
                </CardContent>

                <CardActions>
                    <Button size={'small'}>
                        <a href={"https://www.google.com"} target={'_blank'} rel="noopener noreferrer" className={'en'}>Save to calendar</a>
                        <a href={"https://www.google.com"} target={'_blank'} rel="noopener noreferrer" className={'nb'}>Legg til i kalender</a>
                    </Button>
                </CardActions>
            </Card>

            <Card style={styles.cardStyle}>
                <CardMedia
                    sx={{height: '15rem'}}
                    image={'../../img/temp.png'}
                    title={'Event'}
                />

                <CardContent>
                    <Typography gutterBottom variant={'h5'} component={'div'} className={'en'}>
                        Event Header
                    </Typography>
                    <Typography gutterBottom variant={'h5'} component={'div'} className={'nb'}>
                        Event Overskrift
                    </Typography>

                    <Typography variant={'body2'} className={'en'}>
                        This is some text to simulate an events description. <br />
                        There could be specifications aobut place and date or maybe even time.
                    </Typography>
                    <Typography variant={'body2'} className={'nb'}>
                        Dette er litt tekst for å simulere brødtekst i arrangementer. <br />
                        Her kan en legge til spesifikasjoner som sted, tid eller dato.
                    </Typography>
                </CardContent>

                <CardActions>
                    <Button size={'small'}>
                        <a href={"https://www.google.com"} target={'_blank'} rel="noopener noreferrer" className={'en'}>Save to calendar</a>
                        <a href={"https://www.google.com"} target={'_blank'} rel="noopener noreferrer" className={'nb'}>Legg til i kalender</a>
                    </Button>
                </CardActions>
            </Card>
        </Paper>
    );
}