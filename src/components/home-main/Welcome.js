import {Paper} from '@mui/material';

export default function Welcome(){
    const paperWelcomeStyle={padding:'60px 20px',width:'80rem' ,margin:'20px auto',background:"#161616"}
    return(
        <Paper elevation={3} style={paperWelcomeStyle}>
            <div className={'welcome'}>
                <img src={'../../img/temp.png'} alt={'temporary'} style={{width:'100%'}}/>
                <div className={'textContainer'}>
                    <h1>Welcome to Oslomet Gaming!</h1>
                    <p>This is a test paragprah to see how this would look on the page.</p>
                </div>
            </div>

        </Paper>
    );
}