import {Paper} from '@mui/material';


export default function Welcome(){

    const styles={
        paperStyle:{
            padding:'60px 20px',
            width:'110rem' ,
            margin:'0.2rem auto',
            background:"var(--background-color)"
        },

        imgWelcome:{
            width: '100%',
            borderRadius: '2rem'
        },

        textWelcome:{
            position: 'absolute',
            right: '10rem',
            top:'20%',
            width: '40%'
        }
    }

    return(
        <Paper elevation={0} style={styles.paperStyle}>
            <div className={'welcome'}>
                <img src={'../../img/temp.png'} alt={'temporary'} style={styles.imgWelcome}/>
                <div style={styles.textWelcome} className={'en'}>
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
                        Our events all start at 17:00, unless the event description says otherwise.<br/>
                        All our events are fully alcohol and drug free.
                    </p>
                </div>
                <div style={styles.textWelcome} className={'nb'}>
                    <h1>Velkommen til OsloMet Gaming!</h1>
                    <p>
                        Vi er en gjeng med interesse for alle typer spill, både digitalt og fysisk.
                        Vårt mål er å skape en sosial arena hvor alle kan møtes uavhengig av
                        tidligere erfaring og nivå av interesse.
                        <br/><br/>
                        Vi spiller blant annet videospill, brettspill, kortspill og TTRPGs
                        (TableTop Role-Playing Games, lignende Dungeons & Dragons eller Pathfinder).
                        Vi har en stor samling med brettspill, konsoller og VR-utstyr som vi tar med oss på våre arrangementer
                        og åpner for at våre medlemmer kan bruke fritt mens de er der.
                        <br/><br/>
                        Alle arrangementer starter kl 17:00, om ikke annet er annonsert. <br/>
                        Alle arrangementene våre er rusfrie.
                    </p>
                </div>
            </div>
        </Paper>
    );
}