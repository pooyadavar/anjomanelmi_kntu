
import { Box, Button, Grid, Typography } from '@mui/material';
import React from 'react'
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';

interface Props {
    header_image: string;
    title: string;
    author: string;
    subject: string;
    lesson: string;
    chapter: string;
    grade: string;
    status: string;

}

const QuestionPack: React.FC<Props> = (props) => {
    return (

        <Box sx={{
            backgroundColor: "#ffff", borderRadius: "20px", display: "flex", flexDirection: "column", justifyContent: "center", textAlign: "center", height: "20rem", pb: "10px",
            boxShadow: "0px 8px 0px 0px #D9D9D9", cursor: "pointer"
        }} gap={2} width={"100%"}>
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

            <Box sx={{ justifyContent: "space-around", alignItems: "center" }} gap={0.5} px={1} >
                <Box sx={{ display: "flex", backgroundColor: "gray.light", color: "gray.dark", borderRadius: "20px", alignItems: "center", px: "10px", py: "2px", justifyContent: "center" }}>
                    <Typography sx={{ fontSize: "12px" }}>{props.grade}</Typography>
                    <KeyboardArrowLeftIcon sx={{ fontSize: "12px" }} />
                    <Typography sx={{ fontSize: "12px" }}>{props.chapter}</Typography>
                    <KeyboardArrowLeftIcon sx={{ fontSize: "12px" }} />
                    <Typography sx={{ fontSize: "12px" }}>{props.lesson}</Typography>
                    <KeyboardArrowLeftIcon sx={{ fontSize: "12px" }} />
                    <Typography sx={{ fontWeight: "800" }}>{props.subject}</Typography>
                </Box>
                <Grid container sx={{ display: "flex" , mt:"0.5rem" , justifyContent:"center"}} gap={1.5}  >
                    <Grid item md={5.6} >
                        <Typography sx={{ backgroundColor: "yellow.main", color: "gray.dark", borderRadius: "20px", fontSize: "10px", px: "10px", py: "8px" }}>{props.author}</Typography>
                    </Grid>
                    <Grid item md={5.6} >
                        <Typography sx={{ backgroundColor: "yellow.main", color: "gray.dark", borderRadius: "20px", fontSize: "10px", px: "10px", py: "8px" }}>۱۶۷ پرسش</Typography>
                    </Grid>
                </Grid>
            </Box>



            {/* row 3 */}

            <Box sx={{ display: "flex", justifyContent: "space-between", borderTop: "1px solid #F6F6F8", pt: "0.5rem" }} px={1}>
                <Box sx={{ display: "flex", alignItems: "center" }} gap={0.5}>
                    <Typography sx={{ backgroundColor: "gray.light", color: "gray.dark", borderRadius: "0px 20px 20px 0px", fontSize: "15px", fontWeight: "700", px: "10px", py: "5px" }}>۱۲ ماهه</Typography>
                    <Typography sx={{ backgroundColor: "gray.light", color: "gray.dark", borderRadius: "20px 0px 0px 20px", fontSize: "15px", fontWeight: "700", px: "10px", py: "5px" }}>۱۹۰,۰۰۰ هزارتومان</Typography>
                </Box>
                <Button
                    sx={{
                        background:
                            "linear-gradient(79.97deg, #390A4D -12.66%, #9B70AA 90.25%)",
                        color: "white",
                        borderRadius: "100px",
                        py: 0.3,
                        height: "2rem",
                        pr: "1rem",
                        transition: "transform 0.2s ease-in-out",
                        "&:hover": {
                            transform: "scale(1.05)",
                        },

                    }}
                >
                    خرید
                    <KeyboardArrowLeftIcon sx={{ fontSize: "20px" }} />
                </Button>

            </Box>
        </Box>
    )
}

export default QuestionPack;