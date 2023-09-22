import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Paper from '@mui/material/Paper';
import { Container } from '@mui/material';
import Button from '@mui/material/Button'; 

export default function Student() {
    const paperStyle = {padding: '50px 20px', width:600, margin:"20px auto"}
    const[name, setName]=React.useState('')
    const[index, setIndex]=React.useState('')
    const[students,setStudents]=React.useState([])

    const handleClick=(e)=>{
        e.preventDefault()
        const student={name,index}
        console.log(student)

        fetch("http://localhost:8080/student/add",{
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify(student)
        }).then(()=>{
            console.log("New Student Added!")
        })
        }
    
        React.useEffect(()=>{
            fetch("http://localhost:8080/student/getAll")
            .then(res=>res.json())
            .then((result)=>{
                setStudents(result);
            })
        },[])

  return (
    <Container>
    <Paper elevation={3} sx={{ p: 2 }} style={paperStyle}>
        <h1 style = {{color:"blue"}}>Add Student</h1>
      {/* You can adjust the `sx` props of Paper for styling */}
      <Box
        component="form"
        sx={{
          '& > :not(style)': { m: 1 },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField id="outlined-basic" label="Student Name" variant="outlined" fullWidth
        value={name} onChange={(e)=>setName(e.target.value)} />
        <TextField id="outlined-basic" label="Student Index" variant="outlined" fullWidth
        value={index} onChange={(e)=>setIndex(e.target.value)} />

        <Button variant="contained" onClick={handleClick}>Submit</Button>
      </Box>
    </Paper>

    <Paper elevation={3} style={paperStyle}>
        {students.map(student=>(
            <paper elevation={6}  key={student.id}>
                Id:{student.id}<br/>
                Name:{student.name}<br/>
                Index:{student.index}
            </paper>
        ))}

    </Paper>
    </Container>
  );
}

