import {Paper} from '@mui/material';

export default function Welcome(){
    const paperWelcomeStyle={
        padding:'60px 20px',
        width:'110rem' ,
        margin:'0.2rem auto',
        background:"var(--background-color)"
    }
    const imgWelcome={
        width: '100%',
        'border-radius': '2rem'
    }
    const textWelcome={
        position: 'absolute',
        right: '10rem',
        top:'20%',
        width: '40%'
    }

    const paperEventsStyle={
        width:'60rem',
        padding:'0.3rem 0.08rem',
        margin:'2rem auto',
        background: '#161616',
        color: 'var(--bodytext-color)'
    }

    return(
        <div>
            <Paper elevation={0} style={paperWelcomeStyle}>
                <div className={'welcome'} id={'en'}>
                    <img src={'../../img/temp.png'} alt={'temporary'} style={imgWelcome}/>
                    <div style={textWelcome}>
                        <h1>Welcome to Oslomet Gaming!</h1>
                        <p>
                            We are a bunch of people who enjoy games in all forms, be it video games
                            or tabletop games. We aim to create a social space for everyone with
                            any intrest of games regardless of prior gaming experience and level of interest.
                            <br/><br/>
                            We play video games, board games, card games and TTRPGs
                            (TableTop Role-Playing Games, like Dungeons & Dragons or Pathfinder).
                            We have a large collection of board games,
                            consoles and VR-equipment that we bring to our events,
                            and as a member you will have access to all of this during events.
                            <br/><br/>
                            Our events all start at 17:00, unless the event description says otherwise.
                            All our events are fully alcohol and drug free.
                        </p>
                    </div>
                </div>
            </Paper>

            <Paper elevation={2} style={paperEventsStyle}>
                <div>
                    <h2>Events</h2>
                </div>
            </Paper>
        </div>

    );
}