import React from 'react';
import { Paper, Grid, Typography, IconButton, 
        Divider, InputBase, List, ListItem, Avatar,
        ListItemText
} from '@material-ui/core';
import Arrow from '@material-ui/icons/ArrowForwardRounded';
import MoneyRounded from '@material-ui/icons/MoneyRounded';
import ListIcon from '@material-ui/icons/List';
import DirectionsIcon from '@material-ui/icons/Directions';
import ImageIcon from '@material-ui/icons/Image';

export default class HomePage extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            
        }
    }



    handleList = () => {
        
    }

    renderLists = (props) => (
        <div key={props.shopid}>
            <ListItem >
                <Avatar>
                    <ImageIcon />
                </Avatar>
            <ListItemText primary={props.address}/>
            </ListItem>
            <li>
                <Divider variant="inset" />
            </li>
        </div>
    )

    rednerCards = (props, index) => (
        <Paper key={index} className="home-paper-card">
            <Grid container direction="column" justify="space-evenly" style={{marginLeft: '10%'}}>
                <DirectionsIcon style={{fontSize: 70, marginTop: '7%'}} />
                <Typography variant='h4' style={{marginTop: '7%'}}>{props.header}</Typography>
                <Typography variant='subtitle1' style={{marginTop: '7%'}}>{props.sentence}</Typography>
            </Grid>
        </Paper>
    )

    render(){
        const { show } = this.state;
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
                    <InputBase className="home-input" placeholder='e.g 1 407 452 1435' />
                    {/* <Typography className="home-input">Get your store recomendation</Typography> */}
                    {/* <Paper className="home-input-paper" square={true} onClick={() => console.log("click")}>
                        <h6 className="home-header" style={{marginTop: 10}}>Search</h6>
                    </Paper> */}
                    
                    <IconButton onClick={this.handleList} color="primary" className="home-iconButton" aria-label="Directions">
                        <Arrow />
                    </IconButton>
                </Paper>
                { 
                    show && 
                    <div style={{marginTop: 5}}>
                        <List className="home-list">
                            {this.state.data.map(farm => (this.renderLists(farm)))}
                        </List>
                    </div>  
                }
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