import {
  Toolbar,
  Typography,
  Button,
  TextField,
  Grid,
  InputAdornment,
  Box,
} from "@mui/material";
import { Link, Link as RouterLink } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { createTheme, ThemeProvider, Theme } from "@mui/material/styles";
import rtlPlugin from "stylis-plugin-rtl";
import { prefixer } from "stylis";
import { CacheProvider, css } from "@emotion/react";
import createCache from "@emotion/cache";
import ChatIcon from "@mui/icons-material/Chat";
import { Login, Logout, Person } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import assets from "../../assets";
import { usePostUserLogout } from "../../hooks/api/usePostUserLogout";




const Header = () =>{
  return(
    <>
    <Box sx={{width:"100vw" , height:"3rem" ,backgroundColor:"primary.main"}}>

    </Box>
    </>
  )
}

export default Header;