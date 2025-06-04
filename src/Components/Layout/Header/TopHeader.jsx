import { Container,Stack,IconButton,Badge,Drawer,Box,useMediaQuery} from '@mui/material';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import MenuIcon from '@mui/icons-material/Menu';
import './Header.css';
import { Link } from 'react-router-dom';
import { cartContext } from '../../../Context/cartContext';
import { useContext, useState } from 'react';
import SearchBox from './SearchBox';
import { useTheme } from '@mui/material/styles';

function TopHeader() {
    const { cartItems, favouriteItems } = useContext(cartContext);
    const [drawerOpen, setDrawerOpen] = useState(false);
    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

    return (
        <Container>
            <Stack
                direction="row"
                spacing={2}
                sx={{ justifyContent: "space-between", alignItems: "center" }}
            >

                <div className="brand">
                    <Link to='/'>
                        <img src="/img/logo.png" alt="online shop logo" width="80px" height="80px" />
                    </Link>
                </div>
                {!isSmallScreen && <SearchBox />}

                <div className="icons">
                    <Stack spacing={2} direction="row">
                        {isSmallScreen ? (
                            <>
                                <IconButton onClick={() => setDrawerOpen(true)}>
                                    <MenuIcon style={{ fontSize: "28px", color: "#20486e" }} />
                                </IconButton>
                                <Drawer
                                    anchor="top"
                                    open={drawerOpen}
                                    onClose={() => setDrawerOpen(false)}
                                >
                                    <Box sx={{ width:'90%', p: 2 , display: 'flex', justifyContent: 'center', alignItems: 'center',gap: 2 }}>
                                        <Box mb={2} sx={{ flexGrow: 1 }}>
                                            <SearchBox />
                                        </Box>
                                        <Stack spacing={2} direction="row">
                                            <Badge badgeContent={favouriteItems.length} showZero color="primary">
                                                <Link to='/favourite' onClick={() => setDrawerOpen(false)}>
                                                    <FavoriteBorderIcon style={{ fontSize: "28px", color: "#20486e" }} />
                                                </Link>
                                            </Badge>
                                            <Badge badgeContent={cartItems.length} showZero color="primary">
                                                <Link to='/cart' onClick={() => setDrawerOpen(false)}>
                                                    <ShoppingBagIcon style={{ fontSize: "28px", color: "#20486e" }} />
                                                </Link>
                                            </Badge>
                                        </Stack>
                                    </Box>
                                </Drawer>
                            </>
                        ) : (
                            <>
                                <Badge badgeContent={favouriteItems.length} showZero color="primary">
                                    <Link to='/favourite'><FavoriteBorderIcon style={{ fontSize: "28px", color: "#20486e" }} /></Link>
                                </Badge>
                                <Badge badgeContent={cartItems.length} showZero color="primary">
                                    <Link to='/cart'><ShoppingBagIcon style={{ fontSize: "28px", color: "#20486e" }} /></Link>
                                </Badge>
                            </>
                        )}
                    </Stack>
                </div>
            </Stack>
        </Container>
    );
}

export default TopHeader;