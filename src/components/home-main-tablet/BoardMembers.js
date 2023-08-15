import {Paper} from '@mui/material';
import {Card, CardContent, CardMedia, Typography} from '@mui/material';

export default function BoardMembers() {
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
            width: '18rem'
        },
        positioningStyle:{
            display: 'grid',
            gridTemplateColumns: 'auto auto'
        }
    }

    // Here you can change the names of board members
    const boardMemberName={
        leader:'Alexander Natvig',
        viceLeader:'Eline Sørensen',
        treasurer:'John Ruben Øystein',
        prManager:'Julian Krabbe',
        eventManager:'Leila Jakobsen',
        unpluggedManager:'Markus Olsen',
        voulenteerManager:'Kris Doyle',
        itManager:'Olivia Kristiansen'
    }
    // Here you can change the board members discord handles
    const boardMemberDiscord={
        leader:'xandair',
        viceLeader:'elinethewitch',
        treasurer:'maybechondrion',
        prManager:'gamerforfun',
        eventManager:'tartaerii',
        unpluggedManager:'kenoo',
        voulenteerManager:'xander.one.trick',
        itManager:'eoliviaaa'
    }

    return(
        <Paper elevation={0} style={styles.paperStyle}>
            <div className={'en'}>
                <h2>About the board</h2>
                <p>
                    We’re the student organization for those that are interested in games and gaming. <br/>
                    Whether that is pc-gaming, board games, card games, handheld games, <br/>
                    games on mobile, console games, tabletop roleplaying games or games on facebook.
                    <br/><br/>
                    Our goal is to be a social hub for students and gamers in and around Oslo and Viken.<br/>
                    To provide a place to meet others and a place to just hang out with other gamers.<br/>
                    Both online, and in the flesh at our office or one of our many events.<br/>
                    <br/><br/>
                    We focus on being inclusive and have a low threshold. We even provide the games.<br/>
                    So all you need to join is to be (t)here.<br/>
                    Get connections, meet new friends, and have a great time with us and our members.
                </p>
            </div>

            <div className={'nb'}>
                <h2>Om oss i styret</h2>
                <p>
                    Vi er studentorganisasjonen for gamere og folk som er interesserte i spill. <br/>
                    Om det er spill på pc, konsoll, brettspill, kortspill, spill på mobil eller nettbrett,<br/>
                    klassiske penn- og papir-rollespill, håndholdte spill eller spill på facebook.
                    <br/><br/>
                    Våre mål er å være et sosialt samlingspunkt for studenter og gamere i og rundt Oslo og Viken.<br/>
                    Å tilby et møtested og et sted å kunne være med andre gamere. Både på nett og fysisk,<br/>
                    enten i våre lokaler eller på et av våre mange arrangementer.
                    <br/><br/>
                    Vårt fokus er å være så inkluderende som mulig, samt ha en så lav terskel for deltakelse som mulig. <br/>
                    Alt du trenger for å henge med oss er å møte opp.<br/>
                    Få nye venner og kontakter og ha det hyggelig sammen med oss og våre medlemmer.
                </p>
            </div>
            <br/>
            <h2 className={'en'}>Board Members</h2>
            <h2 className={'nb'}>Styremedlemmer</h2>
            <div style={styles.positioningStyle}>
                <Card style={styles.cardStyle} id={'Leader'}>
                    <CardMedia
                        sx={{height: '25rem'}}
                        image={'../../img/omg_logo_black.png'}
                        title={'placholder image'}
                    />

                    <CardContent>
                        <Typography gutterBottom variant={'h5'} component={'div'} className={'en'}>
                            President
                        </Typography>
                        <Typography gutterBottom variant={'h5'} component={'div'} className={'nb'}>
                            Leder
                        </Typography>
                        <Typography variant={'body2'}>
                            {boardMemberName.leader}
                            <br/>
                            Discord: {boardMemberDiscord.leader}
                        </Typography>
                    </CardContent>
                </Card>
                <Card style={styles.cardStyle} id={'ViceLeader'}>
                    <CardMedia
                        sx={{height: '25rem'}}
                        image={'../../img/omg_logo_black.png'}
                        title={'placholder image'}
                    />

                    <CardContent>
                        <Typography gutterBottom variant={'h5'} component={'div'} className={'en'}>
                            Vice President
                        </Typography>
                        <Typography gutterBottom variant={'h5'} component={'div'} className={'nb'}>
                            Nestleder
                        </Typography>
                        <Typography variant={'body2'}>
                            {boardMemberName.viceLeader}
                            <br/>
                            Discord: {boardMemberDiscord.viceLeader}
                        </Typography>
                    </CardContent>
                </Card>
                <Card style={styles.cardStyle} id={'Treasurer'}>
                    <CardMedia
                        sx={{height: '25rem'}}
                        image={'../../img/omg_logo_black.png'}
                        title={'placholder image'}
                    />

                    <CardContent>
                        <Typography gutterBottom variant={'h5'} component={'div'} className={'en'}>
                            Treasurer
                        </Typography>
                        <Typography gutterBottom variant={'h5'} component={'div'} className={'nb'}>
                            Økonomiansvarlig
                        </Typography>
                        <Typography variant={'body2'}>
                            {boardMemberName.treasurer}
                            <br/>
                            Discord: {boardMemberDiscord.treasurer}
                        </Typography>
                    </CardContent>
                </Card>
                <Card style={styles.cardStyle} id={'PRManager'}>
                    <CardMedia
                        sx={{height: '25rem'}}
                        image={'../../img/omg_logo_black.png'}
                        title={'placholder image'}
                    />

                    <CardContent>
                        <Typography gutterBottom variant={'h5'} component={'div'} className={'en'}>
                            PR Manager
                        </Typography>
                        <Typography gutterBottom variant={'h5'} component={'div'} className={'nb'}>
                            PR Ansvarlig
                        </Typography>
                        <Typography variant={'body2'}>
                            {boardMemberName.prManager}
                            <br/>
                            Discord: {boardMemberDiscord.prManager}
                        </Typography>
                    </CardContent>
                </Card>
                <Card style={styles.cardStyle} id={'EventManager'}>
                    <CardMedia
                        sx={{height: '25rem'}}
                        image={'../../img/omg_logo_black.png'}
                        title={'placholder image'}
                    />

                    <CardContent>
                        <Typography gutterBottom variant={'h5'} component={'div'} className={'en'}>
                            Event Manager
                        </Typography>
                        <Typography gutterBottom variant={'h5'} component={'div'} className={'nb'}>
                            Arrangementansvarlig
                        </Typography>
                        <Typography variant={'body2'}>
                            {boardMemberName.eventManager}
                            <br/>
                            Discord: {boardMemberDiscord.eventManager}
                        </Typography>
                    </CardContent>
                </Card>
                <Card style={styles.cardStyle} id={'UnpluggedManager'}>
                    <CardMedia
                        sx={{height: '25rem'}}
                        image={'../../img/omg_logo_black.png'}
                        title={'placholder image'}
                    />

                    <CardContent>
                        <Typography gutterBottom variant={'h5'} component={'div'} className={'en'}>
                            Unplugged Manager
                        </Typography>
                        <Typography gutterBottom variant={'h5'} component={'div'} className={'nb'}>
                            Brettspillansvarlig
                        </Typography>
                        <Typography variant={'body2'}>
                            {boardMemberName.unpluggedManager}
                            <br/>
                            Discord: {boardMemberDiscord.unpluggedManager}
                        </Typography>
                    </CardContent>
                </Card>
                <Card style={styles.cardStyle} id={'VoulenteerManager'}>
                    <CardMedia
                        sx={{height: '25rem'}}
                        image={'../../img/omg_logo_black.png'}
                        title={'placholder image'}
                    />

                    <CardContent>
                        <Typography gutterBottom variant={'h5'} component={'div'} className={'en'}>
                            Voulenteer Manager
                        </Typography>
                        <Typography gutterBottom variant={'h5'} component={'div'} className={'nb'}>
                            Frivilligansvarlig
                        </Typography>
                        <Typography variant={'body2'}>
                            {boardMemberName.voulenteerManager}
                            <br/>
                            Discord: {boardMemberDiscord.voulenteerManager}
                        </Typography>
                    </CardContent>
                </Card>
                <Card style={styles.cardStyle} id={'ITManager'}>
                    <CardMedia
                        sx={{height: '25rem'}}
                        image={'../../img/omg_logo_black.png'}
                        title={'placholder image'}
                    />

                    <CardContent>
                        <Typography gutterBottom variant={'h5'} component={'div'} className={'en'}>
                            IT Manager
                        </Typography>
                        <Typography gutterBottom variant={'h5'} component={'div'} className={'nb'}>
                            IT Ansvarlig
                        </Typography>
                        <Typography variant={'body2'}>
                            {boardMemberName.itManager}
                            <br/>
                            Discord: {boardMemberDiscord.itManager}
                        </Typography>
                    </CardContent>
                </Card>
            </div>
        </Paper>
    );
}