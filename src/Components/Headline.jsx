import { Typography, Box } from "@mui/material";
import { useContext } from "react";
import { HeadlineContext } from "../Context/HeadlineContext";

function Headline() {
    const { title, content } = useContext(HeadlineContext);
    return (
        <Box sx={{
            position: "relative",
            marginBottom: "40px",
            padding: "15px 20px 20px 0",
            borderBottom: "1px solid #ddd",
            '& ::after': {
                content: "''",
                position: 'absolute',
                bottom: 0,
                left: 0,
                width: '14%',
                height: '3px',
                backgroundColor: 'var(--secondary-color)',
            }

        }}>
            <Typography variant="h4" style={{ color: "var(--primary-color)" }} sx={{ fontWeight: "600", textTransform: "capitalize" }}>
                {title}
            </Typography>
            <Typography variant="body1" style={{ color: "var(--color-heading)", marginTop: "10px" }}>
                {content}
            </Typography>
        </Box>
    )
}

export default Headline;
