import React from 'react';
import { Paper, Grid, TextField, Button, FormControl, InputLabel, Select, MenuItem, OutlinedInput } from '@material-ui/core';
import Dropzone from 'react-dropzone';
import arrow_drop_down from '../constants/svg/arrow_drop_down.svg'
import papa from 'papaparse';
import axios from 'axios';

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
        itemName: "",
        itemSupplied: "",
        monthPurchased: "",
        spoiledItem: "",
        file: null,
        oldFile: null
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
        const { itemName, itemSupplied, monthPurchased, spoiledItem } = this.state;
        let da = [
            {
                itemname: itemName,
                itemssupplied: +itemSupplied,
                monthpurchased: monthPurchased,
                itemsspoiled: +spoiledItem,
            }
        ]
        let json = JSON.stringify(da);
        let post_data = { json_da: json };

        axios.post('https://cors-anywhere.herokuapp.com/http://localhost:3000/users', {
            post_data
        })
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
        this.setState({
            itemName: "",
            itemSupplied: "",
            monthPurchased: "",
            spoiledItem: ""
        })
    }

    render() {
        return (
            <div>
                <div className="input-top-paper">
                    <Grid container direction="column" style={{ paddingTop: '5%' }} alignItems="center">
                        <h2 className="input-header"> Upload Your Data File</h2>
                        <div className="middle-box">
                            <Dropzone accept=".csv"
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
                                            <p>Only *.csv file will be accepted</p>
                                            <img src={arrow_drop_down} className="drop-logo" alt="arrow_drop_down" />
                                            {isDragReject && <div>Unsupported file type...</div>}
                                        </div>
                                    )
                                }}
                            </Dropzone>
                        </div>
                        <h3 className="input-header" style={{ marginTop: '15%', color: 'white' }}> You can also enter your information manually here</h3>
                    </Grid>
                </div>
                <div className="input-middle-paper">
                    <div style={{ paddingTop: '7%' }}>      
                        <Grid container alignItems="center" justify="center" >
                            <Paper className="input-paper">
                                <Grid container direction="column" justify="space-evenly" alignItems="center">
                                    <form className="input-form" noValidate autoComplete="off">

                                        <Grid container direction="row" justify="space-around" alignItems="center">
                                            <FormControl variant="outlined" style={{marginTop: 9, width: 100}}>
                                                <InputLabel
                                                    ref={ref => {
                                                        this.InputLabelRef = ref;
                                                    }}
                                                    htmlFor="outlined-age-simple"
                                                >
                                                    Category
                                                </InputLabel>
                                                <Select
                                                    value={this.state.age}
                                                    onChange={this.handleChange}
                                                    input={
                                                        <OutlinedInput
                                                            labelWidth={this.state.labelWidth}
                                                            name="age"
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
                                                value={this.state.itemSupplied}
                                                onChange={this.handleChange('itemSupplied')}
                                                margin="normal"
                                                variant="outlined"
                                            />

                                            <TextField
                                                id="outlined-name"
                                                label="Address"
                                                className="input-text-field"
                                                value={this.state.monthPurchased}
                                                onChange={this.handleChange('monthPurchased')}
                                                margin="normal"
                                                variant="outlined"
                                            />

                                            <TextField
                                                id="outlined-name"
                                                label="Phone Number"
                                                className="input-text-field"
                                                value={this.state.spoiledItem}
                                                onChange={this.handleChange('spoiledItem')}
                                                margin="normal"
                                                variant="outlined"
                                            />
                                        </Grid>
                                    </form>
                                    <Button style={{ marginTop: 10, width: 200, color: 'black' }} variant="outlined" component="span" onClick={() => this.handleSumbmit()}>
                                        Submit
                                </Button>
                                </Grid>
                            </Paper>
                        </Grid>
                    </div>
                </div>

            </div>
        )
    }
}