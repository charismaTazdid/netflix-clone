import { makeStyles } from "@mui/styles";

export default makeStyles((theme) => ({
    container: {
        position: "relative",
        top: '100px',
    },
    paper: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: theme.spacing(2),
    },
    root: {
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
        },
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: 'darkred  !important',
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(3),
    },
    submit: {
        marginTop: '10px !important',
        marginBottom: '-5px !important',
        backgroundColor: 'darkred !important',
    },
    googleButton: {
        backgroundColor: '#ffad57 !important',
    },
    switchBtn: {
        marginBottom: '5px!important',
    }
}));