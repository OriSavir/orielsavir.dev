"use client";
import { motion, useSpring, useTransform } from "framer-motion";
import { useState } from "react";
import Image from "next/image";

interface FloatingImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string; 
}

const FloatingImage: React.FC<FloatingImageProps> = ({
  src,
  alt,
  width = 400,
  height = 400,
  className = "",
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const config = { stiffness: 100, damping: 10 }; 
  const x = useSpring(0, config);
  const y = useSpring(0, config);

  const rotateX = useTransform(y, [-50, 50], [10, -10]);
  const rotateY = useTransform(x, [-50, 50], [-10, 10]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
    const offsetX = (e.clientX - left) / width - 0.5;
    const offsetY = (e.clientY - top) / height - 0.5;

    x.set(offsetX * 100);
    y.set(offsetY * 100);
  };

  return (
    <motion.div
      className={`transition-all duration-1000 transform ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false);
        x.set(0); // Smoothly reset
        y.set(0);
      }}
      onMouseMove={handleMouseMove}
      style={{ perspective: "1000px" }}
    >
      <motion.div
        className="relative rounded-lg overflow-hidden border-10 border-[var(--cyber-blue)] shadow-lg"
        style={{
          width,
          height,
          rotateX,
          rotateY,
          scale: isHovered ? 1.05 : 1,
          transition: "scale 0.3s ease",
        }}
      >
        <Image 
          src={src} 
          alt={alt} 
          fill
          style={{ objectFit: "cover" }}
          className="hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--cyber-darker)] via-transparent to-transparent"></div>

        <div className="absolute top-4 left-4 w-20 h-1 bg-[var(--cyber-pink)]"></div>
        <div className="absolute top-8 left-4 w-12 h-1 bg-[var(--cyber-blue)]"></div>
        <div className="absolute bottom-4 right-4 w-20 h-1 bg-[var(--cyber-pink)]"></div>
        <div className="absolute bottom-8 right-4 w-12 h-1 bg-[var(--cyber-blue)]"></div>
      </motion.div>
    </motion.div>
  );
};

export default FloatingImage;
