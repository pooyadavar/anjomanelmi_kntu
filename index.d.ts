import { PaletteColorOptions } from "@mui/material/styles";

declare module '@mui/material/styles' {
    interface Palette {
        hasan: PaletteColorOptions;
    }
  
    interface PaletteOptions {
        hasan: PaletteColorOptions;
    }
  }

  declare module 'quill-resize-image';