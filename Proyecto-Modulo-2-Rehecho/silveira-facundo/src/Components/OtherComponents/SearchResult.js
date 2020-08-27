import React from 'react';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';

const SearchResult = (props) => {

    const list = props.songList;

    return (
        <div>
            {
            list.map((cancion) => (
                <Box mt={2} key={cancion.uuid}>
                    <Grid container="bool" direction="row" justify="space-between">
                        <Box pl={1}> 
                            <Grid container="bool" direction="row" alignItems="center">
                                <Box mr={1}><Avatar alt="Remy Sharp" src={cancion.artist.coverUrl} /></Box>
                                <Box><Typography variant="subtitle2">{cancion.name}</Typography></Box>
                            </Grid>
                        </Box>
                        <Typography variant="subtitle2">{cancion.artist.name}</Typography>
                        <Typography variant="subtitle2">{cancion.album}</Typography>
                        <Typography variant="subtitle2">{cancion.duration}</Typography>
                        <Typography variant="subtitle2">Agregar</Typography>
                    </Grid>
                </Box>
            ))
            }
        </div>
    )
}

export default SearchResult;
