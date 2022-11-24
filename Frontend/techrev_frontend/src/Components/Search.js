import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { useState, useEffect, createContext } from 'react';
import * as React from 'react';
import Typography from '@mui/material/Typography';
import UserDetail from './UserDetail';
import Chip from '@mui/material/Chip';

const data = createContext();
const Search = () => {
    const [fullData, setfullData] = useState([]);
    const [search, setSearch] = useState([]);
    const [set, setSet] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:3000/api/customer/selectCustomers`)
            .then((response) => response.json())
            .then((actualData) => {
                for (let data of actualData.data) {
                    setfullData((fullData) => [...fullData, data]);
                    setSearch((search) => [...search, data.userName]);
                }
            });
    }, [])
    return (
        <div style={{ padding: "2vh", alignContent: 'center', justifyContent: "center", alignItems: "center", width: "100vw", display: "flex" }}>
            <Autocomplete
                // disablePortal
                id="combo-box-demo"
                options={search}
                sx={{ width: 400 }}
                // defaultValue={search[0]}
                renderInput={(params) => {
                    return (
                        <div>
                            <div style={{ display: "flex" }}>
                                <TextField {...params} label="Search" />
                                <Chip
                                    style={{ marginLeft: "1vw", marginTop: "2vh" }}
                                    label="Delete User"
                                    variant="outlined"
                                    onClick={() => { }}
                                    onDelete={() => {
                                        fetch(`http://localhost:3000/api/customer/deleteCustomer`, {
                                            method: 'DELETE',
                                            headers: {
                                                'Content-Type': 'application/json'
                                            },
                                            body: JSON.stringify({
                                                userName: params.inputProps.value
                                            })
                                        }).then((response) => response.json())
                                            .then((res) => {
                                                console.log(res);
                                                if (res.code === 200) {
                                                    alert("User Deleted Successfully");
                                                    window.location.reload(false);
                                                }
                                                else {
                                                    alert("Error Occured");
                                                }
                                            })
                                    }}
                                />
                            </div>
                            {
                                params.inputProps.value && <UserDetail data={params.inputProps.value} flag={Math.random()} />
                            }
                        </div>
                    )
                }
                }
            />
        </div>

    );
}

export default Search
export { data }