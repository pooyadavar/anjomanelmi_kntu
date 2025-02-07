import { Box, Button, Grid, Typography } from "@mui/material";
import assets from "../../assets";

function Footer() {
  return (
    <footer>
      <Box sx={{ backgroundColor: "pink.light", height: "5rem" }}></Box>
      <Box
        sx={{
          background: "linear-gradient(to right, #390A4D, #9B70AA)",
          minHeight: "10rem",
          pt: "1rem",
          pb: "2rem",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            width: "80%",
            margin: "0px auto",
          }}
        >
          <Box sx={{ flexWrap: "wrap", display:"flex" , justifyContent:"space-around"}}>
            <Box
              sx={{ width: { md: "40%", lg: "40%", sm: "42%", xs: "100%" }}}
            >
              <Box sx={{ display: "flex", mb: "15px" }}>
                <Typography
                  sx={{
                    mt: "15px",
                    ml: "10px",
                    fontWeight: "800",
                    color: "yellow.main",
                    fontSize: "20px",
                  }}
                >
                  کمی در بارۀ{" "}
                </Typography>
                <img src={assets.svg.landingtestalogo} alt="landingtestalogo" />
              </Box>
              <Typography sx={{ color: "gray.light", fontSize: "13px" }}>
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
                استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله
                در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد
                نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد،
                کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان
                جامعه و متخصصان را می طلبد
              </Typography>
            </Box>
            <Box
              sx={{ width: { md: "10%", lg: "10%", sm: "20%", xs: "100%" }}}
            >
              <Box>
                <Typography
                  sx={{
                    mt: "15px",
                    ml: "10px",
                    fontWeight: "800",
                    color: "yellow.main",
                    fontSize: "20px",
                    mb: "15px",
                  }}
                >
                  ارتباط با ما
                </Typography>
                <Typography sx={{ color: "gray.light", fontSize: "14px" }}>
                  در بارۀ ما
                </Typography>
                <Typography sx={{ color: "gray.light", fontSize: "14px" }}>
                  تماس با ما
                </Typography>
                <Typography sx={{ color: "gray.light", fontSize: "14px" }}>
                  فرصت‌های شغلی
                </Typography>
              </Box>
            </Box>
            <Box
              sx={{ width: { md: "20%", lg: "20%", sm: "33%", xs: "100%" } }}
            >
              <Box>
                <Box>
                  <Typography
                    sx={{
                      mt: "15px",
                      ml: "10px",
                      fontWeight: "800",
                      color: "yellow.main",
                      fontSize: "20px",
                      mb: "15px",
                    }}
                  >
                    شبکه‌های اجتماعی
                  </Typography>
                  <Box display={"flex"}>
                    <a href="" style={{ marginLeft: "4px" }}>
                      <img
                        src={assets.svg.landingshadlogo}
                        alt="landingshadlogo"
                      />
                    </a>
                    <a href="" style={{ marginLeft: "4px" }}>
                      <img
                        src={assets.svg.landingtelegramlogo}
                        alt="landingtelegramlogo"
                      />
                    </a>
                    <a href="" style={{ marginLeft: "4px" }}>
                      <img
                        src={assets.svg.landingbalelogo}
                        alt="landingbalelogo"
                      />
                    </a>
                    <a href="" style={{ marginLeft: "4px" }}>
                      <img
                        src={assets.svg.landingeitalogo}
                        alt="landingeitalogo"
                      />
                    </a>
                    <a href="" style={{ marginLeft: "4px" }}>
                      <img
                        src={assets.svg.landingaparatlogo}
                        alt="landingaparatlogo"
                      />
                    </a>
                    <img
                      src={assets.svg.landinginstalogo}
                      alt="landinginstalogo"
                    />
                  </Box>
                </Box>
                <Box sx={{ width: "100%" }}>
                  <Typography
                    sx={{
                      mt: "15px",
                      ml: "10px",
                      fontWeight: "800",
                      color: "yellow.main",
                      fontSize: "20px",
                      mb: "15px",
                    }}
                  >
                    تلفن تماس{" "}
                  </Typography>
                  <Button
                    sx={{
                      color: "pink.main",
                      fontWeight: "600",
                      fontSize: "15px",
                      backgroundColor: "gray.light",
                      borderRadius: "30px",
                      px: "10px",
                      border: "3px solid #BF8BD5",
                      width: {
                        md: "unset",
                        lg: "unset",
                        sm: "90%",
                        xs: "100%",
                      },
                    }}
                  >
                    <img
                      src={assets.svg.landingtelephone}
                      alt="landingtelephone"
                      style={{ paddingLeft: "5px", scale: "0.9" }}
                    />
                    ۰۲۱-۲۲۴۰۵۴۵۹
                  </Button>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </footer>
  );
}
export default Footer;
