import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'scroll'
    },
    paper: {
        width: '41%',
        outline: 'none',
        borderRadius: 10,
        padding: theme.spacing(2, 4, 2, 4),
        boxShadow: theme.shadows[5],
        backgroundColor: theme.palette.background.paper,
    },
}));

export default useStyles;