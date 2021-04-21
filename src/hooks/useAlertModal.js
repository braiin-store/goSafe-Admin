import { useState } from "react";

export const useAlertModal=()=>{
    const [isOpen, setOpen] = useState(false)
    const openAlert = () => {
        setOpen(true);
      };
    
      const closeAlert = () => {
        setOpen(false);
      };
    return { isOpen,openAlert,closeAlert}
}