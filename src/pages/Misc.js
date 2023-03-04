
import { CircularProgress, Dialog } from '@mui/material';
import { useEffect, useState } from 'react';
import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';

const Misc = () => {
    const [showSkeleton, setShowSkeleton] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setShowSkeleton(false);
        }, 2000);
    }, []);

    return (
        <>
            <div>
                <CircularProgress color="secondary" />
                <CircularProgress color="success" />
                <CircularProgress color="inherit" />
            </div>

            {
                showSkeleton &&
                <Stack spacing={1}>
                    <Skeleton variant="text" sx={{ fontSize: '1rem' }} />
                    <Skeleton variant="circular" width={40} height={40} />
                    <Skeleton variant="rectangular" width={210} height={60} />
                    <Skeleton variant="rounded" width={210} height={60} />
                </Stack>
            }

            {
                !showSkeleton &&
                <div>
                    içerik geldi
                </div>
            }



        </>
    );
}

export default Misc;