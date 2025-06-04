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
        setCategorySelection('');
    };

    const categoriesList = categories.map((cate) => (
        <MenuItem key={cate.slug} value={cate.name}>
            {cate.name}
        </MenuItem>
    ));

    return (
        <div className="btmNav" style={{ backgroundColor: 'var(--primary-color)' }}>
            <Container maxWidth="lg">
                <Stack
                    direction='row'
                    justifyContent="space-between"
                    alignItems="center"
                    spacing={{ xs: 1, md: 0 }}
                    sx={{ py: 1 }}
                >
                    <div
                        className="category"
                        style={{
                            display: "flex",
                            alignItems: "center",
                            gap: "8px",
                            width: "100%",
                            maxWidth: "180px",
                        }}
                    >
                        <MenuIcon style={{ color: "white" }} />

                        <FormControl fullWidth>
                            <Select
                                value={categorySelection}
                                onChange={handleCategoryChange}
                                displayEmpty
                                inputProps={{ 'aria-label': 'Without label' }}
                                sx={{
                                    color: 'white',
                                    fontSize: "14px",
                                    '.MuiOutlinedInput-notchedOutline': { border: "none" },
                                    '&.Mui-focused .MuiOutlinedInput-notchedOutline': { border: "none" },
                                    '&:hover .MuiOutlinedInput-notchedOutline': { border: "none" },
                                    '.MuiSvgIcon-root': { fill: 'white !important' },
                                    backgroundColor: 'transparent',
                                }}
                            >
                                <MenuItem disabled value="">Explore</MenuItem>
                                {categoriesList}
                            </Select>
                        </FormControl>
                    </div>

                    <Box className="nav-list" sx={{ display: { xs: 'none', md: 'block' } }}>
                        <nav>
                            <ul
                                style={{
                                    display: "flex",
                                    justifyContent: "space-between",
                                    alignItems: "center",
                                    gap: "1rem",
                                    color: "white",
                                    listStyle: "none",
                                    margin: 0,
                                    padding: 0
                                }}
                            >
                                {categories.slice(6, 11).map((link) => (
                                    <li key={link.name}>
                                        <Link
                                            to={`/category/${link.slug}`}
                                            style={{
                                                color: "white",
                                                textDecoration: "none",
                                                padding: "8px 10px",
                                                borderRadius: "4px",
                                                transition: "background-color 0.2s"
                                            }}
                                        >
                                            {link.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </nav>
                    </Box>

                    <Box className="icons">
                        <Stack spacing={2} direction="row" justifyContent="center">
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
                    </Box>
                </Stack>
            </Container>
        </div>
    );
};

export default BtmHeader;
