import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import ThumbDownIcon from '@material-ui/icons/ThumbDown';
import Box from '@material-ui/core/Box';

const LikeDisButton = (props) => {

    return (
        <Box>
            <IconButton onClick={props.onClickUp} name={props.song.uuid}>
                <Box>
                    <ThumbUpAltIcon />
                </Box>
            </IconButton>
            <IconButton onClick={props.onClickDown}>
                <Box>
                    <ThumbDownIcon />
                </Box>
            </IconButton>
        </Box>
    )
}

export default LikeDisButton;