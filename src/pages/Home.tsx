import { Box, Button, Container, Grid, Typography } from "@mui/material";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import assets from "../assets";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import styled from "styled-components";
export default function Home() {
  const [activeItem, setActiveItem] = useState("school");
  const handleActiveItem = (item: any) => {
    setActiveItem(item);
  };

  const [expanded, setExpanded] = React.useState(true);

  const StyledGridItem = styled(Grid)({
    transition: "transform 0.3s ease",
    "&:hover": {
      transform: "scale(1.025)",
    },
  });

  const leftColumnItems = [
    {
      text: "استفاده از مدل های زبانی برای حل سوالات ممنوع است.",
      icon: assets.svg.iconItem1,
    },
    {
      text: "تیم برنده بعد از محاسبه تمامی امتیاز ها(بخش کامپیوتری و برقی)مشخص میشود",
      icon: assets.svg.iconItem2,
    },
    {
      text: "در صورت تقلب تیم از ادامه مسابقه منع میشود",
      icon: assets.svg.iconItem3,
    },
    {
      text: "تیم ها میتوانند از چند لپ تاپ استفاده کنند اما استفاده از تلفن همراه ممنوع است و در صورت استفاده تیم از ادامه مسابقه منع میشود.",
      icon: assets.svg.iconItem4,
    },
  ];

  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          width: { md: "70%", lg: "70%", sm: "100%", xs: "100%" },
          margin: "0px auto",
        }}
      >
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <Box
            sx={{
              width: "90%",

              backgroundColor: "pink.light",
              borderBottomLeftRadius: "5rem",
              borderBottomRightRadius: "5rem",
              pr: "3rem",
              pt: "2rem",
            }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-around",
                flexWrap: "wrap",
                alignContent: { xs: "center", lg: "right" },
              }}
            >
              <Box
                sx={{
                  width: { md: "55%", sm: "100%", xs: "100%", lg: "50%" },
                }}
              >
                <Box mb={1}>
                  <Typography
                    sx={{
                      fontSize: "30px",
                      mb: "10px",
                      fontWeight: "500",
                      color: "gray.dark",
                    }}
                  >
                    یک مسابقه هیجان انگیز !
                  </Typography>
                  <Typography
                    sx={{
                      backgroundColor: "yellow.main",
                      display: "inline-block",
                      px: "1rem",
                      fontSize: "30px",
                    }}
                  >
                    <span
                      style={{
                        fontSize: "40px",
                        fontWeight: "900",
                        color: "#BF8BD5",
                      }}
                    >
                      الکتروکد
                    </span>{" "}
                  </Typography>
                </Box>
                <Typography
                  sx={{
                    ml: "1rem",
                    color: "gray.dark",
                    display: {
                      xs: "none",
                      sm: "none",
                      lg: "block",
                      md: "block",
                    },
                  }}
                >
                  <Typography
                    sx={{
                      ml: "1rem",
                      color: "gray.dark",
                      display: {
                        xs: "none",
                        sm: "none",
                        lg: "block",
                        md: "block",
                      },
                    }}
                  >
                    مسابقه الکتروکد در جهت مشارکت و افزایش همکاری میان دانشجویان
                    مهندسی برق و مهندسی کامپیوتر شکل گرفته است و مدت زمان مسابقه
                    از لحظه شروع ۳ ساعت می‌باشد. مسابقه متشکل از دو مرحله به شرح
                    زیر است:
                    <br />
                    <br />
                    <b>مرحله اول</b> شامل سوالی خارج از حیطه تخصصی رشته‌ها
                    می‌باشد و در جهت یافتن رمز برای مرحله دوم است.
                    <br />
                    <Box mt={2} mb={1}>
                      <b>مرحله دوم</b> شامل دو بخش سوالات تخصصی کامپیوتر و
                      سوالات تخصصی مهندسی برق است.
                    </Box>
                    تیم ها در صورتی موفق به راه یابی به مرحله دوم میشوند که سوال
                    بخش اول را حل کنند و رمز سوالات بخش تخصصی را پیدا کنند.
                  </Typography>
                </Typography>
                <Box gap={3} mt={"1rem"}>
                  <Button
                    sx={{
                      color: "pink.light",
                      fontWeight: "900",
                      fontSize: "15px",
                      background: "linear-gradient(to right, #390A4D, #9B70AA)",
                      borderRadius: "30px",
                      px: { md: "10px", lg: "10px", sm: "25px", xs: "25px" },
                      border: "3px solid #390A4D",
                      mr: "0.5rem",
                      mb: "2rem",
                    }}
                    component={Link}
                    to={"/question"}
                  >
                    بزن بریم
                    <ChevronLeftIcon sx={{ scale: "0.8" }} />
                  </Button>
                </Box>
              </Box>

              <Box
                sx={{
                  width: { md: "55%", sm: "100%", xs: "100%", lg: "45%" },
                  textAlign: "center",
                }}
              >
                <Box
                  component="img"
                  src={assets.svg.examAnjoman}
                  alt="mainLandingSvg"
                  sx={{
                    scale: { md: "0.9", lg: "0.9", sm: "0.8", xs: "0.8" },
                  }}
                />
              </Box>
            </Box>
          </Box>
        </Box>
        <Box
          sx={{
            flexWrap: "wrap",
            mt: "3rem",
            width: "100%",
            display: "flex",
            justifyContent: "space-around",
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              flexDirection: "column",
            }}
          >
            <Typography
              sx={{
                backgroundColor: "yellow.main",
                display: "inline-block",
                px: "1rem",
                fontSize: "22px",
              }}
            >
              <span
                style={{
                  fontSize: "32px",
                  fontWeight: "800",
                  color: "#BF8BD5",
                }}
              >
                قوانین
              </span>{" "}
              مسابقه چیست؟
            </Typography>

            <Typography
              sx={{ color: "gray.main", fontSize: "14px", mt: "5px" }}
            >
              با اجرای این قوانین، مسابقه‌ای منصفانه و هیجان‌انگیز برگزار خواهد
              شد.
            </Typography>
          </Box>

          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              mt: "2rem",
              flexWrap: "wrap",
              width: "90%",
            }}
          >
            {/* Left Column */}
            <Box
              sx={{ width: { md: "55%", lg: "55%", sm: "100%", xs: "100%" } }}
            >
              {leftColumnItems.map((item, index) => (
                <Typography
                  key={index}
                  sx={{
                    fontSize: "14px",
                    mt: "5px",
                    mb: "1.2rem",
                  }}
                >
                  <img
                    src={item.icon}
                    alt={`iconItem${index + 1}`}
                    style={{ marginLeft: "5px", marginBottom: "-7px" }}
                  />
                  {item.text}
                </Typography>
              ))}
            </Box>
          </Box>
        </Box>
      </Box>

      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          width: "100%",
          margin: "0px auto",
          mb: "3rem",
          mt: "3rem",
        }}
      >
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <Box
            sx={{
              width: { md: "80%", lg: "80%", sm: "90%", xs: "90%" },
              display: "flex",
              justifyContent: "center",
              backgroundColor: "yellow.main",
              py: "4rem",
              borderRadius: "60px",
              boxShadow: "0px 9px 0px 0px rgba(217, 217, 217, 1)",
              mt: { md: "unset", lg: "unset", sm: "3rem", xs: "3rem" },
            }}
          >
            <Box width={"80%"}>
              <Box
                sx={{ alignItems: "center", textAlign: "center", mb: "2rem" }}
              >
                <Typography
                  sx={{
                    backgroundColor: "yellow.main",
                    display: "inline-block",
                    px: "1rem",
                    fontSize: "30px",
                    mb: "1rem",
                  }}
                >
                  برگزار کنندگان{" "}
                  <span
                    style={{
                      fontSize: "36px",
                      fontWeight: "800",
                      color: "#BF8BD5",
                    }}
                  >
                    الکتروکد{" "}
                  </span>
                </Typography>
                <Typography>
                  از انجمن علمی مهندسی کامپیوتر و برق به‌عنوان میزبان مسابقه، و
                  همچنین از مهندس بهنام نویدی و مهندس علی کدخدازاده به‌عنوان
                  طراحان سوالات برق، و مهندس محمد عذیری، منتور بخش ACM دانشگاه و
                  طراح سوالات کامپیوتر، صمیمانه قدردانی می‌کنیم.
                </Typography>
              </Box>
              <Box
                sx={{
                  flexWrap: "wrap",
                  display: "flex",
                  justifyContent: "space-around",
                  textAlign: "center",
                  gap: { md: "unset", lg: "unset", sm: "1rem", xs: "1rem" },
                }}
              >
                <Box
                  sx={{
                    width: { md: "34%", lg: "34%", sm: "100%", xs: "100%" },
                  }}
                >
                  <img
                    src={assets.img.anjomanBargh}
                    alt="landingperson1"
                    style={{ width: "255px" }}
                  />
                </Box>
                {/* <Box
                  sx={{
                    width: { md: "37%", lg: "37%", sm: "100%", xs: "100%" },
                  }}
                >
                  <img src={assets.svg.landingperson2} alt="landingperson2" />
                  <Box
                    sx={{
                      width: { md: "70%", lg: "70%", sm: "100%", xs: "100%" },
                    }}
                  >
                    <Box sx={{ display: "flex", justifyContent: "center" }}>
                      <Typography sx={{ textAlign: "center" }}>
                        <span
                          style={{
                            fontSize: "20px",
                            fontWeight: "900",
                            color: "#EE6A36",
                          }}
                        >
                          ۵,۵۴۳{" "}
                        </span>
                        مدرسه در
                      </Typography>
                      <Typography>
                        <span
                          style={{
                            fontSize: "20px",
                            fontWeight: "900",
                            color: "#EE6A36",
                          }}
                        >
                          {" "}
                          ۲۸۳{" "}
                        </span>
                        شهر
                      </Typography>
                    </Box>

                    <Typography sx={{ fontSize: "12px", color: "gray.dark" }}>
                      به خاطر سادگی و کیفیت ساخت و برگزاری آزمون آنلاین{" "}
                    </Typography>
                  </Box>
                </Box> */}
                <Box
                  sx={{
                    width: { md: "29%", lg: "29%", sm: "100%", xs: "100%" },
                  }}
                >
                  <img
                    src={assets.img.anjomanComp}
                    alt="landingperson3"
                    style={{ width: "180px" }}
                  />
                  <Box
                    sx={{
                      width: { md: "90%", lg: "90%", sm: "100%", xs: "100%" },
                    }}
                  >
                    <Box sx={{ display: "flex", justifyContent: "center" }}>
                      <Typography>انجمن علمی مهندسی کامپیوتر</Typography>
                    </Box>
                    <Typography sx={{ fontSize: "14px", color: "gray.dark" }}>
                      دانشگاه خواجه نصیرالدین طوسی
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
}
