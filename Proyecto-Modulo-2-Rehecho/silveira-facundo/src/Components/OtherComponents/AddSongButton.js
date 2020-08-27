import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import AddCircle from '@material-ui/icons/AddCircle';

const AddSongButton = (props) => {

    return(
        <IconButton color="secondary" aria-label="add song" onClick={props.onClick} component="span">
          <AddCircle fontSize="large"/>
        </IconButton>
    )
}

export default AddSongButton;