import React from 'react'
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import StarIcon from '@material-ui/icons/StarBorder';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core';
const useStyles = makeStyles((theme) => ({
  '@global': {
    ul: {
      margin: 0,
      padding: 0,
      listStyle: 'none',
    },
  },
  appBar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
  toolbar: {
    flexWrap: 'wrap',
  },
  toolbarTitle: {
    flexGrow: 1,
  },
  link: {
    margin: theme.spacing(1, 1.5),
  },
  heroContent: {
    padding: theme.spacing(8, 0, 6),
  },
  cardHeader: {
    backgroundColor:
      theme.palette.type === 'light' ? theme.palette.grey[200] : theme.palette.grey[700],
  },
  cardPricing: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'baseline',
    marginBottom: theme.spacing(2),
  },
  footer: {
    borderTop: `1px solid ${theme.palette.divider}`,
    marginTop: theme.spacing(8),
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3),
    [theme.breakpoints.up('sm')]: {
      paddingTop: theme.spacing(6),
      paddingBottom: theme.spacing(6),
    },
  },
}));
export const SuscriptionCard = ({sub}) => {
  const classes = useStyles();
    return (
         // Enterprise card is full width at sm breakpoint
         <Grid item key={sub.title} xs={12} sm={sub.title === 'Enterprise' ? 12 : 6} md={4}>
         <Card>
           <CardHeader
             title={sub.tipo}
             subheader={sub.subheader}
             titleTypographyProps={{ align: 'center' }}
             subheaderTypographyProps={{ align: 'center' }}
            //  action={sub.title === 'Pro' ? <StarIcon /> : null}
             className={classes.cardHeader}
           />
           <CardContent>
             <div className={classes.cardPricing}>
               <Typography component="h2" variant="h3" color="textPrimary">
                 ${sub.precio}
               </Typography>
               <Typography variant="h6" color="textSecondary">
                 {/* /bs */}
               </Typography>
             </div>
             {/* <ul>
               {sub.description.map((line) => (
                 <Typography component="li" variant="subtitle1" align="center" key={line}>
                   {line}
                 </Typography>
               ))}
             </ul> */}
              <ul>
             <Typography component="li" variant="subtitle1" align="center" key={sub.dias}>
                  {'Duracion: '+sub.dias+' dias'} 
             </Typography>
             </ul>
           </CardContent>
           <CardActions>
             <Button fullWidth variant={'contained'} color="primary">
               {/* {sub.buttonText} */}
               Seleccionar
             </Button>
           </CardActions>
         </Card>
       </Grid>
    )
}
