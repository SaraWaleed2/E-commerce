import { createContext, useState, useContext } from "react";
import SnackBar from "../Components/SnackBar";

const ToastContext = createContext({})

export const ToastProvider = ({ children }) => {
    const [open, setOpen] = useState(false);
    const [message, setMessage] = useState("");
    const [type, setType] = useState("cart");

    function showHideToast(message, type) {
        setOpen(true)
        setMessage(message)
        setType(type)
        setTimeout(() => {
            setOpen(false)
        }, 3000);
    }
    return (
        <ToastContext.Provider value={{ showHideToast, setOpen }}>
            <SnackBar open={open} message={message} type={type} />
            {children}
        </ToastContext.Provider>
    )
}

export const useToast = () => {
    return useContext(ToastContext);
};