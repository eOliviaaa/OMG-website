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
            width: '30rem'
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
                            Currently there is no way to become a member online. <br/>
                            However you can sign up by talking to a boardmember at our events or the lounge if it is open. <br/><br/>
                            The price of being a member is 200kr per semester.
                            <br/><br/>
                            Being a member gives you free access to all our events and voting power at our general assemblies.
                        </Typography>
                    </CardContent>

                    <CardContent className={'nb'}>
                        <Typography gutterBottom variant={'h5'} component={'div'}>
                            Medlemskap
                        </Typography>
                        <Typography variant={'body2'}>
                            Det er ikke mulig å registrere seg som medlem online enda. <br/>
                            Du kan møte opp på arrangementer og snakke med et styremedlem
                            eller komme innom spillstua om den er åpen for å bli registrert som medlem.<br/><br/>
                            Medlemskap koster 200kr per semester.
                            <br/><br/>
                            Ved å være medlem så får du gratis inngang til alle arrangementene våre og stemmerett ved allmøtene.
                        </Typography>
                    </CardContent>
                </Card>

                <Card style={styles.cardStyle}>
                    <CardContent className={'en'}>
                        <Typography gutterBottom variant={'h5'} component={'div'}>
                            Voulenteer
                        </Typography>
                        <Typography variant={'body2'}>
                            Events require a lot of work and would never be possible without our voulenteers. <br/><br/>
                            This work can be everything from being at stands to increase our visibility and recruiting new members,
                            helping to setup network and electrical infrastructure at LANs, moving tables and chairs for events etc.
                            <br/><br/>
                            We do not require any previous expirience nor do we expect you to always be on call. You get to choose when you want to help out.
                            <br/><br/>
                            By being a voulenteer you get benefits like free membership for the next semester and free food and snacks at our LANs.
                            We also host a voulenteer appreciation day every semester to show our gratitude to you.
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
                            Within OsloMet Gaming we have something we call Unplugged, which focuses on roleplaying games like D&D and Pathfinder,
                            board games, card games like Magic: the Gathering, and so on. <br/><br/>

                            Today we have many and varied roleplaying groups that play most of the week days.
                            You can also find some of these groups at our events plus a plethera of board games. <br/><br/>

                            For more information contact: <a href={'#UnpluggedManager'}>Markus Olsen</a>
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