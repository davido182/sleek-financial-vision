import React, { useEffect, useRef } from 'react';

interface DataPoint {
  x: number;
  y: number;
  size: number;
  speed: number;
  color: string;
  opacity: number;
  direction: number;
}

const DataVisual = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const dataPoints = useRef<DataPoint[]>([]);
  const connections = useRef<{from: number, to: number, opacity: number}[]>([]);
  const animationRef = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas dimensions
    const setCanvasDimensions = () => {
      const dpr = window.devicePixelRatio || 1;
      const rect = canvas.getBoundingClientRect();
      
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      
      ctx.scale(dpr, dpr);
      canvas.style.width = `${rect.width}px`;
      canvas.style.height = `${rect.height}px`;
    };
    
    window.addEventListener('resize', setCanvasDimensions);
    setCanvasDimensions();

    // Initialize data points
    const initDataPoints = () => {
      const numPoints = Math.floor(canvas.width / 50); // Adjust density
      dataPoints.current = [];
      
      for (let i = 0; i < numPoints; i++) {
        dataPoints.current.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 3 + 1,
          speed: Math.random() * 0.5 + 0.1,
          color: Math.random() > 0.3 ? '#3b82f6' : '#d4af37',
          opacity: Math.random() * 0.5 + 0.3,
          direction: Math.random() > 0.5 ? 1 : -1
        });
      }
      
      // Create connections between points
      connections.current = [];
      for (let i = 0; i < numPoints; i++) {
        const numConnections = Math.floor(Math.random() * 3) + 1;
        for (let j = 0; j < numConnections; j++) {
          const targetIndex = Math.floor(Math.random() * numPoints);
          if (targetIndex !== i) {
            connections.current.push({
              from: i,
              to: targetIndex,
              opacity: Math.random() * 0.2 + 0.1
            });
          }
        }
      }
    };

    initDataPoints();

    // Animation loop
    const animate = () => {
      if (!ctx || !canvas) return;
      
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Draw connections first
      connections.current.forEach(connection => {
        const fromPoint = dataPoints.current[connection.from];
        const toPoint = dataPoints.current[connection.to];
        
        ctx.beginPath();
        ctx.moveTo(fromPoint.x, fromPoint.y);
        ctx.lineTo(toPoint.x, toPoint.y);
        ctx.strokeStyle = `rgba(75, 85, 99, ${connection.opacity})`;
        ctx.lineWidth = 0.5;
        ctx.stroke();
      });
      
      // Draw and update data points
      dataPoints.current.forEach((point, index) => {
        // Draw the point
        ctx.beginPath();
        ctx.arc(point.x, point.y, point.size, 0, Math.PI * 2);
        ctx.fillStyle = `${point.color}${Math.floor(point.opacity * 255).toString(16).padStart(2, '0')}`;
        ctx.fill();
        
        // Update position
        point.y += point.speed * point.direction;
        
        // Bounce at edges
        if (point.y <= 0 || point.y >= canvas.height) {
          point.direction *= -1;
        }
        
        // Random horizontal movement
        point.x += (Math.random() - 0.5) * point.speed;
        
        // Keep within bounds
        if (point.x < 0) point.x = canvas.width;
        if (point.x > canvas.width) point.x = 0;
        
        dataPoints.current[index] = point;
      });
      
      animationRef.current = requestAnimationFrame(animate);
    };
    
    animate();
    
    // Cleanup
    return () => {
      window.removeEventListener('resize', setCanvasDimensions);
      cancelAnimationFrame(animationRef.current);
    };
  }, []);

  return (
    <canvas 
      ref={canvasRef}
      className="absolute inset-0 w-full h-full"
      style={{ opacity: 0.7 }}
    />
  );
};

export default DataVisual;
