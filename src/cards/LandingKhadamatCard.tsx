import { Box, Button, Typography } from "@mui/material";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import assets from "../assets";

interface Props {
  title: string;
  description: string;
  item1: string;
  item2: string;
  item3: string;
  item4: string;
}
const LandingKhadamatCard: React.FC<Props> = (props) => {
  return (
    <Box
      sx={{
        backgroundColor: "gray.light",
        borderRadius: "20px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        textAlign: "right",
        pb: "1rem",
        boxShadow: "0px 6px 0px 0px rgba(217, 217, 217, 1)",
      }}
      width={"100%"}
    >
      <Box
        sx={{
          backgroundColor: "yellow.main",
          display: "flex",
          alignItems: "center",
          py: "10px",
          px: "10px",
          borderTopRightRadius: "20px",
          borderTopLeftRadius: "20px",
        }}
      >
        <img src={assets.svg.tikcardlanding} alt="tikcardlanding" />
        <Typography sx={{ mr: "5px" }}>{props.title}</Typography>
      </Box>
      <Box sx={{ py: "10px", borderBottom: "0.75px solid #adb5bd" }}>
        <Typography
          sx={{
            px: "10px",
            fontSize: "13px",
            fontWeight: "600",
            minHeight: "2.5rem",
          }}
        >
          {props.description}
        </Typography>
      </Box>
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Box sx={{ width: "88%" }}>
          {[
            { text: props.item1, backgroundColor: "transparent" },
            { text: props.item2, backgroundColor: "pink.light" },
            { text: props.item3, backgroundColor: "transparent" },
            { text: props.item4, backgroundColor: "pink.light" },
          ].map((item, index) => (
            <Typography
              key={index}
              sx={{
                fontSize: "11px",
                my: "3px",
                py: "7px",
                borderRadius: "5px",
                px: "3px",
                backgroundColor: item.backgroundColor,
              }}
            >
              <img
                src={assets.svg.littletikcartlanding}
                alt="littletikcartlanding"
                style={{ scale: "0.9", marginLeft: "3px" }}
              />
              {item.text}
            </Typography>
          ))}
        </Box>
      </Box>
      <Box sx={{ display: "flex", justifyContent: "center", mt: "1rem" }}>
        <Button
          sx={{
            color: "pink.main",
            fontWeight: "600",
            fontSize: "14px",
            backgroundColor: "white",
            borderRadius: "30px",
            border: "3px solid #BF8BD5",
            width: "88%",
            textAlign: "center",
          }}
        >
          اطلاعات بیشتر
          <ChevronLeftIcon sx={{ scale: "0.8" }} />
        </Button>
      </Box>
    </Box>
  );
};

export default LandingKhadamatCard;
