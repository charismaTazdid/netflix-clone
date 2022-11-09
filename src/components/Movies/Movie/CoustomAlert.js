import * as React from 'react';
import PropTypes from 'prop-types';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';


const BootstrapDialog = styled(Dialog)(({ theme }) => ({
    '& .MuiDialogContent-root': {
        padding: theme.spacing(2),
    },
    '& .MuiDialogActions-root': {
        padding: theme.spacing(1),
    },
}));

const BootstrapDialogTitle = (props) => {
    const { children, onClose, ...other } = props;


    return (
        <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
            {children}
            {onClose ? (
                <IconButton
                    aria-label="close"
                    onClick={onClose}
                    sx={{
                        position: 'absolute',
                        right: 8,
                        top: 8,
                        color: (theme) => theme.palette.grey[500],
                    }}
                >
                    <CloseIcon />
                </IconButton>
            ) : null}
        </DialogTitle>
    );
};

BootstrapDialogTitle.propTypes = {
    children: PropTypes.node,
    onClose: PropTypes.func.isRequired,
};

 const CoustomAlert = ({ alertOpen, setAlertOpen }) => {
    const navigate = useNavigate();
    const handleClose = () => {
        setAlertOpen(false);
    };

    return (
        <div>
            <BootstrapDialog
                onClose={handleClose}
                aria-labelledby="customized-dialog-title"
                open={alertOpen}

            >
                <BootstrapDialogTitle id="customized-dialog-title" onClose={handleClose}>
                    Want to Make your Favourite List?😏
                </BootstrapDialogTitle>
                <DialogContent dividers>
                    <Typography gutterBottom>
                        Only registerd user can make thier Favourite List.
                    </Typography>
                    <Typography gutterBottom>
                        Kindly Login first and List your Favourite Movie...
                    </Typography>

                    <Button
                        onClick={() => { navigate('/auth') }}
                        fullWidth
                        variant='contained'
                        color='warning'
                    >
                        Sign In
                    </Button>

                </DialogContent>
            </BootstrapDialog>
        </div>
    );
}

export default CoustomAlert;