import { Container, Stack } from '@mui/material';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import Badge from '@mui/material/Badge';
import './Header.css'
import { Link } from 'react-router-dom';
import { cartContext } from '../../../Context/cartContext';
import { useContext } from 'react';
import SearchBox from './SearchBox';

function TopHeader() {
    const { cartItems,favouriteItems } = useContext(cartContext)

    return (

        <Container>

            <Stack direction="row" spacing={2} sx={{ justifyContent: "space-between", alignItems: "center" }}>

                <div className="brand">
                    <Link to='/'>
                        <img src="/img/logo.png" alt="online shop logo" width="80px" height="80px" />
                    </Link>
                </div>

                <SearchBox />

                <div className="icons">
                    <Stack spacing={2} direction="row">
                        <Badge badgeContent={favouriteItems.length} showZero color="primary">
                            <Link to='/favourite'><FavoriteBorderIcon style={{ fontSize: "28px", color: "#20486e" }} /></Link>
                        </Badge>
                        <Badge badgeContent={cartItems.length} showZero color="primary">
                            <Link to='/cart'><ShoppingBagIcon style={{ fontSize: "28px", color: "#20486e" }} /></Link>
                        </Badge>
                    </Stack>
                </div>
            </Stack>

        </Container>
    )
}

export default TopHeader
