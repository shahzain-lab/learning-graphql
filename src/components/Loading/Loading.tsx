import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

export default function Loading() {
    return (
        <div className="loading__box">
            <div className="loading">
                <CircularProgress />
            </div>
        </div>

    );
}


export function LoadingTask() {
    return (
        <Box sx={{ display: 'flex' }}>
            <CircularProgress color="inherit" />
        </Box>
    );
}
