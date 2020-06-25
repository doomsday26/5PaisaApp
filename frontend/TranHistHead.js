import React,{Component} from 'react'
import { makeStyles } from '@material-ui/core/styles';
import ListSubheader from '@material-ui/core/ListSubheader';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography'

const useStyles = makeStyles((theme) => ({
  root: {
    width: '60%',
    maxWidth: 200,
    backgroundColor: theme.palette.background.paper,
  },
  nested: {
    paddingLeft: theme.spacing(4),
	},
	listColor: {
		backgroundColor: "#f5f5f5",
	},
	redColor: {
		color : "#d32f2f"
	},
	greenColor: {
		color: "#4caf50"
	}
}));



function TranHistHead(props){
	// const classes = useStyles();
    const [open, setOpen] = React.useState(true);

    const handleClick = () => {
    	setOpen(!open);
	};
	return (
		<List>
			<ListItem button onClick={handleClick}>
				<ListItemText primary={<Typography style ={{textAlign: 'left'}, {width: '25px'}, {fontWeight: "bold"}}><ListItemText primary={props.Date}/></Typography>}/>
				<ListItemText primary={<Typography style ={{textAlign: 'left'}, {width: '25px'}, {fontWeight: 700}}><ListItemText primary={props.BuySell}/></Typography>}/>
				<ListItemText primary={<Typography style ={{textAlign: 'left'}, {width: '25px'}, {fontWeight: 1000}}><ListItemText primary={props.Instrument}/></Typography>}/>
				<ListItemText primary={<Typography style ={{textAlign: 'left'}, {width: '25px'}, {fontWeight: 1000}}><ListItemText primary={props.Exch}/></Typography>}/>
                <ListItemText primary={<Typography style ={{textAlign: 'left'}, {width: '25px'}, {fontWeight: 1000}}><ListItemText primary={props.Type}/></Typography>}/>
                <ListItemText primary={<Typography style ={{textAlign: 'left'}, {width: '25px'}, {fontWeight: 1000}}><ListItemText primary={props.Qty}/></Typography>}/>
                <ListItemText primary={<Typography style ={{textAlign: 'left'}, {width: '25px'}, {fontWeight: 1000}}><ListItemText primary={props.Rate}/></Typography>}/>
				
			</ListItem>
			
		</List>
	)
}

export default TranHistHead