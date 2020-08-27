import React, { useState } from 'react';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import { makeStyles } from '@material-ui/core/styles';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Avatar from '@material-ui/core/Avatar';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import IconButton from '@material-ui/core/IconButton';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import ThumbDownIcon from '@material-ui/icons/ThumbDown';

const useStyles = makeStyles({
    root: {
        marginLeft: 0,
        marginRight: 0,
    },
    table: {
        minWidth: 650,
    },
})

const UserPlaylist = (props) => {

    const classes = useStyles();

    const [count, setCountUp] = useState();

    const songItem = props.myPlaylist;

    return (
        <Container>
            <Box boxShadow={3} py={4} my={2} px={9}>
                <Grid container="bool" direction="column">
                    <TableContainer>
                        <Table aria-label="simple table">
                            <TableHead>
                                <Typography variant="h6" color="primary">Resultados</Typography>
                                <TableRow>
                                    <TableCell><Typography variant="body1"> Nombre </Typography></TableCell>
                                    <TableCell><Typography variant="body1"> Artista </Typography></TableCell>
                                    <TableCell><Typography variant="body1"> Album </Typography></TableCell>
                                    <TableCell><Typography variant="body1"> Duración </Typography></TableCell>
                                    <TableCell><Typography variant="body1"> Cant. Votos </Typography></TableCell>
                                    <TableCell><Typography variant="body1"> Vota </Typography></TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                <Divider variant="middle" classes={{ root: classes.root }} />
                                {props.myPlaylist.map((song) => (
                                    <TableRow key={song.uuid}>
                                        <TableCell align="left">
                                            <Grid container="bool" direction="row" alignItems="center">
                                                <Box mr={2}>
                                                    <Avatar alt={song.name} src={song.artist.coverUrl} />
                                                </Box>
                                                {song.name}
                                            </Grid>
                                        </TableCell>
                                        <TableCell align="left">{song.artist.name}</TableCell>
                                        <TableCell align="left">{song.album}</TableCell>
                                        <TableCell align="left">{song.duration}</TableCell>
                                        <TableCell align="left">{song.count}</TableCell>
                                        <TableCell align="left">
                                            <Box>
                                                <IconButton onClick={(event) => props.handleUpCount(event, song.uuid)}>
                                                    <ThumbUpAltIcon />
                                                </IconButton>
                                                <IconButton onClick={(event) => props.handleDownCount(event, song.uuid)}>
                                                    <Box>
                                                        <ThumbDownIcon />
                                                    </Box>
                                                </IconButton>
                                            </Box>
                                        </TableCell>
                                    </TableRow>
                                ))
                                }
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Grid>
            </Box>
        </Container>
    )
}

export default UserPlaylist;