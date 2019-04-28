import React from 'react';
import { Paper, Grid, Typography, IconButton, 
        InputBase, Input
} from '@material-ui/core';
import Arrow from '@material-ui/icons/ArrowForwardRounded';
import MoneyRounded from '@material-ui/icons/MoneyRounded';
import ListIcon from '@material-ui/icons/List';
import DirectionsIcon from '@material-ui/icons/Directions';
import ImageIcon from '@material-ui/icons/Image';
import MaskedInput from 'react-text-mask';
import axios from 'axios';

// input form
function TextMaskCustom(props) {
    const { inputRef, ...other } = props;
  
    return (
      <MaskedInput
        {...other}
        ref={ref => {
          inputRef(ref ? ref.inputElement : null);
        }}
        mask={['(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]}
        placeholderChar={'\u2000'}
        showMask
      />
    );
}

export default class HomePage extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            phone: "",
            textmask: '(1)    -    '
        }
    }

    handleSubmit = () => {
        const {phone} = this.state;

        axios({
            headers: { 
                'content-type': 'application/json'
            },
            method: 'post',
            url: `http://localhost:3001/api/phone`,
            params: {
                phone
            }
        })
        .then((response) => response.data)
        .catch((error) => error);
    }

    handleChange = (event) => {
        this.setState({ phone: event.target.value });
        // this.setState({ textmask: event.target.value });
        let y = this.state.textmask.replace(/^\|+\|(\|-\|)|\|+$/g, '');
        console.log(this.state.phone);
    }

    render(){
        const { textmask } = this.state;
        return(
            <div>
            <div className="home-top-paper"> 
                <Grid container direction="column" style={{paddingTop: '5%'}} alignItems="center">
                <h1 className="home-header">Welcome to HomePP</h1>
                <p className="home-header">
                    Enter your phone number to start! 
                </p>
                <Paper className="home-paper-search">
                    <IconButton className="home-iconButton" aria-label="Menu">
                    </IconButton>
                        {/* <Input
                            value={textmask}
                            onChange={this.handleChange}
                            id="formatted-text-mask-input"
                            inputComponent={TextMaskCustom}
                        /> */}
                    <InputBase className="home-input" onChange={this.handleChange} placeholder='e.g 1 407 452 1435' />
                    {/* <Typography className="home-input">Get your store recomendation</Typography> */}
                    {/* <Paper className="home-input-paper" square={true} onClick={() => console.log("click")}>
                        <h6 className="home-header" style={{marginTop: 10}}>Search</h6>
                    </Paper> */}
                    
                    <IconButton onClick={this.handleSubmit} color="primary" className="home-iconButton" aria-label="Directions">
                        <Arrow />
                    </IconButton>
                </Paper>
                </Grid>
            </div>
            <div className="home-middle-paper">
                <Grid container direction="column" alignItems="center">
                    <Typography variant='h3' style={{marginTop: '10%', color:'white'}}>HomePP's Key Benefits</Typography>
                    <p className="home-middle-subheader">
                        Something Here
                    </p>
                    <Grid style={{marginTop: '10%'}} container direction="row" justify="space-evenly" alignItems="center">
                    <Paper className="home-paper-card">
                        <Grid container direction="column" justify="space-evenly" style={{marginLeft: '10%'}}>
                            <MoneyRounded style={{fontSize: 70, marginTop: '7%'}} />
                            <Typography variant='h4' style={{marginTop: '7%'}}>Something Here</Typography>
                            <Typography variant='subtitle1' style={{marginTop: '7%'}}>Something Here</Typography>
                        </Grid>
                    </Paper>
                    <Paper className="home-paper-card">
                        <Grid container direction="column" justify="space-evenly" style={{marginLeft: '10%'}}>
                            <DirectionsIcon style={{fontSize: 70, marginTop: '7%'}} />
                            <Typography variant='h4' style={{marginTop: '7%'}}>Something Here</Typography>
                            <Typography variant='subtitle1' style={{marginTop: '7%'}}>Something Here</Typography>
                        </Grid>
                    </Paper>
                    <Paper className="home-paper-card">
                        <Grid container direction="column" justify="space-evenly" style={{marginLeft: '10%'}}>
                            <ListIcon style={{fontSize: 70, marginTop: '7%'}} />
                            <Typography variant='h4' style={{marginTop: '7%'}}>Something Here</Typography>
                            <Typography variant='subtitle1' style={{marginTop: '7%'}}>Something Here</Typography>
                        </Grid>
                    </Paper>
                    </Grid>
                </Grid>
            </div>
            </div>
        )
    }
}