import React from 'react';
import { Paper, Grid, TextField, Button, FormControl, InputLabel, Select, MenuItem, OutlinedInput } from '@material-ui/core';
import Dropzone from 'react-dropzone';
import arrow_drop_down from '../constants/svg/arrow_drop_down.svg'
import papa from 'papaparse';
import axios from 'axios';

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

export default class InputDataPage extends React.Component {
    state = {
        name: "",
        address: "",
        phone: "",
        all: {},
        category: "",
        file: null,
        oldFile: null,
        labelWidth: 0,
    }

    handleChange = name => event => {
        this.setState({
            [name]: event.target.value,
        });
    };

    onDrop(file) {
        this.setState({ file: file });
        if (file !== this.state.oldFile) {
            this.setState({ convertButton: false })
        }
        papa.parse(file[0], {
            complete: function (results) {
                console.log(results);
            }
        });
    }

    handleSumbmit = () => {       
        console.log("Hello dsfdsf");
        // let all = {
        //     category: this.state.category : {
        //         name: this.state.name,
        //     } 
        // }
        // this.setState({
        //     name: "",
        //     address: "",
        //     monthPurchased: "",
        //     spoiledItem: ""
        // })
    }

    render() {
        return (
            <div>
                <div className="input-top-paper">
                    <Grid container direction="column" style={{ paddingTop: '5%' }} alignItems="center">
                    <h2 className="input-header"> If you have a information that can help, share it here</h2>
                        <Paper className="input-paper">
                            <Grid container direction="column" justify="space-evenly" alignItems="center">
                                <form className="input-form" noValidate autoComplete="off">

                                    <Grid container direction="row" justify="space-around" alignItems="center">
                                        <FormControl variant="outlined" style={{ marginTop: 9, width: 100 }}>
                                            <InputLabel
                                                ref={ref => {
                                                    this.InputLabelRef = ref;
                                                }}
                                                htmlFor="outlined-age-simple"
                                            >
                                                Category
                                            </InputLabel>
                                            <Select
                                                value={this.state.category}
                                                onChange={this.handleChange('category')}
                                                input={
                                                    <OutlinedInput
                                                        labelWidth={this.state.labelWidth}
                                                        name="category"
                                                        id="outlined-age-simple"
                                                    />
                                                }
                                            >
                                                <MenuItem value={"FOOD"}>Food</MenuItem>
                                                <MenuItem value={"SHELTER"}>Shelter</MenuItem>
                                                <MenuItem value={"Other"}>Other</MenuItem>
                                            </Select>
                                        </FormControl>

                                        <TextField
                                            id="outlined-name"
                                            label="Name"
                                            className="input-text-field"
                                            value={this.state.name}
                                            onChange={this.handleChange('name')}
                                            margin="normal"
                                            variant="outlined"
                                        />

                                        <TextField
                                            id="outlined-name"
                                            label="Address"
                                            className="input-text-field"
                                            value={this.state.address}
                                            onChange={this.handleChange('address')}
                                            margin="normal"
                                            variant="outlined"
                                        />

                                        <TextField
                                            id="outlined-name"
                                            label="Phone Number"
                                            className="input-text-field"
                                            value={this.state.phone}
                                            onChange={this.handleChange('phone')}
                                            margin="normal"
                                            variant="outlined"
                                        />
                                    </Grid>
                                </form>
                                <FirebaseDatabaseMutation type="push" path={path}>
                                    {({ runMutation }) => {
                                        return (
                                            <div>
                                                <button className="landing-button"
                                                    data-testid="test-push"
                                                    onClick={async () => {
                                                        await this.handleSumbmit();
                                                        await runMutation({ category: this.state.category,
                                                                            name: this.state.name,
                                                                            address: this.state.address,
                                                                            phoneNumber: this.state.phone
                                                                            });
                                                    }}
                                                >
                                                    Submit
                                                </button>
                                            </div>
                                        );
                                    }}
                                </FirebaseDatabaseMutation>
                                {/* <Button style={{ marginTop: 10, width: 200, color: 'black' }} variant="outlined" component="span" onClick={() => this.handleSumbmit()}>
                                    Submit
                                </Button> */}
                            </Grid>
                        </Paper>
                    </Grid>
                </div>
                <div className="input-middle-paper">
                    <div style={{ paddingTop: '7%' }}>        
                        <Grid container alignItems="center" justify="center" >
                        <h2 className="input-header"> If you have a flier, upload it here</h2>
                        <div className="middle-box">
                            <Dropzone accept=".pdf"
                                onDrop={this.onDrop.bind(this)}>
                                {({ getRootProps, getInputProps, isDragActive, isDragAccept, isDragReject, acceptedFiles, rejectedFiles }) => {
                                    let styles = { ...baseStyle }
                                    styles = isDragActive ? { ...styles, ...activeStyle } : styles
                                    styles = isDragReject ? { ...styles, ...rejectStyle } : styles

                                    return (
                                        <div
                                            {...getRootProps()}
                                            style={styles}
                                        >
                                            <input {...getInputProps()} />
                                            <div>
                                                {isDragAccept ? 'Drop' : 'Drag'} files here or click to select files
                                        </div>
                                            <p>Only *.pdf file will be accepted</p>
                                            <img src={arrow_drop_down} className="drop-logo" alt="arrow_drop_down" />
                                            {isDragReject && <div>Unsupported file type...</div>}
                                        </div>
                                    )
                                }}
                            </Dropzone>
                        </div>
                        
                        </Grid>
                    </div>
                </div>

            </div>
        )
    }
}