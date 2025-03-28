import { SetUserLogOut } from '@/redux/Slices/AuthSlice';
import { useDispatch } from 'react-redux';
import { toast } from 'sonner';
import { useCallback } from 'react';

export default function useErrorLogout() {
    const dispatch = useDispatch();

    const handleErrorLogout = useCallback((error, defaultMessage = "An error occurred") => {
        if (!error?.response) {
            console.error("Network or unexpected error token:", error);
            toast.error("Network error. Please check your internet connection. Token error");
            return;
        }

        if (error.response.status === 401) {
            dispatch(SetUserLogOut());
            toast.error("Session expired. Please login again to continue.");
        } else {
            const message = error.response.data?.message || defaultMessage;
            toast.error(message);
        }
    }, [dispatch]);

    return handleErrorLogout;
}
