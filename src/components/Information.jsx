import { Box, Typography, styled } from '@mui/material';
//all of these icons from material UI displayed as icons in Box tag
import { LocationOn, SettingsBrightness, Opacity, Brightness5, Brightness6, Dehaze, Cloud } from '@mui/icons-material'
//In materialUI, Typography can be used in place of p tag
const Row = styled(Typography)({
    padding: 10,
    fontSize: 20,
    letterSpacing: 2,
    '& > svg': {  //to add style after the svg icon ie space b/w icon and info
        marginRight: 10
    }
});

const Error = styled(Typography)({
    color: 'crimson',
    margin: 50,
    padding: 20
})

const Information = ({ result }) => {
    return (
        result && Object.keys(result).length > 0 ? //checks if there is an input and if it exist in list of keys of object
        <Box style={{ margin: '30px 60px' }}>
            <Row><LocationOn />Location: {result.name}, {result.sys.country}</Row>
            <Row><SettingsBrightness />Temperature: {result.main.temp}</Row>
            <Row><Opacity />Humidity: {result.main.humidity}</Row>
            <Row><Brightness5 />Sun Rise: {new Date(result.sys.sunrise * 1000).toLocaleTimeString()}</Row>
            <Row><Brightness6 />Sun Set: {new Date(result.sys.sunset * 1000).toLocaleTimeString()}</Row>
            <Row><Dehaze />Humidity: {result.weather[0].main}</Row> {/*weather is array of objects*/}
            <Row><Cloud />Clouds: {result.clouds.all}%</Row>
        </Box>
        : <Error>Please enter the city, country names to check weather</Error>
    )
}

export default Information;