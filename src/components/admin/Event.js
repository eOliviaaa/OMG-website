import React, { useEffect, useState } from 'react';
import TextField from '@mui/material/TextField';
import { Container , Paper, Button} from '@mui/material';
import { createTheme } from '@mui/material/styles';
import { alpha, styled } from '@mui/material/styles';
import { DateTimeField } from '@mui/x-date-pickers/DateTimeField';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';

const theme = createTheme({
    palette: {
        primary: {
            main: '#161616',
        },
        secondary: {
            main: '#d50000',
        },
    },
});

export default function Event() {
    const paperStyle={padding:'60px 20px', width:600,margin:"20px auto",background:"#161616"}
    const textFieldStyle={}

    // Custom css for text fields - currently not possible to type more than one letter at a time with this
    const CssTextField = styled(TextField)({
        '& > *': {
            margin: theme.spacing(1),
        },
        '& label': {
            color: '#A0AAB4',
        },
        '& label.Mui-focused': {
            color: '#A0AAB4',
        },
        '& .MuiInput-underline:after': {
            borderBottomColor: '#B2BAC2',
        },
        '& .MuiOutlinedInput-root': {
            '& fieldset': {
                borderColor: '#E0E3E7',
            },
            '&:hover fieldset': {
                borderColor: '#B2BAC2',
            },
            '&.Mui-focused fieldset': {
                borderColor: '#6F7E8C',
            },
        },
    });

    // Custom css for date time pickers
    const CssDateTimeField = styled(DateTimeField)({
        '& > *': {
            margin: theme.spacing(1),

        },
        '& label': {
            color: '#A0AAB4',
        },
        '& label.Mui-focused': {
            color: '#A0AAB4',
        },
        '& .MuiInput-underline:after': {
            borderBottomColor: '#B2BAC2',
        },
        '& .MuiOutlinedInput-root': {
            '& fieldset': {
                borderColor: '#E0E3E7',
            },
            '&:hover fieldset': {
                borderColor: '#B2BAC2',
            },
            '&.Mui-focused fieldset': {
                borderColor: '#6F7E8C',
            },
        },
    });

    // Norwegian header and description.
    const[noHeader, setNoHeader]=useState('');
    const[noDesc, setNoDesc]=useState('');

    // English header and description.
    const[enHeader, setEnHeader]=useState('');
    const[enDesc, setEnDesc]=useState('');

    // Event start and end dates.
    const[startDate, setStartDate]=useState('');
    const[endDate, setEndDate]=useState('');

    // List of events.
    const[events, setEvents]=useState([]);

    // Handels addEvent button click.
    const addEvent=(e)=>{
        e.preventDefault()
        // const event is what we want to send to the API.
        const event={noHeader,noDesc,enHeader,enDesc,startDate,endDate}
        console.log(event);

        // fetch takes an endpoint from the api and uses a POST method to send the information.
        fetch("http://localhost:8080/event/createEvent",{
            method: "POST",
            headers: {"Content-Type":"application/json"},
            body: JSON.stringify(event)
        }).then(()=>{
            console.log("Event added.")
        })
    }
    useEffect(()=>{
        fetch("http://localhost:8080/event/getAllEvents")
            .then(result=>result.json())
            .then((result)=>{
                setEvents(result);
            })
    },[])
    return (
        <Container>
            <h1 style={{color:"white"}}>Event Form</h1>
            <Paper elevation={3} style={paperStyle}>
                <form autoComplete={"off"}>
                    <TextField id={"custom-css-outlined-input"} label={"Norwegian Header"} variant={"outlined"} fullWidth
                               style={textFieldStyle}
                                  value={noHeader}
                                  onChange={(e) => setNoHeader(e.target.value)}
                    />

                    <TextField id={"custom-css-outlined-input"} label={"Norwegian Description"} variant={"outlined"} fullWidth
                                  value={noDesc}
                                  onChange={(e)=>setNoDesc(e.target.value)}
                    />

                    <TextField id={"custom-css-outlined-input"} label={"English Header"} variant={"outlined"} fullWidth
                                  value={enHeader}
                                  onChange={(e)=>setEnHeader(e.target.value)}
                    />

                    <TextField id={"custom-css-outlined-input"} label={"English Description"} variant={"outlined"} fullWidth
                                  value={enDesc}
                                  onChange={(e)=>setEnDesc(e.target.value)}
                    />

                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <CssDateTimeField label="Start date" format={"DD-MM-YYYY / hh:mm"} />
                        <CssDateTimeField label="End date" format={"DD-MM-YYYY / hh:mm"} />
                    </LocalizationProvider>

                    <Button variant={"contained"} color={"secondary"} onClick={addEvent}>Submit</Button>
                </form>
            </Paper>
            <h1>Event list</h1>
            <Paper elevation={3} style={paperStyle}>
                {events.map(event=>(
                    <Paper elevation={6} style={{margin:"10px",padding:"15px",textAlign:"left"}} key={event.id}>
                        Id: {event.id}<br/>
                        NoHeader: {event.noHeader}<br/>
                        NoDesc: {event.noDesc}<br/>
                        EnHeader: {event.enHeader}<br/>
                        EnDesc: {event.enDesc}<br/>
                        StartDate: {event.startDate}<br/>
                        EndDate: {event.endDate}
                    </Paper>
                ))}
            </Paper>
        </Container>
    )
}