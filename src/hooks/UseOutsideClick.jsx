import React, { useEffect } from "react";

const UseOutsideClick = (element, setCloseDialog) => {

  useEffect(() => {
    function handleEvent(e) {
        
      if (!element.current || element.current.contains(e.target)) {
        return;
      }
      
      
      setCloseDialog(true)
    }

    document.addEventListener('mousedown' , (e) => handleEvent(e))
    document.addEventListener('click' , (e) => handleEvent(e))
 
    return () => {
        document.removeEventListener('mousedown' , (e) => handleEvent(e))
        document.removeEventListener('click' , (e) => handleEvent(e))
    }
    
  }, [element]);

  
};

export default UseOutsideClick;
