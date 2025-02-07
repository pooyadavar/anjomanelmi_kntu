import React from 'react';
import ContentLoader from 'react-content-loader';
import { Box } from '@mui/material';

const AccordionPlaceholder: React.FC = () => (
    <Box sx={{mb:"1.3rem"}}>
        <Box
            sx={{
                backgroundColor: "#fff",
                borderTopRightRadius: "20px",
                borderTopLeftRadius: "20px",
                display: "flex",
                justifyContent: "space-between",
                borderBottom: "1px solid rgba(240, 240, 240, 1)",
                padding: "10px"
            }}
        >
            {/* Placeholder for lesson1 and lesson2 */}
            <ContentLoader
                speed={2}
                width={150}
                height={30}
                backgroundColor="#f3f3f3"
                foregroundColor="#ecebeb"
                viewBox="0 0 150 30"
            >
                <rect x="0" y="5" rx="10" ry="10" width="150" height="20" />
            </ContentLoader>

            {/* Placeholder for 'بانک تستامینوفن' */}
            <ContentLoader
                speed={2}
                width={120}
                height={30}
                backgroundColor="#f3f3f3"
                foregroundColor="#ecebeb"
                viewBox="0 0 120 30"
            >
                <rect x="0" y="5" rx="10" ry="10" width="100" height="20" />
            </ContentLoader>
        </Box>

        <Box
            sx={{
                backgroundColor: "#fff",
                borderBottomRightRadius: "20px",
                borderBottomLeftRadius: "20px",
                display: "flex",
                justifyContent: "space-between",
                borderBottom: "1px solid rgba(240, 240, 240, 1)",
                padding: "10px"
            }}
        >
            {/* Placeholder for lesson1 and lesson2 */}
            <ContentLoader
                speed={2}
                width={600}
                height={30}
                backgroundColor="#f3f3f3"
                foregroundColor="#ecebeb"
                viewBox="0 0 600 30"
            >
                <rect x="0" y="5" rx="10" ry="10" width="600" height="20" />
            </ContentLoader>

            <ContentLoader
                speed={2}
                width={120}
                height={30}
                backgroundColor="#f3f3f3"
                foregroundColor="#ecebeb"
                viewBox="0 0 120 30"
            >
                <rect x="0" y="5" rx="10" ry="10" width="20" height="20" />
            </ContentLoader>
        </Box>
    </Box>
);

export default AccordionPlaceholder;
