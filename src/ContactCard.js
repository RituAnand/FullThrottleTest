import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import CardContent from '@material-ui/core/CardContent';
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';
import CardActions from '@material-ui/core/CardActions';

const useStyles = makeStyles((theme) => ({
    root: {
      width: '100%',
      maxWidth: '36ch',
      backgroundColor: theme.palette.background.paper,
    },
    inline: {
      display: 'inline',
    },
  }));

const ContactCard = ({contact}) => {
    const classes = useStyles();
    return(

       
       <Card className={classes.root}>
        <CardContent>
            <ListItem alignItems="flex-start">
                <ListItemAvatar>
                <Avatar alt="Remy Sharp" src="./1.png" />
                </ListItemAvatar>
                <ListItemText
                primary={contact.real_name}
                secondary={
                    <React.Fragment>
                    <Typography
                        component="span"
                        variant="body2"
                        className={classes.inline}
                        color="textPrimary"
                    >
                    { contact.activity_periods.map(
                        (time) =>
                            <div key={time.start_time}>
                            <div><ListItemText primary="Start Time: " />{time.start_time}</div>
                            <div><ListItemText primary="End Time: " />{time.end_time}</div>
                            </div>
                        )
                    }
                    </Typography>
                    {contact.tz}
                    </React.Fragment>
                }
                />
            </ListItem>
            <CardActions>
            <Button size="small" color="primary">
            Share
            </Button>
            <Button size="small" color="primary">
            Learn More
            </Button>
            </CardActions>
       </CardContent>
       </Card>
    )
}

export default ContactCard