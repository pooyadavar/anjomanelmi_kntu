import { createTheme, PaletteColorOptions } from "@mui/material/styles";

declare module '@mui/material/styles' {
    interface Palette {
        yellow?: PaletteColorOptions;
        gray ?:PaletteColorOptions;
        pink ?: PaletteColorOptions;
    }

    interface PaletteOptions {
        yellow?: PaletteColorOptions;
        gray ?:PaletteColorOptions;
        pink ?:PaletteColorOptions;
    }

}

export const theme = createTheme({
    palette: {
        primary: {
            main: "#744884",
        },
        yellow: {
            main: '#FDFFAA'
        },
        gray:{
            light:"#F6F6F8",
            main: '#696969',
            dark:"#390A4D"
            
        },
        pink:{
            light:"#F5E8FA",
            main:"#744884"
            
        }
    },
    typography: {
        fontFamily: ["IranYekanLight", "sans-serif"].join(",") + "!important",
    },
});