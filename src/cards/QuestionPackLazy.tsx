
import { Box, Button, Grid, Typography } from '@mui/material';
import React from 'react'
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import styled from 'styled-components';

interface Props {
    header_image: string;
    subject: string;


    
}

const StyledGridItem = styled(Grid)({
    transition: 'transform 0.3s ease',
    '&:hover': {
        transform: 'scale(1.025)',
    }
});

const QuestionPackLazy: React.FC<Props> = (props) => {
    return (

        <Box sx={{
            backgroundColor: "#ffff", borderRadius: "20px", display: "flex", flexDirection: "column", justifyContent: "center", textAlign: "center", height: "20rem", pb: "10px",
            boxShadow: "0px 8px 0px 0px #D9D9D9"
        }} gap={1.5} width={"100%"}>
            <Box
                sx={{
                    backgroundImage: `url(${props.header_image})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    width: '100%',
                    height: '80%',
                    justifyContent: "center",
                    display: "flex",
                    borderRadius: "20px 20px 0px 0px",


                }}
            />


            {/* row 2 */}

            <Box sx={{ justifyContent: "space-around", alignItems: "center" }} px={1} >
                <Box sx={{ display: "flex", backgroundColor: "gray.light", color: "gray.dark", borderRadius: "20px", alignItems: "center", px: "10px", py: "5px" , mb:"10px" ,justifyContent:"center" }}>
                    <Typography sx={{ fontWeight: "600", fontSize:"14px" }}>{props.subject}</Typography>
                </Box>
                <Typography sx={{ backgroundColor: "yellow.main", color: "gray.dark", borderRadius: "20px", fontSize: "10px", px: "10px", py: "5px" }}>۱ سوال</Typography>
            </Box>

        </Box>
    )
}

export default QuestionPackLazy;