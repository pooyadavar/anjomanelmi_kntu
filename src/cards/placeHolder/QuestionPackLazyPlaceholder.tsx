import React from 'react';
import ContentLoader from 'react-content-loader';
import { Box } from '@mui/material';

const QuestionPackLazyPlaceholder: React.FC = () => (
    <Box
        sx={{
            backgroundColor: "#ffff", 
            borderRadius: "20px", 
            display: "flex", 
            flexDirection: "column", 
            justifyContent: "center", 
            textAlign: "center", 
            height: "20rem", 
            

        }}
        width={"100%"}
    >
        {/* Image Placeholder */}
        <ContentLoader 
            speed={3}
            width="95%"
            height="50%"
            backgroundColor="#f3f3f3"
            foregroundColor="#ecebeb"
            viewBox="0 0 400 280"
        >
            <rect x="0" y="0" rx="20" ry="20" width="380" height="280" />
        </ContentLoader>

        {/* Text and Tag Placeholder */}
        <Box sx={{ padding: '10px' }}>
            <ContentLoader
                speed={2}
                width={200}
                height={30}
                backgroundColor="#f3f3f3"
                foregroundColor="#ecebeb"
                viewBox="0 0 370 50"
            >
                <rect x="0" y="5" rx="10" ry="10" width="370" height="30" />
            </ContentLoader>
        </Box>


        {/* Third Row - Price and Buy Button */}
        <Box sx={{ display: "flex", justifyContent: "space-between", borderTop: "1px solid #F6F6F8", px: 1 }}>
            <ContentLoader
                speed={2}
                width={280}
                height={30}
                backgroundColor="#f3f3f3"
                foregroundColor="#ecebeb"
                viewBox="0 0 300 30"
            >
                <rect x="0" y="5" rx="10" ry="10" width="140" height="20" />
                <rect x="160" y="5" rx="10" ry="10" width="130" height="20" />
            </ContentLoader>
        </Box>
    </Box>
);

export default QuestionPackLazyPlaceholder;
