import { TextField, IconButton, Paper, List, ListItem, ListItemText, Box } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function SearchBox() {
    const [searchTerm, setSearchTerm] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const [showSuggestions, setShowSuggestions] = useState(false);
    const navigate = useNavigate();

    function handleSearch(e) {
        e.preventDefault();
        if (searchTerm.trim()) {
            navigate(`/search?query=${encodeURIComponent(searchTerm.trim())}`);
            setSearchTerm('');
            setShowSuggestions(false);
        }
    }

    function handleProductClick(productId) {
        navigate(`/products/${productId}`);
        setShowSuggestions(false);
        setSearchTerm('');
    }

    useEffect(() => {
        if (!searchTerm.trim()) {
            setSearchResults([]);
            setShowSuggestions(false);
            return;
        }

        const timer = setTimeout(() => {
            axios.get(`https://dummyjson.com/products/search?q=${searchTerm}`)
                .then(response => {
                    setSearchResults(response.data.products.slice(0, 5) || []);
                    setShowSuggestions(true);
                })
                .catch(error => {
                    console.log(error);
                    setSearchResults([]);
                    setShowSuggestions(false);
                });
        }, 300);

        return () => clearTimeout(timer);
    }, [searchTerm]);

    return (
        <Box sx={{ position: 'relative', width: { sm: '100%', md: '50%' } }}>
            <form onSubmit={handleSearch} className="search-input" style={{
                width: "100%",
                display: 'flex',
                justifyContent: "center",
                alignItems: "center",
                position: "relative"
            }}>
                <TextField
                    fullWidth
                    label="Search Products"
                    id="fullWidth"
                    size="small"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    onBlur={() => setShowSuggestions(false)}
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
                <IconButton
                    type="submit"
                    sx={{
                        position: "absolute",
                        right: "7px",
                        top: "7px",
                        backgroundColor: '#20486e',
                        '&:hover': {
                            backgroundColor: 'rgb(40, 89, 134)',
                        },
                        color: "#fff",
                        height: "36px",
                        width: "36px"
                    }}
                >
                    <SearchIcon />
                </IconButton>
            </form>

            {searchResults.length > 0 && (
                <Paper
                    elevation={3}
                    sx={{
                        position: 'absolute',
                        width: '100%',
                        maxHeight: '300px',
                        overflow: 'auto',
                        zIndex: 9999,
                        mt: 1
                    }}
                >
                    <List>
                        {searchResults.map((item) => (
                            <ListItem
                                key={item.id}
                                onClick={() => handleProductClick(item.id)}
                                sx={{
                                    cursor: 'pointer',
                                    color: 'var(--primary-color)',
                                    '&:hover': {
                                        backgroundColor: 'rgba(0, 0, 0, 0.04)'
                                    }
                                }}
                            >
                                <ListItemText primary={item.title} />
                            </ListItem>
                        ))}
                    </List>
                </Paper>
            )}
        </Box>
    );
}

export default SearchBox;