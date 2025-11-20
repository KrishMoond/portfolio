import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

export const ThreeHero = () => {
  const containerRef = useRef();

  useEffect(() => {
    if (!containerRef.current) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(50, 1, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    
    const size = Math.min(containerRef.current.offsetWidth, 300);
    renderer.setSize(size, size);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0x000000, 0);
    containerRef.current.appendChild(renderer.domElement);
    camera.position.z = 5;

    // Create geometric shape (icosahedron - modern look)
    const geometry = new THREE.IcosahedronGeometry(1.5, 0);
    const material = new THREE.MeshPhongMaterial({
      color: 0x3b82f6,
      emissive: 0x06b6d4,
      emissiveIntensity: 0.2,
      shininess: 100,
      wireframe: false,
      transparent: true,
      opacity: 0.9
    });
    const mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);

    // Wireframe overlay
    const wireframeGeo = new THREE.IcosahedronGeometry(1.52, 0);
    const wireframeMat = new THREE.MeshBasicMaterial({
      color: 0x06b6d4,
      wireframe: true,
      transparent: true,
      opacity: 0.3
    });
    const wireframe = new THREE.Mesh(wireframeGeo, wireframeMat);
    scene.add(wireframe);

    // Lighting
    const light1 = new THREE.DirectionalLight(0x3b82f6, 1);
    light1.position.set(5, 5, 5);
    scene.add(light1);

    const light2 = new THREE.DirectionalLight(0x06b6d4, 0.5);
    light2.position.set(-5, -5, -5);
    scene.add(light2);

    const ambientLight = new THREE.AmbientLight(0xffffff, 0.3);
    scene.add(ambientLight);

    // Mouse interaction
    let mouseX = 0, mouseY = 0;
    const handleMouseMove = (e) => {
      const rect = containerRef.current.getBoundingClientRect();
      mouseX = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      mouseY = -((e.clientY - rect.top) / rect.height) * 2 + 1;
    };
    containerRef.current.addEventListener('mousemove', handleMouseMove);

    // Animation
    const animate = (time) => {
      requestAnimationFrame(animate);
      
      const t = time * 0.001;
      
      // Auto rotation
      mesh.rotation.y = t * 0.3;
      mesh.rotation.x = Math.sin(t * 0.5) * 0.2;
      wireframe.rotation.y = t * 0.3;
      wireframe.rotation.x = Math.sin(t * 0.5) * 0.2;
      
      // Mouse interaction
      mesh.rotation.y += mouseX * 0.05;
      mesh.rotation.x += mouseY * 0.05;
      wireframe.rotation.y += mouseX * 0.05;
      wireframe.rotation.x += mouseY * 0.05;
      
      renderer.render(scene, camera);
    };
    animate(0);

    // Cleanup
    return () => {
      if (containerRef.current) {
        containerRef.current.removeEventListener('mousemove', handleMouseMove);
        if (renderer.domElement) {
          containerRef.current.removeChild(renderer.domElement);
        }
      }
      renderer.dispose();
      geometry.dispose();
      material.dispose();
      wireframeGeo.dispose();
      wireframeMat.dispose();
    };
  }, []);

  return <div ref={containerRef} className="w-full h-full flex items-center justify-center" />;
};

export default ThreeHero;
