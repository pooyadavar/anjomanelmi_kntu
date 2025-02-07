import { Box, Button, Container, Grid, Typography } from "@mui/material";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import assets from "../assets";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import LandingKhadamatCard from "../cards/LandingKhadamatCard";
import styled from "styled-components";
import Accordion, {
  AccordionSlots,
  accordionClasses,
} from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails, {
  accordionDetailsClasses,
} from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Fade from "@mui/material/Fade";
import { BarLoader } from "react-spinners";
import Footer from "../components/footer/Footer";
export default function Home() {
  const [activeItem, setActiveItem] = useState("school");
  const handleActiveItem = (item: any) => {
    setActiveItem(item);
  };

  const [expanded, setExpanded] = React.useState(true);

  const handleExpansion = () => {
    setExpanded((prevExpanded) => !prevExpanded);
  };

  const StyledGridItem = styled(Grid)({
    transition: "transform 0.3s ease",
    "&:hover": {
      transform: "scale(1.025)",
    },
  });

  const leftColumnItems = [
    {
      text: "امکان تحلیل و رصد وضعیت تحصیلی دانش‌آموزان",
      icon: assets.svg.iconItem1,
    },
    {
      text: "امکان ارتباط دانش‌آموز با مشاور و مراقب حین آزمون",
      icon: assets.svg.iconItem2,
    },
    {
      text: "دسترسی به انبوهی از پرسش‌های درجه‌بندی‌شده برای ساخت آزمون",
      icon: assets.svg.iconItem3,
    },
    {
      text: "تنظیم جزئیات مختلف آزمون مانند شرکت‌کنندگان، محتوا و کارنامه",
      icon: assets.svg.iconItem4,
    },
    {
      text: "امکان ساخت پرسش به‌صورت سفارشی",
      icon: assets.svg.iconItem5,
    },
    {
      text: "امکان اتصال آزمون با IP به سایت سایر مدارس",
      icon: assets.svg.iconItem6,
    },
  ];

  const rightColumnItems = [
    {
      text: "امنیت و حریم خصوصی قابل اعتماد",
      icon: assets.svg.iconItem7,
    },
    { text: "سادگی ساخت آزمون آنلاین", icon: assets.svg.iconItem8 },
    {
      text: "ساخت سفارشی انواع کارنامۀ جمعی، تحلیلی و مقایسه‌ای",
      icon: assets.svg.iconItem9,
    },
    {
      text: "تصحیح و نمره‌دهی خودکار آزمون‌ها",
      icon: assets.svg.iconItem10,
    },
    {
      text: "امکان برگزاری همزمان آزمون آنلاین و چاپی",
      icon: assets.svg.iconItem11,
    },
    {
      text: "تعیین تعداد دفترچه و تنظیمات محتوا برای هر دفترچه به‌صورت مجزا",
      icon: assets.svg.iconItem12,
    },
  ];

  const cardData = [
    {
      title: "تحلیل و رصد وضعیت دانش‌آموز",
      description:
        "بررسی وضعیت تحصیلی دانش‌آموز با سنجش آزمون‌ها و نتایج در قالب گزارش و نمودار",
      item1: "ابزارهای کنترل شاخص برای دریافت گزارش دقیق و جامع",
      item2: "امکان تحلیل جزئیات هر آزمون و ارائۀ پیشنهاد",
      item3: "نمایش نمودارهای مقایسه‌ای برای آزمون‌ها",
      item4: "دریافت کارنامه‌های مقایسه‌ای",
    },
    {
      title: "برگزاری آزمون هماهنگ کشوری",
      description:
        "برگزاری آزمون رسمی و آزمایشی به صورت حضوری و آنلاین از ابتدایی تا دوازدهم",
      item1: "طراحی سؤالات توسط اساتید برتر کشور",
      item2: "برگزاری آزمون با سربرگ خود مدرسه",
      item3: "گزارش‌های متنوع در جامعۀ آماری",
      item4: "آزمون جمع‌بندی مطالب درسی",
    },
    {
      title: "آزمون‌ساز چاپی و آنلاین",
      description: "برگزاری آزمون‌های آنلاین و چاپی با سیستم ضدتقلب",
      item1: "تنوع در شیوۀ برگزاری آزمون",
      item2: "امکان ارسال پیامک و ایمیل به شرکت‌کنندگان",
      item3: "گزارش‌های جامع و تحلیلی از نتایج آزمون",
      item4: "حذف امکان نشتی و تقلب در برگزاری آزمون",
    },
    {
      title: "پرسش‌خانه (بانک سؤالات)",
      description: "بیش از ۶۰۰هزار سؤال تستی با منابع استاندارد",
      item1: "فیلترهای متنوع برای ساخت یک آزمون باکیفیت",
      item2: "کسب درآمد برای مشاوران با طرح سؤالات متنوع",
      item3: "استفاده از تجربیات دیگر استادان در بهره‌بردن از پرسش‌ها",
      item4: "شخصی‌سازی دفترچۀ سؤالات",
    },
  ];

  const stepsData = [
    {
      title: "ساخت آزمون",
      icon: assets.svg.Landingtahlil,
      details: [
        "افزودن دانش‌آموزان آزمون",
        "تعیین نوع آزمون (حضوری/آنلاین/ترکیبی)",
        "تنظیم تعداد دفترچه و جزئیات",
        "تنظیمات زمان و مدت آزمون",
        "تنظیمات شکل نمایش آزمون",
      ],
      iconStyle: { bottom: "2rem", left: "6.5rem" },
      position: "6rem",
    },
    {
      title: "تحلیل دانش‌آموز",
      icon: assets.svg.LandingKarname,
      details: [
        "نمایش نمودار وضعیت پیشرفت دانش‌آموز در آزمون‌ها در بازه‌های زمانی قابل‌تنظیم",
      ],
      iconStyle: { bottom: "2.3rem", left: "6.4rem" },
      position: "8rem",
    },
    {
      title: "دریافت کارنامه",
      icon: assets.svg.Landingbargozari,
      details: [
        "امکان دریافت کارنامۀ جمعی",
        "امکان دریافت کارنامۀ مقایسه‌ای با میانگین آزمون",
        "دریافت نسخه چاپی از کارنامه",
        "دریافت کارنامۀ جزئی از هر آزمون با نمایش وضعیت هر سؤال و پاسخ‌های درست و غلط",
      ],
      iconStyle: { bottom: "2.4rem", left: "6rem" },
      position: "5rem",
    },
    {
      title: "برگزاری آزمون",
      icon: assets.svg.LandingSakht,
      details: [
        "امکان شرکت در آزمون با موبایل، تبلت و دسکتاپ",
        "پشتیبانی آنلاین حین آزمون (امکان چت)",
        "خرید دسته‌پرسش جدید",
        "تنظیمات جلوگیری از تقلب",
        "دریافت IP برای برگزاری آزمون در سایت‌های مختلف مدارس",
      ],
      iconStyle: { bottom: "2.1rem", left: "6.5rem" },
      position: "1.5rem",
    },
    {
      title: "شروع",
      icon: assets.svg.LandingStart,
      details: [
        "ورود به تستامینوفن",
        "افزودن سؤالات شخصی",
        "خرید دسته‌پرسش جدید",
        "سفارشی‌سازی پرسش‌های پرسش‌خانه",
      ],
      iconStyle: { bottom: "2rem", left: "6.6rem" },
      position: "0rem",
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
                  width: { md: "55%", sm: "100%", xs: "100%", lg: "45%" },
                }}
              >
                <Box
                  component="img"
                  src={assets.svg.navBarIcon1}
                  alt="navBarIcon1"
                  sx={{
                    display: {
                      xs: "none",
                      sm: "none",
                      md: "block",
                      lg: "block",
                    },
                  }}
                />{" "}
                <Box mb={1}>
                  <Typography
                    sx={{
                      fontSize: "30px",
                      mb: "10px",
                      fontWeight: "500",
                      color: "gray.dark",
                    }}
                  >
                    برگزاری آزمون برات دردسره؟
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
                      تستامینوفن
                    </span>{" "}
                    بگیر!
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
                  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و
                  با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و
                  مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی
                  تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای
                  کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و
                  آینده، شناخت فراوان جامعه و متخصصان را می طلبد
                </Typography>
                <Box gap={3} mt={"1rem"}>
                  <Button
                    sx={{
                      color: "pink.main",
                      fontWeight: "600",
                      fontSize: "15px",
                      backgroundColor: "gray.light",
                      borderRadius: "30px",
                      px: { md: "8px", lg: "8px", sm: "25px", xs: "25px" },
                      border: "3px solid #BF8BD5",
                    }}
                  >
                    <img
                      src={assets.img.vector}
                      alt="vectorimg"
                      style={{ paddingLeft: "5px", scale: "0.9" }}
                    />
                    معرفی تستامینوفن
                  </Button>
                  <Button
                    sx={{
                      color: "pink.light",
                      fontWeight: "600",
                      fontSize: "15px",
                      background: "linear-gradient(to right, #390A4D, #9B70AA)",
                      borderRadius: "30px",
                      px: { md: "10px", lg: "10px", sm: "25px", xs: "25px" },
                      border: "3px solid #390A4D",
                      mr: "0.7rem",
                    }}
                    component={Link}
                    to={"/auth"}
                  >
                    رایگان امتحان کن
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
                منعطف، ساده و امن
              </span>{" "}
              برگزارش کن!
            </Typography>

            <Typography
              sx={{ color: "gray.main", fontSize: "14px", mt: "5px" }}
            >
              با این فیچرها آزمون‌های‌تان را فقط آنلاین برگزار کنید.
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

            {/* Right Column */}
            <Box
              sx={{ width: { md: "45%", lg: "45%", sm: "100%", xs: "100%" } }}
            >
              {rightColumnItems.map((item, index) => (
                <Typography
                  key={index}
                  sx={{
                    fontSize: "14px",
                    mt: "5px",
                  }}
                >
                  <img
                    src={item.icon}
                    alt={`iconItem${index + 7}`}
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
          mb:"3rem",
          mt:"3rem"
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
                  مزیت‌های استفاده از {"  "}
                  <span
                    style={{
                      fontSize: "36px",
                      fontWeight: "800",
                      color: "#BF8BD5",
                    }}
                  >
                    تستامینوفن
                  </span>
                </Typography>
                <Typography>
                  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و
                  با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و
                  مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی
                  تکنولوژی مورد نیاز.
                </Typography>
              </Box>
              <Box
                sx={{
                  flexWrap: "wrap",
                  display: "flex",
                  justifyContent: "space-between",
                  textAlign: "center",
                  gap: { md: "unset", lg: "unset", sm: "1rem", xs: "1rem" },
                }}
              >
                <Box
                  sx={{
                    width: { md: "34%", lg: "34%", sm: "100%", xs: "100%" },
                  }}
                >
                  <img src={assets.svg.landingperson1} alt="landingperson1" />
                  <Box
                    sx={{
                      width: { md: "70%", lg: "70%", sm: "100%", xs: "100%" },
                    }}
                  >
                    <Typography>
                      <span
                        style={{
                          fontSize: "20px",
                          fontWeight: "900",
                          color: "#EE6A36",
                        }}
                      >
                        ۲۵,۵۴۵,۰۹۰{" "}
                      </span>
                      نفرآزمون
                    </Typography>
                    <Typography sx={{ fontSize: "12px", color: "gray.dark" }}>
                      به خاطر دسترسی راحت و باکیفیت به آزمون و سؤالات باکیفیت
                    </Typography>
                  </Box>
                </Box>
                <Box
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
                </Box>
                <Box
                  sx={{
                    width: { md: "29%", lg: "29%", sm: "100%", xs: "100%" },
                  }}
                >
                  <img src={assets.svg.landingperson3} alt="landingperson3" />
                  <Box
                    sx={{
                      width: { md: "90%", lg: "90%", sm: "100%", xs: "100%" },
                    }}
                  >
                    <Box sx={{ display: "flex", justifyContent: "center" }}>
                      <Typography>
                        <span
                          style={{
                            fontSize: "20px",
                            fontWeight: "900",
                            color: "#EE6A36",
                          }}
                        >
                          ۷۵,۵۶۳
                        </span>
                        دبیر
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
                          ۲۸,۳۰۰{" "}
                        </span>
                        مشاور
                      </Typography>
                    </Box>
                    <Typography sx={{ fontSize: "12px", color: "gray.dark" }}>
                      به خاطر تحلیل و رصد وضعیت دانش‌آموزان
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
