import { createContext, useState, useContext } from "react";
import SnackBar from "../Components/SnackBar";

const ToastContext = createContext({})

export const ToastProvider = ({ children }) => {
    const [open, setOpen] = useState(false);
    const [message, setMessage] = useState("");

    function showHideToast(message) {
        setOpen(true)
        setMessage(message)
        setTimeout(() => {
            setOpen(false)
        }, 3000);
    }
    return (
        <ToastContext.Provider value={{ showHideToast, setOpen }}>
            <SnackBar open={open} message={message} />
            {children}
        </ToastContext.Provider>
    )
}

export const useToast = () => {
    return useContext(ToastContext);
};