import React from 'react';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';
import FormControl from '@material-ui/core/FormControl';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputAdornment from '@material-ui/core/InputAdornment';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import Avatar from '@material-ui/core/Avatar';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import AddSongButton from './OtherComponents/AddSongButton';

const useStyle = makeStyles((theme) => ({
    root: {
        height: 47,
    },
    divider: {
        marginLeft: 0,
        marginRight: 0,
    }
}))

const SearchPlay = (props) => {

    let filterList = props.filterList;
    let classes = useStyle();

    const clickButton = props.clickButton;

    return (
            <Container>
                    <Box my={4}>
                        <FormControl fullWidth variant="outlined">
                            <Box width="40%" mx="auto">
                                <OutlinedInput
                                    classes={{ root: classes.root }}
                                    fullWidth="bool"
                                    placeholder="Buscar"
                                    startAdornment={<InputAdornment position="start"><SearchIcon /></InputAdornment>}
                                    labelWidth={0}
                                    onChange={props.onChange}
                                    onKeyPress={props.onKeyPress}
                                    value={props.inputValue}
                                />
                            </Box>
                        </FormControl>
                    </Box>
                    <Box boxShadow={3} px={4}>
                        <Box my={2} py={2} px={5}>
                            <Grid container="bool">                        
                                <TableContainer>
                                    <Table aria-label="simple table">
                                        <TableHead>
                                            <Typography variant="h6" color="primary">Resultados</Typography>
                                            <TableRow>
                                                <TableCell><Typography variant="body1"> Nombre </Typography></TableCell>
                                                <TableCell><Typography variant="body1"> Artista </Typography></TableCell>
                                                <TableCell><Typography variant="body1"> Album </Typography></TableCell>
                                                <TableCell><Typography variant="body1"> Duración </Typography></TableCell>
                                                <TableCell><Typography variant="body1"> Agrega </Typography></TableCell>
                                            </TableRow>
                                        </TableHead>
                                        <TableBody>
                                            {filterList.map((song) => (
                                                <TableRow key={song.uuid}>
                                                    <TableCell align="left">
                                                        <Grid container="bool" direction="row" alignItems="center">
                                                            <Box mr={2}>
                                                                <Avatar alt={song.artist.name} src={song.artist.coverUrl}/>
                                                            </Box>
                                                            {song.name}
                                                        </Grid>
                                                    </TableCell>
                                                    <TableCell align="left">{song.artist.name}</TableCell>
                                                    <TableCell align="left">{song.album}</TableCell>
                                                    <TableCell align="left">{song.duration}</TableCell>
                                                    <TableCell align="left"><AddSongButton onClick={(e) => clickButton(song.uuid)} /></TableCell>
                                                </TableRow>
                                            ))}
                                        </TableBody>
                                    </Table>
                                </TableContainer>
                            </Grid>
                        </Box>
                    </Box>
            </Container>
    )
}

export default SearchPlay;