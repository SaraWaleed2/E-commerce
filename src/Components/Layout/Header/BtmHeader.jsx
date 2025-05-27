import { Box, Container, Stack } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import { useEffect, useState } from "react";
import LogoutIcon from '@mui/icons-material/Logout';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const BtmHeader = () => {
    const [categorySelection, setCategorySelection] = useState("");
    const [categories, setCategories] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        axios.get('https://dummyjson.com/products/categories')
            .then((res) => {
                setCategories(res.data)
            })
            .catch((error) => {
                console.error("Error fetching categories:", error);
            })
    }, [])


    const handleCategoryChange = (event) => {
        const selectedCategoryName = event.target.value;
        setCategorySelection(selectedCategoryName);

        const selectedCategory = categories.find(cat => cat.name === selectedCategoryName);
        if (selectedCategory) {
            navigate(`/category/${selectedCategory.slug}`);
        }
        setCategorySelection('')
    };

    const categoriesList = categories.map((cate) => {
        return (
            <MenuItem key={cate.slug} value={cate.name}>
                {cate.name}
            </MenuItem>
        )
    })

    return (
        <div className="btmNav" style={{ backgroundColor: 'var(--primary-color)' }}>
            <Container maxWidth="lg">
                <Stack direction="row" justifyContent="space-between" alignItems="center">
                    <div className="category" style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        width: "12%",
                        gap: "8px"
                    }}>
                        <MenuIcon style={{ color: "white" }} />

                        <FormControl fullWidth style={{ width: "100%" }}>
                            <Select
                                value={categorySelection}
                                onChange={handleCategoryChange}
                                displayEmpty
                                inputProps={{ 'aria-label': 'Without label' }}
                                sx={{
                                    color: 'white',
                                    '.MuiOutlinedInput-notchedOutline': {
                                        border: "none",
                                    },
                                    '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                                        border: "none"
                                    },
                                    '&:hover .MuiOutlinedInput-notchedOutline': {
                                        border: "none"
                                    },
                                    '.MuiSvgIcon-root ': {
                                        fill: 'white !important',
                                    }
                                }}
                            >
                                <MenuItem disabled value="">
                                    Explore
                                </MenuItem>
                                {categoriesList}
                            </Select>
                        </FormControl>
                    </div>

                    <Box className="nav-list" sx={{ display: { xs: 'none', md: 'block'} }}>
                        <nav>
                            <ul style={{
                                display: "flex",
                                justifyContent: "space-between",
                                alignItems: "center",
                                gap: "1rem",
                                color: "white",
                                listStyle: "none",
                                margin: 0,
                                padding: 0
                            }}>
                                {categories.slice(6, 11).map((link) => {
                                    return (
                                        <li key={link.name}>
                                            <Link
                                                style={{
                                                    color: "white",
                                                    textDecoration: "none",
                                                    padding: "8px 10px",
                                                    borderRadius: "4px",
                                                    transition: "background-color 0.2s"
                                                }}
                                                to={`/category/${link.slug}`}
                                            >
                                                {link.name}
                                            </Link>
                                        </li>
                                    )
                                })}
                            </ul>
                        </nav>
                    </Box>

                    <div className="icons">
                        <Stack spacing={2} direction="row">
                            <LogoutIcon
                                style={{
                                    fontSize: "28px",
                                    color: "#fff",
                                    cursor: "pointer"
                                }}
                            />
                            <AccountCircleIcon
                                style={{
                                    fontSize: "28px",
                                    color: "#fff",
                                    cursor: "pointer",
                                }}
                            />
                        </Stack>
                    </div>
                </Stack>
            </Container>
        </div>
    )
}

export default BtmHeader;