import { makeStyles } from "@mui/styles";

export default makeStyles(() => ({
    container: {
        position: 'relative',
        top: '50px',
        minHeight: '100vh',
        backgroundColor: '#111',
    },
    mainContainer: {
        display: 'flex',
        alignItems: 'center',
    },
    notFound: {
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        width: '400px',
        padding: '40px',
        border: '2px solid red',
        borderRadius: '10px'
    },
    containerX: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        minHeight: '600px',
    }
}));