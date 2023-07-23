import {Paper} from '@mui/material';
import {Card, CardContent, Typography} from '@mui/material';

export default function GeneralInfo() {
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
            width: '20rem'
        },
        positioningStyle:{
            display: 'grid',
            gridTemplateColumns: 'auto auto auto',
            columnGap: '1rem'
        }
    }

    return(
        <Paper style={styles.paperStyle}>
            <h2 className={'en'}>General info</h2>
            <h2 className={'nb'}>Generell informasjon</h2>

            <div style={styles.positioningStyle}>

                <Card style={styles.cardStyle}>
                    <CardContent className={'en'}>
                        <Typography gutterBottom variant={'h5'} component={'div'}>
                            Membership
                        </Typography>
                        <Typography variant={'body2'}>
                            There will be text here describing how to become a member.
                        </Typography>
                    </CardContent>

                    <CardContent className={'nb'}>
                        <Typography gutterBottom variant={'h5'} component={'div'}>
                            Medlemskap
                        </Typography>
                        <Typography variant={'body2'}>
                            Det kommer til å være tekst her som beskriver hvordan man blir medlem av organisasjonen.
                        </Typography>
                    </CardContent>
                </Card>

                <Card style={styles.cardStyle}>
                    <CardContent className={'en'}>
                        <Typography gutterBottom variant={'h5'} component={'div'}>
                            Voulenteer
                        </Typography>
                        <Typography variant={'body2'}>
                            There will be text here describing how to become a voulenteer.
                        </Typography>
                    </CardContent>

                    <CardContent className={'nb'}>
                        <Typography gutterBottom variant={'h5'} component={'div'}>
                            Frivillig
                        </Typography>
                        <Typography variant={'body2'}>
                            Det kommer til å være tekst her som beskriver hvordan man blir frivillig.
                        </Typography>
                    </CardContent>
                </Card>

                <Card style={styles.cardStyle}>
                    <CardContent className={'en'}>
                        <Typography gutterBottom variant={'h5'} component={'div'}>
                            Roleplaying
                        </Typography>
                        <Typography variant={'body2'}>
                            There will be text here describing roleplaying.
                        </Typography>
                    </CardContent>

                    <CardContent className={'nb'}>
                        <Typography gutterBottom variant={'h5'} component={'div'}>
                            Rollespill
                        </Typography>
                        <Typography variant={'body2'}>
                            Det kommer til å være tekst her som beskriver rollespill.
                        </Typography>
                    </CardContent>
                </Card>

            </div>
        </Paper>
    );
}