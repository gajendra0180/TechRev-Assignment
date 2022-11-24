import React from 'react'
import SupervisedUserCircleIcon from '@mui/icons-material/SupervisedUserCircle';
import { data } from './Search';
import { useState, useEffect, createContext } from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { TextField } from '@mui/material';


const UserDetail = (props) => {
  const [fullData, setfullData] = useState([]);
  const [name, setName] = useState([]);
  const [email, setEmail] = useState([]);
  const [dob, setDob] = useState([]);
  const [gender, setGender] = useState([]);
  const [addressLine1, setAddressLine1] = useState([]);
  const [Landmark, setLandmark] = useState([]);
  const [city, setCity] = useState([]);
  const [state, setState] = useState([]);
  const [counter, setCounter] = useState(0);
  const [updateFirstName, setUpdateFirstName] = useState([]);
  const [updateLastName, setUpdateLastName] = useState([]);
  const [updateEmail, setUpdateEmail] = useState([]);
  const [updateDob, setUpdateDOB] = useState([]);
  const [updateGender, setUpdateGender] = useState([]);
  const [updateAddressLine1, setUpdateAddressLine1] = useState([]);
  const [updateLandmark, setUpdateLandmark] = useState([]);
  const [updateCity, setUpdateCity] = useState([]);
  const [updateState, setUpdateState] = useState([]);
  const [updateCountry, setUpdateCountry] = useState([]);
  const [updatePhone, setUpdatePhone] = useState([]);
  const [updatePassword, setUpdatepassword] = useState([]);
  const [updateConfirmPassword, setUpdateConfirmPassword] = useState([]);
  const [updateUserName, setUpdateuserName] = useState([]);

  function submitForm() {
    fetch(`http://localhost:3000/api/customer/insertCustomer`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ 
        firstName: updateFirstName,
        lastName: updateLastName,
        email: updateEmail,
        dob: updateDob,
        userName: updateUserName,
        phone: updatePhone,
        gender: updateGender,
        password: updatePassword,
        confirmPassword: updateConfirmPassword,
        address: updateAddressLine1,
        landmark: updateLandmark,
        city: updateCity,
        state: updateState,
        country: updateCountry,
        zipCode: updatePhone
       })
    }).then((response) => response.json())
      .then((res) => {
        console.log(res);
        if (res.code === 201) {
          alert("User Created Successfully");
          window.location.reload(false);
        }
        else {
          alert("Error Occured");
        }
      })
  }

  if (props.flag != counter) {
    setCounter((counter) => {
      fetch(`http://localhost:3000/api/customer/selectCustomers`)
        .then((response) => response.json())
        .then((actualData) => {
          for (let data of actualData.data) {
            console.log(props.data, data.userName, "Here we are")
            if (props.data === data.userName) {
              setName(data.firstName);
              setEmail(data.email);
              setDob(data.dob);
              setGender(data.gender);
              setfullData((fullData) => [...fullData, data]);
              // setFlag(true);
              fetch(`http://localhost:3000/api/customer/selectCustomerById`, {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json'
                },
                // send the id in body 
                body: JSON.stringify({ customerId: data.id })
              }).then((response) => response.json())
                .then((addressData) => {
                  setAddressLine1(addressData.addressData.address);
                  setLandmark(addressData.addressData.landmark);
                  setCity(addressData.addressData.city);
                  setState(addressData.addressData.state);
                  console.log(addressData.addressData.city, "Here is teh address")
                })
            }
          }
        });
      return props.flag;
    });

  }
  return (
    <>
      <div style={{ display: "flex", flexDirection: "column", padding: "2vh" }}>
        <div style={{ display: "flex", justifyContent: "space-evenly", padding: "10vh" }}>
          <Card sx={{ minWidth: 275 }} style={{ marginRight: "5vw" }}>
            <CardContent>
              <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                {email && email}
              </Typography>
              <Typography variant="h5" component="div">
                {name && name}
              </Typography>
              <Typography sx={{ mb: 1.5 }} color="text.secondary">
                {dob && dob.slice(0, 10)}
              </Typography>
              <Typography variant="body2">
                {gender && gender}
                <br />
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Profile</Button>
            </CardActions>
          </Card>
          <Card sx={{ minWidth: 275 }}>
            <CardContent>
              <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                {addressLine1 && addressLine1}
              </Typography>
              <Typography variant="h5" component="div">
                {Landmark && Landmark}
              </Typography>
              <Typography sx={{ mb: 1.5 }} color="text.secondary">
                {city && city}
              </Typography>
              <Typography variant="body2">
                {state && state}
                <br />
              </Typography>
            </CardContent>
            <CardActions>
            </CardActions>
          </Card>
        </div>
      </div>
      <div style={{ display: "flex", justifyContent: "space-evenly", flexDirection: "column" }}>
        <h1>Add A User</h1>
        <TextField
          required
          id="outlined-required"
          label="FirstName"
          defaultValue=""
          onChange={(e) => { setUpdateFirstName(e.target.value) }}
          style={{ marginBottom: "2vh" }}
        />
        <TextField
          required
          id="outlined-required"
          label="LastName"
          defaultValue=""
          onChange={(e) => { setUpdateLastName(e.target.value) }}
          style={{ marginBottom: "2vh" }}
        />
        <TextField
          required
          id="outlined-required"
          label="Gender"
          defaultValue=""
          onChange={(e) => { setUpdateGender(e.target.value) }}

          style={{ marginBottom: "2vh" }}
        />
        <TextField
          required
          id="outlined-required"
          label="DOB"
          defaultValue=""
          onChange={(e) => { setUpdateDOB(e.target.value) }}
          style={{ marginBottom: "2vh" }}
        />
        <TextField
          required
          id="outlined-required"
          label="userName"
          defaultValue=""
          onChange={(e) => { setUpdateuserName(e.target.value) }}
          style={{ marginBottom: "2vh" }}
        />
        <TextField
          required
          id="outlined-required"
          label="Email"
          defaultValue=""
          onChange={(e) => { setUpdateEmail(e.target.value) }}
          style={{ marginBottom: "2vh" }}
        />
        <TextField
          required
          id="outlined-required"
          label="Phone"
          defaultValue=""
          onChange={(e) => { setUpdatePhone(e.target.value) }}
          style={{ marginBottom: "2vh" }}
        />
        <TextField
          required
          id="outlined-required"
          label="password"
          defaultValue=""
          onChange={(e) => { setUpdatepassword(e.target.value) }}
          style={{ marginBottom: "2vh" }}
        />
        <TextField
          required
          id="outlined-required"
          label="confirm Password"
          defaultValue=""
          onChange={(e) => { setUpdateConfirmPassword(e.target.value) }}
          style={{ marginBottom: "2vh" }}
        />
        <TextField
          required
          id="outlined-required"
          label="Address"
          defaultValue=""
          onChange={(e) => { setUpdateAddressLine1(e.target.value) }}
          style={{ marginBottom: "2vh" }}
        />
        <TextField
          required
          id="outlined-required"
          label="City"
          defaultValue=""
          onChange={(e) => { setUpdateCity(e.target.value) }}
          style={{ marginBottom: "2vh" }}
        />
        <TextField
          required
          id="outlined-required"
          label="State"
          defaultValue=""
          onChange={(e) => { setUpdateState(e.target.value) }}
          style={{ marginBottom: "2vh" }}
        />
        <TextField
          required
          id="outlined-required"
          label="Landmark"
          defaultValue=""
          onChange={(e) => { setUpdateLandmark(e.target.value) }}
          style={{ marginBottom: "2vh" }}
        />
        <TextField
          required
          id="outlined-required"
          label="Country"
          defaultValue=""
          onChange={(e) => { setUpdateCountry(e.target.value) }}
          style={{ marginBottom: "2vh" }}
        />
        <Button variant="contained" onClick={submitForm}>Submit</Button>
      </div>
    </>
  )
}

export default UserDetail