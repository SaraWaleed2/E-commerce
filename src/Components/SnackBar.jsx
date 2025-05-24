import Snackbar from '@mui/material/Snackbar';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Alert from '@mui/material/Alert';
import { useToast } from "../Context/ToastContext";
import { Button, Stack } from '@mui/material';
import { useNavigate } from 'react-router-dom';

export default function SnackBar({ open, message }) {

    const { setOpen } = useToast();
    const navigate = useNavigate();
    function handleViewCart() {
        navigate('/cart');
        setOpen(false)
    }
    const action = (
        <>
            <IconButton
                size="small"
                aria-label="close"
                color="inherit"
            >
                <CloseIcon fontSize="small" />

            </IconButton>
        </>
    );

    return (
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
            <Snackbar
                open={open}
                message="added successfully"
                action={action}
            >
                <Alert variant="filled" icon={false} style={{ backgroundColor: "#ef8120" }} onClose={() => setOpen(false)}>
                    <Stack direction="row" alignItems="center" justifyContent="center" spacing={2}>
                        <span>{message}</span>
                        <Button
                            variant='contained'
                            size="small"
                            onClick={handleViewCart}
                            sx={{
                                background: "white",
                                color: "#ef8120",
                                padding: "6px 16px",
                                borderRadius: "25px",
                                ml: 2
                            }}
                        >
                            View Cart
                        </Button>
                    </Stack>
                </Alert>
            </Snackbar>

        </div>
    );
}