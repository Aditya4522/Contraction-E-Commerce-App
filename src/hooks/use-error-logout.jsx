import { SetUserLogOut } from '@/redux/Slices/AuthSlice';
import { useDispatch } from 'react-redux';
import { toast } from 'sonner';

export default function useErrorLogout() {
    const dispatch = useDispatch();

    const handleErrorLogout = (error, defaultMessage = "An error occurred") => {
        if (error?.response?.status === 401) {
            dispatch(SetUserLogOut());
            toast.error("Session expired. Please login again to continue.");
        } else {
            const message = error?.response?.data?.message || defaultMessage;
            toast.error(message);
        }
    };

    return handleErrorLogout;
}