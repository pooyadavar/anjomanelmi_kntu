import {
  Box,
  Container,
  Grid,
  TextField,
  Typography,
  Button,
  Modal,
  Fade,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import assets from "../assets";
import QuestionPackLazy from "../cards/QuestionPackLazy";

export default function Question() {
  const [inputValue, setInputValue] = useState("");
  const [open, setOpen] = useState(false);
  const [openFailed, setOpenFailed] = useState(false);

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleCheckNumber = () => {
    if (inputValue === "6842") {
      setOpen(true);
    } else {
      setOpenFailed(true);
    }
  };
  return (
    <>
      <Container maxWidth={false}>
        <Grid
          container
          sx={{ display: "flex", justifyContent: "center", py: "2rem" }}
        >
          <Grid item xs={12} md={9.5}>
            {/* <ShowQuestionPack /> */}
            <Grid
              container
              spacing={7}
              sx={{ pt: 3, justifyContent: "center" }}
            >
              <Grid item xs={12} sm={10} md={3}>
                <>
                  <QuestionPackLazy
                    header_image={assets.img.questionPack}
                    subject={"سوال مشترک (هوش)"}
                  />
                </>
              </Grid>
              <Grid item xs={12} md={9}>
                <Typography lineHeight={1.8} pb={3}>
                  <b> گزیده‌ای از دفتر خاطرات طراح سایت!</b>
                  <br />
                  <br /> ...ترم یک من از تاریخ ۱۱ مهر شروع می‌شه. راستش برای
                  ورود به دانشگاه خیلی ذوق دارم. از شهر ما معمولا دانشجوی زیادی
                  دانشگاه دولتی اونم تو تهران قبول نمی‌شه. شدم افتخار خانواده.
                  وقتی که می‌خواستم بیام سمت تهران، مامانم از زیر قرآن ردم کرد و
                  بعد یه خداحافظی طولانی و احساسی بالاخره گذاشت که سوار اتوبوس
                  پایانه شم. بعد طی کردن یه مسافرت ۶ ساعته، بالاخره به تهران
                  رسیدم. هیچ ایده ای از دانشگاه ندارم، تقریبا برام مثل یه
                  معماست! منم که عاشق معما هستم...
                  <br />
                  <br />
                  ...چهار ماهه که اومدم دانشگاه و همه چی عین برق و باد گذشته.
                  خداروشکر من و ۲ نفر دیگه از بچه های اتاقمون رنک شدیم. وقتی
                  برای مامان و بابا تعریف کردم، ۲ ساعت قربون صدقم رفتن.
                  خوشحالیشون واقعا خوشحالم می‌کنه. انتخاب واحد ترم دوم افتاده
                  ساعت ۱۲. میترسم دیفرانسیل با استاد خوبه بهم نرسه. اگه نرسه
                  ممکنه خیلی مشکلات پیش بیاد. سال بالایی‌هامون میگن که نگران
                  نباش، بهت می‌رسه ولی هنوزم مضطربم. امیدوارم همه چی خوب پیش
                  بره...
                  <br />
                  <br />
                  ...ترم سه به خوبی ترمای قبل پیش‌نرفت. نمره ۱۳ الک‌مغ باعث شد
                  معدلم یه کم بیاد پایین. البته اینم باید بگم که الکترونیک رو
                  وسط ترم حذف کردم. با اینکه شاید می‌تونستم از این درس هم نمره
                  ۱۴ یا ۱۵ بگیرم. ولی خب عیب نداره. من معتقدم هیچ اتفاقی بدون
                  دلیل نیست. شاید به خودم مغرور شده بودم. ترم بعد جبران
                  می‌کنم....
                  <br />
                  <br />
                  ...بعد گذشت این یه سال و نیم، دوست داشتم یه کم فعالیت‌های
                  دانشجوییم رو بیشتر کنم. با توجه به اینکه قبلا موسیقی کار کرده
                  بودم، سمت کانون موسیقی رفتم. دبیر کانون موسیقی TA درس سیگنالم
                  بود این موضوع باعث رفاقت صمیمی‌تر ما‌ شد. هفته‌ای سه روز ساعت
                  ۱۳:۰۰ می‌رفتم دفتر کانون و تمرین می‌کردم. به هرحال تفریح خوبی
                  بود. یکی از کارهای جالبی که تو ترم چهار انجام‌ دادم، این بود
                  که خودم هم تی‌ای درس مدار ۱ شدم. به خاطر نمره ۲۰ این درسم و
                  معدل خوبم خیلی راحت استاد منو قبول کرد...
                </Typography>

                <img
                  src={assets.img.sameQuestion}
                  alt="sameQuestion"
                  width={"100%"}
                />

                <Box
                  sx={{
                    display: "flex",
                    borderBottom: "0.5px solid #696960",
                    pb: "2rem",
                  }}
                  pt={"2rem"}
                >
                  <Typography ml={1} fontWeight={900}>
                    برای دریافت کتاب کلیک کنید :
                  </Typography>
                  <a
                    href="https://drive.google.com/file/d/1an6yQ-KWM4JN4zluUumHK-gfArfcjoQ_/view?usp=sharing"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    دانلود کتاب
                  </a>
                </Box>
                {/* Input and Button for Modal */}
                <Box>
                  <Typography sx={{ fontSize: "15px", pt: "2rem" }}>
                    بخش آپلود پاسخ:
                  </Typography>
                  <Typography sx={{ fontSize: "12px"}}>
                    (زبان کیبورد باید انگلیسی باشد)
                  </Typography>
                </Box>

                <Box sx={{ pt: "1rem", direction: "rtl" }}>
                  <TextField
                    label="جواب خود را وارد کنید"
                    variant="outlined"
                    value={inputValue}
                    onChange={handleInputChange}
                    sx={{ width: "50%", height: "3rem" }}
                  />
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={handleCheckNumber}
                    sx={{ ml: 2, mr: "5px", height: "3.45rem" }}
                  >
                    بررسی
                  </Button>
                </Box>
              </Grid>

              <Modal
                open={open}
                onClose={() => setOpen(false)}
                closeAfterTransition
              >
                <Fade in={open}>
                  <Box
                    sx={{
                      position: "absolute",
                      top: "50%",
                      left: "50%",
                      transform: "translate(-50%, -50%)",
                      width: 350,
                      bgcolor: "background.paper",
                      p: 4,
                      borderRadius: 4,
                      boxShadow: 24,
                    }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                        mb: "1rem",
                      }}
                    >
                      <img src={assets.svg.tikeSvg} alt="tikeSvg" />
                    </Box>
                    <Typography
                      variant="h6"
                      textAlign="center"
                      fontWeight={900}
                      sx={{ color: "#696960", pb: "1rem" }}
                    >
                      تبریک ! شما موفق شدید.
                    </Typography>
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                        pt: "0.7rem",
                        borderTop: "0.3px solid #696955",
                      }}
                    >
                      <Typography>رمز سوالات : </Typography>
                      <Typography>NewASAD</Typography>
                    </Box>
                    <Box sx={{ display: "flex", justifyContent: "center" }}>
                      <a
                        href="https://quera.org/contest/assignments/80887/problems"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        ورود به Quera
                      </a>
                    </Box>
                  </Box>
                </Fade>
              </Modal>

              <Modal
                open={openFailed}
                onClose={() => setOpenFailed(false)}
                closeAfterTransition
              >
                <Fade in={openFailed}>
                  <Box
                    sx={{
                      position: "absolute",
                      top: "50%",
                      left: "50%",
                      transform: "translate(-50%, -50%)",
                      width: 350,
                      bgcolor: "background.paper",
                      p: 4,
                      borderRadius: 4,
                      boxShadow: 24,
                    }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                        mb: "1rem",
                      }}
                    ></Box>
                    <Typography
                      variant="h6"
                      textAlign="center"
                      fontWeight={900}
                      sx={{ color: "#696960", pb: "1rem" }}
                    >
                      جواب درست نبود . دوباره امتحان کن!
                    </Typography>
                    <Box sx={{display:"flex" , justifyContent:"center"}}>
                    <Button
                      variant="contained"
                      color="primary"
                      onClick={() => setOpenFailed(false)}
                      sx={{ ml: 2, mr: "5px"}}
                    >
                      بستن
                    </Button>

                    </Box>

                  </Box>
                </Fade>
              </Modal>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
