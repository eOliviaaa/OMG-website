import {Paper, Card, CardActions, CardContent, CardMedia, Typography, Button, Autocomplete, TextField} from '@mui/material';

export default function Registry() {
    const styles={
        paperStyle:{
            padding:'60px 20px',
            width:'80rem',
            margin:'0.2rem auto',
            background:'var(--background-color)',
            color: 'var(--bodytext-color)'
        },
        cardStyle:{
            backgroundColor: '#0f0f0f',
            color: 'var(--bodytext-color)',
            margin: '2rem auto',
            maxWidth: '45rem',
            textAlign: 'left'
        },
        positioningStyle:{
            display: 'grid',
            gridTemplateColumns: 'auto auto',
            columnGap: '1rem'
        }
    }

    const top100Films = ['jack', 'fred', 'jacob']

    return(
        <Paper elevation={0} style={styles.paperStyle}>
            <h1>Member registration page</h1>

            <Card style={styles.cardStyle}>
                <CardContent>
                    <Typography gutterBottom variant={'h5'} component={'div'}>
                        Search up member
                    </Typography>
                    <div style={styles.positioningStyle}>
                        <Autocomplete
                            disablePortal
                            options={top100Films}
                            sx={{ width: 300 }}
                            renderInput={(params) => <TextField sx={{border: 'solid', borderRadius: '1rem', backgroundColor: '#fff'}} {...params} label="Existing Member" />}
                        />
                        <Autocomplete
                            disablePortal
                            options={top100Films}
                            sx={{ width: 300 }}
                            renderInput={(params) => <TextField sx={{border: 'solid', borderRadius: '1rem', backgroundColor: '#fff'}} {...params} label="Previous Member" />}
                        />
                    </div>
                </CardContent>
            </Card>
        </Paper>
    );
}