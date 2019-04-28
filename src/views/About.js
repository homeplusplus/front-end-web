import React from 'react';
import Dropzone from 'react-dropzone';
import arrow_drop_down from '../constants/svg/arrow_drop_down.svg'
import papa from 'papaparse';
import axios from 'axios';
import { Paper, Grid, Typography, IconButton, 
        Divider, InputBase, List, ListItem, Avatar,
        ListItemText
} from '@material-ui/core';

// firebase
import { FirebaseDatabaseMutation } from '@react-firebase/database';
const path = "user_emails";

const baseStyle = {
    width: 200,
    height: 200,
    borderWidth: 2,
    borderColor: '#666',
    borderStyle: 'dashed',
    borderRadius: 5
};
const activeStyle = {
    borderStyle: 'solid',
    borderColor: '#6c6',
    backgroundColor: '#eee'
};
const rejectStyle = {
    borderStyle: 'solid',
    borderColor: '#c66',
    backgroundColor: '#eee'
};

export default class About extends React.Component {
    render() {
        return (
            <div>
            <Grid container direction="column" style={{paddingTop: '5%'}} alignItems="center">
                <h1 className="about-header">How does it work?</h1>
                <p className="about-text">Home++ provides real time information about resources and events directly to the phones of the homeless.
                </p>
                </Grid>
            </div>
        )
    }
}