import { Container, Stack } from "@mui/material"
import MenuIcon from '@mui/icons-material/Menu';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import { useEffect, useState } from "react";
import LogoutIcon from '@mui/icons-material/Logout';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import axios from "axios";
import { Link } from "react-router-dom";

const BtmHeader = () => {
    const [categorySelection, setCategorySelection] = useState("");
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        axios.get('https://dummyjson.com/products/categories')
            .then((res) => {
                setCategories(res.data)
            })
    }, [])

    if (!categories) {
        return <div>Loading...</div>;
    }

    const categoriesList = categories.map((cate) => {
        return (
            <MenuItem value={cate.name}>{cate.name}</MenuItem>
        )
    })
    console.log(categorySelection)

    const navLinks = [
        { name: "Home", link: "/" },
        { name: "About", link: "/" },
        { name: "Accessories", link: "/" },
        { name: "Blog", link: "/" },
        { name: "Contact us", link: "/" },

    ]
    return (
        <div className="btmNav" style={{ backgroundColor: 'var(--primary-color)' }}>
            <Container maxWidth="lg">
                <Stack direction="row" justifyContent="space-between" alignItems="center" >
                    <div className="category" style={{ display: "flex", justifyContent: "space-between", alignItems: "center", width: "18%" }}>
                        <MenuIcon style={{ color: "white" }} />
                        <FormControl fullWidth style={{ width: "100%", color: "white" }} sx={{
                            '& .MuiOutlinedInput-notchedOutline': {
                                border: 'none',
                            },
                            '& .MuiInputLabel-root': {
                                color: 'white',
                                fontSize: "15px",

                            },
                            '& .MuiSvgIcon-root': {
                                color: 'white',
                            },
                            '& .MuiSelect-select': {
                                color: 'white',
                            }
                        }} >
                            <Select
                                value={categorySelection}
                                onChange={(event) => {
                                    setCategorySelection(event.target.value)
                                }}
                                displayEmpty
                                inputProps={{ 'aria-label': 'Without label' }}
                            >
                                <MenuItem disabled value=""> Browse Ctegories</MenuItem>
                                {
                                    categoriesList.splice(6, 12)
                                }
                            </Select>
                        </FormControl>
                    </div>
                    <div className="nav-list">
                        <nav>
                            <ul style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: "1.5rem", color: "white"}}>
                                {
                                    navLinks.map((link) => {
                                        return (
                                            <Link key={link.name} style={{color: "white"}} to={link.link}><li>{link.name}</li></Link>
                                        )
                                    })
                                }
                            </ul>
                        </nav>
                    </div>

                    <div className="icons">
                        <Stack spacing={2} direction="row">
                            <LogoutIcon style={{ fontSize: "28px", color: "#fff" }} />
                            <AccountCircleIcon style={{ fontSize: "28px", color: "#fff" }} />
                        </Stack>

                    </div>
                </Stack>
            </Container>

        </div>
    )
}

export default BtmHeader
