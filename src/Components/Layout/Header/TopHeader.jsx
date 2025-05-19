import { Container, Stack, TextField, Button } from '@mui/material';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import SearchIcon from '@mui/icons-material/Search';
import Avatar from '@mui/material/Avatar';
import Badge from '@mui/material/Badge';
import './Header.css'
import { Link } from 'react-router-dom';

function TopHeader() {
    return (

        <Container>

            <Stack direction="row" spacing={2} sx={{ justifyContent: "space-between", alignItems: "center" }}>

                <div className="brand">
                    <Link to='/'>
                        <img src="/img/logo.png" alt="online shop logo" width="80px" height="80px" />
                    </Link>
                </div>

                <div className="serach-input" style={{ width: "50%", display: 'flex', justifyContent: "center", alignItems: "center", position: "relative" }}>
                    <TextField
                        fullWidth
                        label="Search Products"
                        id="fullWidth"
                        size="small"
                        style={{ borderRadius: "25px" }}
                        sx={{
                            '& .MuiOutlinedInput-notchedOutline': {
                                border: '1px solid var(--primary-color)',
                                borderRadius: '25px'
                            },
                            '& .MuiOutlinedInput-root': {
                                borderColor: 'var(--primary-color)',
                                padding: '4px 10px',
                                '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                                    border: '1px solid var(--primary-color)',
                                }
                            },
                            '& .MuiInputLabel-root': {
                                color: 'var(--primary-color)',
                                padding: '4px 5px',
                                fontSize: "15px",
                                '&.Mui-focused': {
                                    color: 'var(--primary-color)'
                                }
                            },
                        }}
                    />
                    <Avatar className='avatar' style={{ position: "absolute", right: "7px", top: "4px" }}>
                        <Button

                            variant="contained"
                            sx={{
                                height: "100%",
                                backgroundColor: ' #20486e',
                                '&:hover': {
                                    backgroundColor: 'rgb(40, 89, 134)',
                                },
                            }}

                        >
                            <SearchIcon sx={{ color: "#fff" }} />
                        </Button>
                    </Avatar>
                </div>

                <div className="icons">
                    <Stack spacing={2} direction="row">
                        <Badge badgeContent={3} color="primary">
                            <Link to='/'><FavoriteBorderIcon style={{ fontSize: "28px", color: "#20486e" }} /></Link>
                        </Badge>
                        <Badge badgeContent={5} color="primary">
                            <Link to='/'><ShoppingBagIcon style={{ fontSize: "28px", color: "#20486e" }} /></Link>
                        </Badge>
                    </Stack>
                </div>
            </Stack>

        </Container>
    )
}

export default TopHeader
