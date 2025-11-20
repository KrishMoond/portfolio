import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

export const ThreeBackground = () => {
  const containerRef = useRef();
  const mouseRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    if (!containerRef.current) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0x000000, 0);
    renderer.domElement.style.position = 'fixed';
    renderer.domElement.style.top = '0';
    renderer.domElement.style.left = '0';
    renderer.domElement.style.width = '100%';
    renderer.domElement.style.height = '100%';
    renderer.domElement.style.pointerEvents = 'none';
    containerRef.current.appendChild(renderer.domElement);
    camera.position.z = 5;

    // Interactive particles
    const particlesGeometry = new THREE.BufferGeometry();
    const particlesCount = 200;
    const positions = new Float32Array(particlesCount * 3);
    const colors = new Float32Array(particlesCount * 3);
    
    for (let i = 0; i < particlesCount; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 15;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 15;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 15;
      
      // Gradient colors (blue to cyan)
      const t = Math.random();
      colors[i * 3] = 0.4 + t * 0.2;     // R
      colors[i * 3 + 1] = 0.6 + t * 0.4; // G
      colors[i * 3 + 2] = 0.9 + t * 0.1; // B
    }
    
    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    particlesGeometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));
    
    const particlesMaterial = new THREE.PointsMaterial({
      size: 0.02,
      transparent: true,
      opacity: 0.6,
      vertexColors: true,
      blending: THREE.AdditiveBlending,
      sizeAttenuation: true
    });
    
    const particles = new THREE.Points(particlesGeometry, particlesMaterial);
    scene.add(particles);

    // Mouse interaction
    const handleMouseMove = (event) => {
      mouseRef.current.x = (event.clientX / window.innerWidth) * 2 - 1;
      mouseRef.current.y = -(event.clientY / window.innerHeight) * 2 + 1;
    };
    window.addEventListener('mousemove', handleMouseMove);

    // Animation
    const animate = (currentTime) => {
      requestAnimationFrame(animate);
      
      const time = currentTime * 0.0005;
      
      // Smooth rotation
      particles.rotation.y = time * 0.05 + mouseRef.current.x * 0.1;
      particles.rotation.x = Math.sin(time * 0.3) * 0.05 + mouseRef.current.y * 0.1;
      
      // Pulse effect
      particlesMaterial.opacity = 0.5 + Math.sin(time * 2) * 0.1;
      
      renderer.render(scene, camera);
    };
    animate(0);

    // Resize handler
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      if (containerRef.current && renderer.domElement) {
        containerRef.current.removeChild(renderer.domElement);
      }
      renderer.dispose();
      particlesGeometry.dispose();
      particlesMaterial.dispose();
    };
  }, []);

  return <div ref={containerRef} className="fixed inset-0 pointer-events-none" style={{ zIndex: 0 }} />;
};