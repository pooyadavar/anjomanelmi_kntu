import React from 'react';
import ContentLoader from 'react-content-loader';
import { Box } from '@mui/material';

const QuestionPackPlaceholder: React.FC = () => (
    <Box
        sx={{
            backgroundColor: "#ffff", 
            borderRadius: "20px", 
            display: "flex", 
            flexDirection: "column", 
            justifyContent: "center", 
            textAlign: "center", 
            height: "20rem", 
            pb: "10px",

        }}
        width={"100%"}
    >
        {/* Image Placeholder */}
        <ContentLoader 
            speed={3}
            width="100%"
            height="50%"
            backgroundColor="#f3f3f3"
            foregroundColor="#ecebeb"
            viewBox="0 0 360 180"
        >
            <rect x="0" y="0" rx="20" ry="20" width="360" height="180" />
        </ContentLoader>

        {/* Text and Tag Placeholder */}
        <Box sx={{ padding: '15px' }}>
            <ContentLoader
                speed={2}
                width={300}
                height={30}
                backgroundColor="#f3f3f3"
                foregroundColor="#ecebeb"
                viewBox="0 0 300 30"
            >
                <rect x="0" y="5" rx="10" ry="10" width="240" height="20" />
            </ContentLoader>
        </Box>

        {/* Second Row - Tags */}
        <Box sx={{ display: "flex", justifyContent: "space-around", alignItems: "center", px: 1 }}>
            <ContentLoader
                speed={2}
                width={360}
                height={20}
                backgroundColor="#f3f3f3"
                foregroundColor="#ecebeb"
                viewBox="0 0 360 20"
            >
                <rect x="0" y="0" rx="5" ry="5" width="220" height="15" />
                <rect x="230" y="0" rx="5" ry="5" width="80" height="15" />
            </ContentLoader>
        </Box>

        {/* Third Row - Price and Buy Button */}
        <Box sx={{ display: "flex", justifyContent: "space-between", borderTop: "1px solid #F6F6F8", pt: "0.5rem", px: 1 }}>
            <ContentLoader
                speed={2}
                width={300}
                height={30}
                backgroundColor="#f3f3f3"
                foregroundColor="#ecebeb"
                viewBox="0 0 300 30"
            >
                <rect x="0" y="5" rx="10" ry="10" width="150" height="20" />
                <rect x="160" y="5" rx="10" ry="10" width="80" height="20" />
            </ContentLoader>
        </Box>
    </Box>
);

export default QuestionPackPlaceholder;
