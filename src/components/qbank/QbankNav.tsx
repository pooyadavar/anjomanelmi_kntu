import React, { useState } from "react";
import { Box, Fade, Grid, Modal, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import SelectType from "./modals/SelectType";

const QbankNav: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"پرسش‌های من" | "آزمون">(
    "پرسش‌های من"
  );
  const [openModal, setOpenModal] = useState(false);

  const handleTabClick = (tab: "پرسش‌های من" | "آزمون") => {
    setActiveTab(tab);
  };

  const handleOpenModal = () => {
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };
  return (
    <>
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Box
          sx={{
            paddingX: 14,
            width: "60%",
            backgroundColor: "#F5E8FA",
            borderBottomLeftRadius: "20px",
            borderBottomRightRadius: "20px",
            py: "3px",
          }}
        >
          <Grid container>
            <Grid
              item
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Box sx={{ paddingTop: 1.5 }}>
                <Typography
                  component={Link}
                  to="/qbank"
                  onClick={() => handleTabClick("پرسش‌های من")}
                  sx={{
                    color: "#390A4D",
                    textDecoration: "none",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    fontWeight: activeTab === "پرسش‌های من" ? 800 : "normal",
                    borderBottom:
                      activeTab === "پرسش‌های من"
                        ? "4px solid #390A4D"
                        : "none",
                    pb: activeTab === "پرسش‌های من" ? "7px" : "0",
                  }}
                >
                  پرسش‌های من
                </Typography>
              </Box>
              <Box sx={{ paddingTop: 1.5, mr: 4 }}>
                <Typography
                  onClick={() => handleTabClick("آزمون")}
                  sx={{
                    color: "#390A4D",
                    textDecoration: "none",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    fontWeight: activeTab === "آزمون" ? 800 : "normal",
                    borderBottom:
                      activeTab === "آزمون" ? "4px solid #390A4D" : "none",
                    pb: activeTab === "آزمون" ? "7px" : "0",
                    cursor: "pointer",
                  }}
                >
                  آزمون
                </Typography>
              </Box>
            </Grid>
            <Grid item flexGrow={1}></Grid>
            <Grid
              item
              onClick={handleOpenModal}
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Box
                sx={{
                  background:
                    "linear-gradient(79.97deg, #390A4D -12.66%, #9B70AA 90.25%)",
                  borderRadius: "40px",
                  fontSize: "16px",
                  fontFamily: "IRANSansX",
                  paddingX: 3,
                  paddingY: 0.75,
                  color: "#fff",
                  border: "2px solid #390A4D",
                  mr: 2,
                  fontWeight: 700,
                  cursor: "pointer",
                }}
              >
                افزودن پرسش
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Box>

      {/* Modal for SelectType */}

      <Modal
        open={openModal}
        onClose={handleCloseModal}
        aria-labelledby="select-type-modal"
        aria-describedby="select-question-type"
        closeAfterTransition
      >
        <Fade in={openModal}>
          <Box>
            <SelectType />
          </Box>
        </Fade>
      </Modal>
    </>
  );
};

export default QbankNav;
