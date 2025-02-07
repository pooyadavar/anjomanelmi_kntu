import styled from "styled-components";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import { Box, Typography } from "@mui/material";
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import { changeDifficultyVal } from "../shared/changeDifficultyVal";

export const Accordion = styled(({ chapter, grade, lesson, author, difficulty, ...props }: any) => (
    <>
        <Box
            sx={{
                backgroundColor: "#fff",
                borderTopRightRadius: "20px",
                borderTopLeftRadius: "20px",
                display: "flex",
                justifyContent: "space-between",
                borderBottom: "1px solid rgba(240, 240, 240, 1)",
            }}
        >
            <Box
                sx={{
                    backgroundColor: "rgba(246, 246, 248, 1)",
                    px: 2,
                    borderRadius: "10px",
                    color: "rgba(105, 105, 105, 1)",
                    mr: 2,
                    mt: 1,
                    mb: 1,
                    fontWeight: 300,
                    fontSize: "12px",
                    py: 0.5,
                }}
            >
                {grade}
                <KeyboardArrowLeftIcon sx={{ fontSize: "14px", mb: "-5px" }} />
                <span style={{ fontWeight: 300 }}>{lesson}</span>
                <KeyboardArrowLeftIcon sx={{ fontSize: "14px", mb: "-5px" }} />
                <span style={{ fontWeight: 600 }}>{chapter}</span>

            </Box>
            <Box sx={{ display: "flex" }}>
                <Box
                    sx={{

                        backgroundColor: "rgba(253, 255, 170, 1)",
                        ml: 1,
                        mt: 1,
                        mb: 1,
                        px: 2,
                        borderRadius: "10px",
                        fontWeight: 200,
                        fontSize: "12px",
                        py: 0.5,
                    }}
                >
                    {/* {author} */}
                    <Typography sx={{fontSize:"12px" , color:"gray.main" , }}>{author}</Typography>
                </Box>
                <Box
                    sx={{
                        backgroundColor: "rgba(253, 255, 170, 1)",
                        ml: 2,
                        mt: 1,
                        mb: 1,
                        px: 1,
                        borderRadius: "10px",
                        fontWeight: 200,
                        fontSize: "12px",
                        py: 0.4,
                    }}
                >
                    {changeDifficultyVal(difficulty)}
                </Box>
            </Box>
        </Box>
        <MuiAccordion disableGutters elevation={0} square {...props} />
    </>
))(({ theme }) => ({
    "&::before": {
        display: "none",
    },
    borderRadius: "20px",
}));


export const AccordionSummary = styled((props: React.ComponentProps<typeof MuiAccordionSummary>) => (
    <MuiAccordionSummary
        expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: "0.9rem" }} />}
        {...props}
    />
))(({ theme }) => ({
    backgroundColor: "#fff",
    flexDirection: "row",
    "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
        transform: "rotate(90deg)",
    },
    "& .MuiAccordionSummary-content": {
        marginLeft: "2rem",
    },
    borderBottomRightRadius: "20px",
    borderBottomLeftRadius: "20px",
}));

export const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
    padding: "2rem",
}));
