import React, { useEffect, useRef } from 'react';
import mermaid from 'mermaid';

const MermaidChart = ({ chart }) => {
  const chartRef = useRef(null);

  useEffect(() => {
    mermaid.initialize({ startOnLoad: true });
    mermaid.contentLoaded();
  }, []);

  useEffect(() => {
    if (chartRef.current) {
      mermaid.render('mermaidChart', chart, (svgCode) => {
        chartRef.current.innerHTML = svgCode;
      });
    }
  }, [chart]);

  return <div ref={chartRef} />;
};

export default MermaidChart;