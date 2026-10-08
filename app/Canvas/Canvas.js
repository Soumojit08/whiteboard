"use client";

import { useEffect, useRef } from "react";

const Canvas = (props) => {
  const canvasRef = useRef();

  const draw = (context) => {
    context.fillStyle = "grey";
    context.fillRect(10, 10, 100, 100);
  };

  useEffect(() => {
    const canvas = canvasRef.current; // getting the canvas like getElem by id
    const context = canvas.getContext("2d");
    draw(context);
  }, []);

  return <canvas ref={canvasRef} {...props} />;
};

export default Canvas;
