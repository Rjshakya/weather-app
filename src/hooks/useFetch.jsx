import React, { useEffect, useState } from "react";

const UseFetch = ( url ,options , params ) => {
  const [data, setData] = useState(null);
  const [loading, setloading] = useState(true);

  const handleFetch = async () => {
    try {
      const res = await fetch(url , options);

      if (res.ok) {
        const data = await res.json();
        setData(data);
        
        
        setloading(false);
      }
    } catch (error) {
      console.log(error)
    }
  };

  useEffect(() => {
    handleFetch()
  }, [url]);

  return { data, loading };
};

export default UseFetch;