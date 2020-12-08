import { Button } from "@material-ui/core";
import React from "react";
import "./Header.css";
import clsx from 'clsx';
import { SwipeableDrawer}  from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import MenuIcon from '@material-ui/icons/Menu';


export default function Header(props){

    const useStyles = makeStyles({
        list: {
          width: 250,
        },
        fullList: {
          width: 'auto',
        },
      });
      
      const classes = useStyles();
      const [state, setState] = React.useState({
        top: false,
        left: false,
        bottom: false,
        right: false,
      });
    
      const toggleDrawer = (anchor, open) => (event) => {
        if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
          return;
        }
    
        setState({ ...state, [anchor]: open });
      };
    
      const list = (anchor) => (
        <div
          className={clsx(classes.list, {
            [classes.fullList]: anchor === 'top' || anchor === 'bottom',
          })}
          role="presentation"
          onClick={toggleDrawer(anchor, false)}
          onKeyDown={toggleDrawer(anchor, false)}
        >
          <List>
            {['HOME', 'ABOUT US', 'CAREERS', 'GET IN TOUCH'].map((text, index) => (
              <ListItem button key={text}>
                <ListItemText primary={text} />
                <Divider />
              </ListItem>
            ))}
          </List>
        </div>
      );

 return(
     <>
        <div className="header">
            <div><p className="logo">BRILYANT</p></div>
            <div className="header-content">
                <div className="home"><Button className="bold">HOME</Button></div>
                <div className="about"><Button className="bold">ABOUT US</Button></div>
                <div className="offering"><Button className="bold">OFFERINGS<span>&#9660; </span></Button></div>
                <div className="careers"><Button className="bold">CAREERS</Button></div>
                <div className="touch"><Button variant="outlined" color="secondary" className="bold">
                    GET IN TOUCH &rarr;
                </Button>
                </div>
            </div>
            <div className="mobile-header-content">
                <MenuIcon onClick={toggleDrawer("right", true)}/>
                <SwipeableDrawer
                    anchor={"right"}
                    open={state["right"]}
                    onClose={toggleDrawer("right", false)}
                    onOpen={toggleDrawer("right", true)}
                >
                    {list("right")}
                </SwipeableDrawer>
            </div>
        </div>
     
     </>
 );
}