import {Paper} from '@mui/material';

export default function Events() {
    const styles={
        paperStyle:{
            width:'70rem',
            padding:'0.3rem 0.08rem',
            margin:'2rem auto',
            background: '#161616',
            color: 'var(--bodytext-color)'
        }
    }

    return(
        <Paper elevation={0} style={styles.paperStyle}>
            <h2>Events</h2>
        </Paper>
    );
}