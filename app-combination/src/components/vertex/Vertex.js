import React from "react";
import ReactDOM from "react-dom";
import { Canvas } from "@react-vertex/core";
import { useViewportSize } from "@react-vertex/dom-hooks";
import Scene from "./Scene";

function Vertex() {
  const { width, height } = useViewportSize();

  return (
    <Canvas width={width} height={height}>
      <Scene />
    </Canvas>
  );
}


export default Vertex;
