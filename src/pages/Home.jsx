import { useState } from 'react';
import { Box, styled } from '@mui/material';
import Sunset from '../assets/images/bg.jpg';
import Form from '../components/Form';
import Information from '../components/Information';
//use Box which is wrapper component for div
//styled component handles the styling
const Component = styled(Box)({
    height: '100vh',
    display: 'flex',
    alignItems: 'center',
    margin: '0 auto',
    width: '65%'
})

const Image = styled(Box)({
    backgroundImage: `url(${Sunset})`, //we imported Sunset from assets->images
    width: '30%',
    height: '80%',
    backgroundSize: 'cover', //covers the element
    borderRadius: '20px 0 0 20px' //to round the top left and bottom left corners
})

const Home = () => {
    //will get the data from Form field and initially empty object
    const [result, setResult] = useState({})

    return (
        <Component>
            <Image></Image> {/*first part ie image is added*/}
            <Box style={{ width: '70%', height: '80%' }}> {/*the img part has width 30% so we give remaining width to box*/}
                <Form setResult={setResult} /> {/*Prop is used here and result passed to Information*/}
                <Information result={result} />
            </Box>
        </Component>
    )
}

export default Home;