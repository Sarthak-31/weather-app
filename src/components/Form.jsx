import { useState } from 'react';
import { Box, InputBase, Button, styled } from '@mui/material';
import { getWeather } from '../services/api';
//container used to apply basic style to form field
const Container = styled(Box)({
    background: '#00ffff',
    padding: 10
});
//Inputbase is like textfield (from website)
const Input = styled(InputBase)({
    color: '#000000',
    marginRight: 20,
    fontSize: 18
});

const GetButton = styled(Button)({
    background: '#ff2a26'
})
//setResult passed as prop
const Form = ({ setResult }) => {
    //initially city and country (inputBases specified by name property) will be empty
    const [data, setData] = useState({ city: '', country: '' })
    //handleChange will be active when something entered in inputBase
    //in key-value pair, since key is varying we will put in square braces, if not since both city and country are inputs country value will be put in city as well
    //spread operator is used because without it values are getting overriden, we need to append the data
    const handleChange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value });
    }
    //gets the info from API call for the city and country
    //since we are getting result from async function even this will be async
    //we want to display in the Information component however so pass the response along to setResult
    const getWeatherInfo = async () => {
        let response = await getWeather(data.city, data.country);
        setResult(response);
    }

    return (
        <Container> {/*2 input fields are there and 1 button*/}
            <Input 
                placeholder="City"
                onChange={(e) => handleChange(e)}
                name="city"
            />
            <Input 
                placeholder="Country"
                onChange={(e) => handleChange(e)}
                name="country"
            />
            <GetButton
                variant="contained"
                onClick={() => getWeatherInfo()}
            >Get Weather</GetButton>
        </Container>
    )
}

export default Form;