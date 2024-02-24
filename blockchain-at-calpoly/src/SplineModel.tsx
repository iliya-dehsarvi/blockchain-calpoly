import React, { useEffect, useRef } from 'react';
import { Application } from '@splinetool/runtime';

const SplineModel: React.FC<{ splineUrl: string }> = ({ splineUrl }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    let app: any; 

    if (canvasRef.current) {
      app = new Application(canvasRef.current);
      app.load(splineUrl);
    }

    return () => {
      if (app) {
        app.dispose();
      }
    };
  }, [splineUrl]);

  return <canvas ref={canvasRef} style={{ width: '100%', height: '100%' }} />;
};

export default SplineModel;
