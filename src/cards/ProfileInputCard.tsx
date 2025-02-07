
import { Box, Typography } from "@mui/material";

interface Props{
    title : string;
    data : string;

}

const ProfileInputCard :React.FC<Props> = (props) => {
    return (
        <>
            <Box width={"100%"} sx={{ py:"5px" , backgroundColor: "gray.light", borderRadius:"15px" , mt:"8px" , pl:"8px"}}>
                <Box sx={{ display: "flex" , justifyContent:"space-between" , alignItems:"center" }} >
                    <Typography sx={{color:"gray.main" , mr:"1rem"}}>{props.title}</Typography>
                    <Typography sx={{backgroundColor: "yellow.main" , px:"1rem" , py:"0.3rem" , borderRadius:"25px" , color: "gray.main" , fontSize:"13px" }}>{props.data}</Typography>

                </Box>
            </Box>
        </>
    )
}
export default ProfileInputCard;