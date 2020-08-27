import React from 'react';
import List from '@material-ui/core/List';
import Box from '@material-ui/core/Box';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

const ListResult = (props) => {

    return (
        <List>
            <ListItem>
                <Grid container="bool" alignItems="center" justify="space-between">
                    <Box width={1/4} maxWidth>
                        <Grid container="bool" direction="row" justify="center" alignItems="center" align="left">
                            <ListItemAvatar>
                                <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                            </ListItemAvatar>
                            <ListItemText>
                                <Typography variant="body1">{props.songName}</Typography>
                            </ListItemText>
                        </Grid>
                    </Box>
                    <ListItemText>
                        <Typography variant="body1">{props.artist}</Typography>
                    </ListItemText>
                    <ListItemText align="center">
                        <Typography variant="body1">{props.time}</Typography>
                    </ListItemText>
                    <ListItemText align="center">
                        <Typography variant="body1">{props.favs}</Typography>
                    </ListItemText>
                    <ListItemText align="right">
                        <Typography variant="body1">Like - noLike</Typography>
                    </ListItemText>
                </Grid>
            </ListItem>
        </List>
    )
}

export default ListResult;