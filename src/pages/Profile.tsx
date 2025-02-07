import { Box, Grid, Typography } from "@mui/material";
import ProfileInputCard from "../cards/ProfileInputCard";

import MoreVertIcon from '@mui/icons-material/MoreVert';
import { useGetProfileData } from "../hooks/api/useGetProfileData";
import assets from "../assets";

export default function Profile() {
    const dataProfile = useGetProfileData();
    console.log(dataProfile);

    return (
        <div className='container'>
            <Box sx={{ display: "flex", gap: "2rem", mx:"auto"}}>
                <Box sx={{ width: "300px", borderRadius: "20px", backgroundColor: "#F5E8FA", height: "19rem", mt: "3rem" }}>
                    <Grid container
                        lg={12}
                        md={12}
                        sm={12}
                        xs={12}>
                        {/* <img src={assets.img.profileImg} alt="profileImg" /> */}
                        <Box px={"1rem"} display={"flex"} gap={"5rem"}>
                            <Typography sx={{ fontSize: "18px", mt: "1rem", color: "" }}>حمیدرضا نوری مطلق</Typography>
                            <Box>
                                <MoreVertIcon sx={{ pt: "1rem" }} />
                            </Box>

                        </Box>
                        <Grid item display={"flex"} width={"100%"} gap={"0.3rem"} mt={"2rem"} px={"1rem"}>
                            <Typography sx={{ backgroundColor: "yellow.main", px: "0.8rem", py: "0.2rem", borderRadius: "25px", color: "gray.dark", fontSize: "15px" }}>مدرسه علامه مجلسی ۲</Typography>
                            <Typography sx={{ backgroundColor: "gray.light", px: "0.8rem", py: "0.2rem", borderRadius: "25px", color: "gray.dark", fontSize: "15px" }}>دهم</Typography>

                        </Grid>

                    </Grid>
                </Box>


                <Box mt={'2rem'} >
                    <Box sx={{ backgroundColor: "#fff", px: "1rem", borderRadius: "15px", py: "1rem", mx: "auto"  }}>
                        <Typography sx={{ fontSize: "20px", color: "gray.main", mr: "1rem" }}>
                            مشخصات
                        </Typography>
                        <Grid container width={"100%"} >
                            {[
                                { title: "نام", data: "حمیدرضا" },
                                { title: "نام خانوادگی", data: "حمیدرضا" },
                                { title: "تاریخ تولد", data: "حمیدرضا" },
                                { title: "مدرسه", data: "حمیدرضا" },
                                { title: "پایه", data: "حمیدرضا" },
                                { title: "رشته", data: "حمیدرضا" },
                            ].map((info, index) => (
                                <Grid
                                    key={index}
                                    item
                                    lg={12}
                                    md={12}
                                    sm={12}
                                    xs={12}
                                >
                                    <ProfileInputCard title={info.title} data={info.data} />
                                </Grid>

                            ))}
                        </Grid>
                    </Box>
                </Box>
            </Box>
        </div>

    )
}