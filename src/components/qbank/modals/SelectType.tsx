import { Box, Fade, Grid, Modal, Typography } from "@mui/material";
import { useState } from "react";
import QuestionForm from "./MakeTest";
import assets from "../../../assets";

const SelectType: React.FC = () => {
    const [openModal, setOpenModal] = useState(false);

    const handleOpenModal = () => {
        setOpenModal(true);
    };

    const handleCloseModal = () => {
        setOpenModal(false);
    };

    return (
        <>
            <Box
                sx={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    width: { md: "30%", xs: "80%" },
                    bgcolor: "background.paper",
                    p: 4,
                    height: "38%",
                    display: "block",
                    borderRadius: "20px",
                    overflow: "none",
                    outline: "none",
                    boxShadow: "0px 12px 0px 0px rgba(0,0,0,0.4)",

                }}
            >
                <Box
                    sx={{
                        display: "flex",
                        justifyContent: "center",
                        width: "100%",
                        alignItems: "center",
                        flexDirection: "column",
                    }}
                >
                    <Typography variant="h5" sx={{ fontWeight: 700 }}>
                        چه نوع سؤالی می‌سازید؟
                    </Typography>
                    <Grid
                        container
                        sx={{ mt: 3, display: "flex", justifyContent: "space-evenly" }}
                    >
                        <Grid
                            item
                            xs={5}
                            onClick={handleOpenModal}
                            sx={{
                                backgroundColor: "#F5E8FA",
                                aspectRatio: "1/1",
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                borderRadius: "20px",
                                boxShadow: "0px 4px 0px 0px #D9D9D9",
                                flexDirection: "column",
                                cursor: "pointer",
                            }}
                        >
                            <img src={assets.svg.testiBoard} alt="testiBoard" />
                            <Typography
                                sx={{
                                    mt: 2,
                                    fontSize: "18px",
                                    fontWeight: 700,
                                    marginBottom: "10px",
                                }}
                            >
                                تستی
                            </Typography >
                        </Grid>
                        <Grid
                            item
                            xs={5}
                            sx={{
                                backgroundColor: "#F5E8FA",
                                aspectRatio: "1/1",
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                borderRadius: "20px",
                                boxShadow: "0px 4px 0px 0px #D9D9D9",
                                flexDirection: "column",
                                cursor: "not-allowed",
                                opacity: "0.6",
                            }}
                        >
                            <img src={assets.svg.tashrihiBoard} alt="tashrihiBoard" />
                            <Typography sx={{ mt: 2, fontSize: "18px", fontWeight: 700 }}>
                                تشریحی
                            </Typography>
                        </Grid>
                    </Grid>
                </Box>
            </Box>


            {/* Modal for SelectType */}

            <Modal
                open={openModal}
                onClose={handleCloseModal}
                closeAfterTransition
                aria-labelledby="select-type-modal"
                aria-describedby="select-question-type"
            >
                <Fade in={openModal}>
                    <Box>
                        <QuestionForm handleClose={handleCloseModal} />
                    </Box>
                </Fade>
            </Modal>
        </>

    )
}
export default SelectType;