import React, { useEffect, useRef } from "react";

const Usepr = ( vaue ) => {
  const ref = useRef();
  useEffect(() => {
    ref.current = vaue;
  }, [vaue]);
  return ref.current;
};

export default Usepr;
