import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone, FaDownload } from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";

export const Home = () => {
  const bgCanvasRef = useRef(null);

  // Space background with simple orbiting planets
  useEffect(() => {
    const canvas = bgCanvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext("2d");
    
    // Set canvas dimensions
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    
    // Create celestial objects
    const celestialObjects = [];
    
    // Sun
    celestialObjects.push({
      x: window.innerWidth / 2,
      y: window.innerHeight / 2,
      radius: 30,
      color: "#FDB813",
      glowRadius: 100,
      glowColor: "rgba(253, 184, 19, 0.2)",
      isFixed: true
    });
    
    // Planets
    const planetColors = ["#8A9597", "#E7CDCD", "#6B93D6", "#C1440E", "#E29468", "#C7AA72"];
    const orbitRadii = [120, 180, 250, 320, 400, 480];
    
    for (let i = 0; i < 6; i++) {
      celestialObjects.push({
        angle: Math.random() * Math.PI * 2,
        orbitRadius: orbitRadii[i],
        radius: 5 + i * 3,
        speed: 0.002 / (i * 0.5 + 1),
        color: planetColors[i],
        orbit: {
          x: window.innerWidth / 2,
          y: window.innerHeight / 2,
          visible: true
        }
      });
    }
    
    // Stars
    for (let i = 0; i < 120; i++) {
      celestialObjects.push({
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        radius: Math.random() * 1.5 + 0.5,
        color: "rgba(255, 255, 255, 0.8)",
        twinkle: {
          speed: Math.random() * 0.03 + 0.01,
          phase: Math.random() * Math.PI * 2
        },
        isStar: true
      });
    }
    
    // Animation loop
    let animationId;
    
    const renderFrame = () => {
      // Clear canvas
      ctx.fillStyle = "#0f0f1e"; // Dark blue background
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      // Draw celestial objects
      celestialObjects.forEach(obj => {
        if (obj.isStar) {
          // Animate star twinkle
          obj.twinkle.phase += obj.twinkle.speed;
          const opacity = 0.5 + Math.sin(obj.twinkle.phase) * 0.5;
          
          ctx.fillStyle = `rgba(255, 255, 255, ${opacity})`;
          ctx.beginPath();
          ctx.arc(obj.x, obj.y, obj.radius, 0, Math.PI * 2);
          ctx.fill();
        } else if (obj.isFixed) {
          // Draw sun with glow
          ctx.beginPath();
          const gradient = ctx.createRadialGradient(
            obj.x, obj.y, 0,
            obj.x, obj.y, obj.glowRadius
          );
          gradient.addColorStop(0, obj.color);
          gradient.addColorStop(0.2, obj.color);
          gradient.addColorStop(1, "rgba(253, 184, 19, 0)");
          
          ctx.fillStyle = gradient;
          ctx.arc(obj.x, obj.y, obj.glowRadius, 0, Math.PI * 2);
          ctx.fill();
          
          // Sun core
          ctx.fillStyle = obj.color;
          ctx.beginPath();
          ctx.arc(obj.x, obj.y, obj.radius, 0, Math.PI * 2);
          ctx.fill();
        } else {
          // Update planet position
          obj.angle += obj.speed;
          const x = obj.orbit.x + Math.cos(obj.angle) * obj.orbitRadius;
          const y = obj.orbit.y + Math.sin(obj.angle) * obj.orbitRadius;
          
          // Draw orbit
          if (obj.orbit.visible) {
            ctx.beginPath();
            ctx.strokeStyle = "rgba(255, 255, 255, 0.1)";
            ctx.arc(obj.orbit.x, obj.orbit.y, obj.orbitRadius, 0, Math.PI * 2);
            ctx.stroke();
          }
          
          // Draw planet
          ctx.fillStyle = obj.color;
          ctx.beginPath();
          ctx.arc(x, y, obj.radius, 0, Math.PI * 2);
          ctx.fill();
        }
      });
      
      animationId = requestAnimationFrame(renderFrame);
    };
    
    // Start animation
    renderFrame();
    
    // Cleanup
    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  // Tilt effect for profile image
  useEffect(() => {
    const handleMouseMove = (e) => {
      const profileImg = document.getElementById("profile-img");
      if (!profileImg) return;
      const rect = profileImg.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const tiltX = (centerY - y) / 20;
      const tiltY = (x - centerX) / 20;
      profileImg.style.transform = `perspective(1000px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale(1.05)`;
    };
    
    const handleMouseLeave = () => {
      const profileImg = document.getElementById("profile-img");
      if (profileImg) profileImg.style.transform = "";
    };
    
    const imgContainer = document.getElementById("img-container");
    if (imgContainer) {
      imgContainer.addEventListener("mousemove", handleMouseMove);
      imgContainer.addEventListener("mouseleave", handleMouseLeave);
    }
    
    return () => {
      if (imgContainer) {
        imgContainer.removeEventListener("mousemove", handleMouseMove);
        imgContainer.removeEventListener("mouseleave", handleMouseLeave);
      }
    };
  }, []);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.3, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6 },
    },
  };

  const buttonVariants = {
    hover: {
      scale: 1.05,
      boxShadow: "0px 8px 20px rgba(99, 102, 241, 0.4)",
      transition: { duration: 0.3 },
    },
    tap: { scale: 0.95 },
  };

  const gradientText = "bg-gradient-to-r from-pink-500 via-indigo-500 to-blue-500 text-transparent bg-clip-text";

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Space Background Canvas - positioned absolutely and covers full screen */}
      <canvas 
        ref={bgCanvasRef} 
        className="absolute top-0 left-0 w-full h-full" 
        style={{ zIndex: 0 }}
      />
      
      <div className="relative z-10 container mx-auto px-4 py-20">
        <motion.div
          className="flex flex-col md:flex-row items-center justify-between"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <motion.div className="md:w-1/2 mb-12 md:mb-0 flex justify-center" variants={itemVariants}>
            <div id="img-container" className="relative group transition-transform duration-300">
              <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full blur-2xl opacity-60 group-hover:opacity-100"></div>
              <img
                id="profile-img"
                src="/src/assets/bimoji.png"
                alt="Krish Moond"
                className="relative z-10 rounded-full w-64 h-64 object-cover shadow-2xl"
              />
            </div>
          </motion.div>

          <motion.div className="md:w-1/2 text-center md:text-left" variants={itemVariants}>
            <motion.h1 className="text-5xl font-extrabold mb-4 text-white" variants={itemVariants}>
              Hi, I'm <span className={gradientText}>Krish Moond</span>
            </motion.h1>

            <motion.h2 className="text-2xl text-indigo-200 mb-6" variants={itemVariants}>
              <TypeAnimation
                sequence={[
                  "Computer Science Student",
                  1000,
                  "Frontend Developer",
                  1000,
                  "UI/UX Enthusiast",
                  1000,
                  "Problem Solver",
                  1000,
                ]}
                speed={50}
                repeat={Infinity}
              />
            </motion.h2>

            <motion.p
  className="text-xl font-medium mb-8 leading-relaxed bg-gradient-to-r from-pink-500 via-orange-400 to-yellow-300 bg-clip-text text-transparent"
  variants={itemVariants}
>
  Crafting delightful digital experiences with a blend of creative design and modern code.
</motion.p>


{/* <motion.p
  className="text-3xl font-semibold bg-gradient-to-r from-blue-500 via-cyan-300 to-lime-300 bg-clip-text text-transparent mb-8 leading-relaxed"
  variants={itemVariants}
>
  Crafting delightful digital experiences with a blend of creative design and modern code.
</motion.p> */}


            <motion.div className="flex flex-wrap gap-4 justify-center md:justify-start" variants={itemVariants}>
              <motion.div variants={buttonVariants} whileHover="hover" whileTap="tap">
                <Link to="/contact" className="px-6 py-3 bg-indigo-600 text-white rounded-lg shadow-md flex items-center gap-2">
                  <span>Contact Me</span>
                  <FaEnvelope />
                </Link>
              </motion.div>
              <motion.div variants={buttonVariants} whileHover="hover" whileTap="tap">
                <Link to="/projects" className="px-6 py-3 border-2 border-indigo-400 text-indigo-200 rounded-lg flex items-center gap-2">
                  <span>View Projects</span>
                </Link>
              </motion.div>
              <motion.div variants={buttonVariants} whileHover="hover" whileTap="tap" className="hidden md:block">
                <a href="/resume.pdf" download className="px-6 py-3 bg-pink-600 text-white rounded-lg flex items-center gap-2">
                  <span>Download CV</span>
                  <FaDownload />
                </a>
              </motion.div>
            </motion.div>

            <motion.div className="flex mt-10 space-x-6 justify-center md:justify-start" variants={itemVariants}>
              <motion.a href="https://github.com/KrishMoond" target="_blank" className="text-white hover:text-indigo-400" whileHover={{ scale: 1.2 }}>
                <FaGithub size={26} />
              </motion.a>
              <motion.a href="https://linkedin.com/in/krish-moond" target="_blank" className="text-white hover:text-blue-400" whileHover={{ scale: 1.2 }}>
                <FaLinkedin size={26} />
              </motion.a>
              <motion.a href="mailto:moondkrish921@gmail.com" className="text-white hover:text-red-400" whileHover={{ scale: 1.2 }}>
                <FaEnvelope size={26} />
              </motion.a>
              <motion.a href="tel:8708304851" className="text-white hover:text-green-400" whileHover={{ scale: 1.2 }}>
                <FaPhone size={26} />
              </motion.a>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Home;


//Third Change

// import React, { useEffect, useRef, useState } from "react";
// import { Link } from "react-router-dom";
// import { FaGithub, FaLinkedin, FaEnvelope, FaPhone, FaDownload } from "react-icons/fa";
// import { TypeAnimation } from "react-type-animation";
// import { motion } from "framer-motion";

// export const Home = () => {
//   const bgCanvasRef = useRef(null);
//   const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
//   // Track mouse movement for interactive effects
//   useEffect(() => {
//     const handleMouseMove = (e) => {
//       setMousePosition({
//         x: e.clientX,
//         y: e.clientY
//       });
//     };
    
//     window.addEventListener('mousemove', handleMouseMove);
//     return () => {
//       window.removeEventListener('mousemove', handleMouseMove);
//     };
//   }, []);

//   // Enhanced space background with interactive elements
//   useEffect(() => {
//     const canvas = bgCanvasRef.current;
//     if (!canvas) return;
    
//     const ctx = canvas.getContext("2d");
    
//     // Set canvas dimensions
//     const resizeCanvas = () => {
//       canvas.width = window.innerWidth;
//       canvas.height = window.innerHeight;
//     };
    
//     resizeCanvas();
//     window.addEventListener('resize', resizeCanvas);
    
//     // Create celestial objects
//     const celestialObjects = [];
    
//     // Sun
//     celestialObjects.push({
//       x: window.innerWidth / 2,
//       y: window.innerHeight / 2,
//       radius: 35,
//       color: "#FDB813",
//       glowRadius: 120,
//       glowColor: "rgba(253, 184, 19, 0.2)",
//       pulseSpeed: 0.02,
//       pulsePhase: 0,
//       isFixed: true
//     });
    
//     // Planets
//     const planetColors = [
//       "#8A9597", // Mercury - grey
//       "#E7CDCD", // Venus - light pink
//       "#6B93D6", // Earth - blue
//       "#C1440E", // Mars - red
//       "#E29468", // Jupiter - orange
//       "#C7AA72"  // Saturn - tan
//     ];
    
//     const orbitRadii = [120, 180, 250, 320, 400, 480];
    
//     for (let i = 0; i < 6; i++) {
//       // Add planet
//       celestialObjects.push({
//         angle: Math.random() * Math.PI * 2,
//         orbitRadius: orbitRadii[i],
//         radius: 5 + i * 3,
//         speed: 0.002 / (i * 0.5 + 1),
//         color: planetColors[i],
//         orbit: {
//           x: window.innerWidth / 2,
//           y: window.innerHeight / 2,
//           visible: true
//         },
//         // Add rings for Saturn (last planet)
//         rings: i === 5 ? {
//           innerRadius: 14,
//           outerRadius: 26,
//           color: "rgba(199, 170, 114, 0.4)"
//         } : null,
//         // Add atmosphere for some planets
//         atmosphere: i === 2 || i === 4 ? {
//           radius: (5 + i * 3) * 1.3,
//           color: `rgba(${i === 2 ? '107, 147, 214' : '226, 148, 104'}, 0.3)`
//         } : null
//       });
      
//       // Add moons for some planets
//       if (i >= 2) { // Earth and beyond have moons
//         const moonCount = i === 5 ? 3 : i === 4 ? 4 : i === 3 ? 2 : 1;
        
//         for (let m = 0; m < moonCount; m++) {
//           celestialObjects.push({
//             parentIndex: celestialObjects.length - 1, // Reference to the planet
//             angle: Math.random() * Math.PI * 2,
//             orbitRadius: (5 + i * 3) * 2 + m * 8,
//             radius: 2 + m * 0.5,
//             speed: 0.05 / (m * 0.3 + 1),
//             color: "#DDDDDD",
//             isMoon: true
//           });
//         }
//       }
//     }
    
//     // Stars with different colors
//     const starColors = [
//       "rgba(255, 255, 255, 0.8)", // White
//       "rgba(173, 216, 230, 0.8)", // Light Blue
//       "rgba(255, 223, 186, 0.8)", // Light Orange
//       "rgba(255, 192, 203, 0.8)"  // Pink
//     ];
    
//     for (let i = 0; i < 200; i++) {
//       celestialObjects.push({
//         x: Math.random() * window.innerWidth,
//         y: Math.random() * window.innerHeight,
//         radius: Math.random() * 1.5 + 0.5,
//         color: starColors[Math.floor(Math.random() * starColors.length)],
//         twinkle: {
//           speed: Math.random() * 0.03 + 0.01,
//           phase: Math.random() * Math.PI * 2
//         },
//         isStar: true
//       });
//     }
    
//     // Constellation lines
//     const constellations = [
//       // Big Dipper
//       {
//         stars: [
//           { x: window.innerWidth * 0.2, y: window.innerHeight * 0.2 },
//           { x: window.innerWidth * 0.25, y: window.innerHeight * 0.23 },
//           { x: window.innerWidth * 0.3, y: window.innerHeight * 0.25 },
//           { x: window.innerWidth * 0.35, y: window.innerHeight * 0.27 },
//           { x: window.innerWidth * 0.4, y: window.innerHeight * 0.3 },
//           { x: window.innerWidth * 0.38, y: window.innerHeight * 0.35 },
//           { x: window.innerWidth * 0.43, y: window.innerHeight * 0.38 }
//         ],
//         lines: [[0,1], [1,2], [2,3], [3,4], [4,5], [5,6]]
//       },
//       // Orion
//       {
//         stars: [
//           { x: window.innerWidth * 0.7, y: window.innerHeight * 0.6 },
//           { x: window.innerWidth * 0.75, y: window.innerHeight * 0.55 },
//           { x: window.innerWidth * 0.73, y: window.innerHeight * 0.65 },
//           { x: window.innerWidth * 0.77, y: window.innerHeight * 0.7 },
//           { x: window.innerWidth * 0.67, y: window.innerHeight * 0.72 },
//           { x: window.innerWidth * 0.65, y: window.innerHeight * 0.63 },
//           { x: window.innerWidth * 0.7, y: window.innerHeight * 0.68 }
//         ],
//         lines: [[0,1], [0,2], [0,5], [2,6], [2,4], [3,6], [3,4]]
//       }
//     ];
    
//     // Add constellation stars
//     constellations.forEach(constellation => {
//       constellation.stars.forEach(star => {
//         celestialObjects.push({
//           x: star.x,
//           y: star.y,
//           radius: 2,
//           color: "rgba(255, 255, 255, 0.9)",
//           twinkle: {
//             speed: Math.random() * 0.02 + 0.01,
//             phase: Math.random() * Math.PI * 2
//           },
//           isStar: true,
//           isConstellation: true
//         });
//       });
//     });
    
//     // Add nebula clouds
//     const nebulae = [
//       {
//         x: window.innerWidth * 0.15,
//         y: window.innerHeight * 0.7,
//         radius: 180,
//         color: "rgba(138, 43, 226, 0.1)" // Purple
//       },
//       {
//         x: window.innerWidth * 0.85,
//         y: window.innerHeight * 0.3,
//         radius: 220,
//         color: "rgba(135, 206, 250, 0.1)" // Light Sky Blue
//       }
//     ];
    
//     // Add shooting stars
//     const shootingStars = [];
//     const createShootingStar = () => {
//       if (shootingStars.length < 3 && Math.random() < 0.01) {
//         shootingStars.push({
//           x: Math.random() * window.innerWidth,
//           y: 0,
//           length: Math.random() * 80 + 50,
//           speed: Math.random() * 10 + 15,
//           angle: Math.PI / 4 + (Math.random() * Math.PI / 4)
//         });
//       }
//     };
    
//     // Code blocks as floating elements
//     const codeBlocks = [
//       {
//         x: window.innerWidth * 0.1,
//         y: window.innerHeight * 0.4,
//         size: 60,
//         text: "{ }",
//         color: "rgba(99, 102, 241, 0.2)",
//         rotation: 0,
//         rotationSpeed: 0.01
//       },
//       {
//         x: window.innerWidth * 0.85,
//         y: window.innerHeight * 0.65,
//         size: 70,
//         text: "</>",
//         color: "rgba(236, 72, 153, 0.2)",
//         rotation: 0.2,
//         rotationSpeed: -0.008
//       },
//       {
//         x: window.innerWidth * 0.25,
//         y: window.innerHeight * 0.8,
//         size: 50,
//         text: "js",
//         color: "rgba(234, 179, 8, 0.2)",
//         rotation: -0.1,
//         rotationSpeed: 0.005
//       }
//     ];
    
//     // Animation loop
//     let animationId;
//     let frame = 0;
    
//     const renderFrame = () => {
//       frame++;
      
//       // Create bg gradient
//       const bgGradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
//       bgGradient.addColorStop(0, "#0f0f1e"); // Dark blue
//       bgGradient.addColorStop(1, "#1a1a3a"); // Slightly lighter blue
      
//       // Clear canvas with gradient
//       ctx.fillStyle = bgGradient;
//       ctx.fillRect(0, 0, canvas.width, canvas.height);
      
//       // Draw nebulae
//       nebulae.forEach(nebula => {
//         const nebulaGradient = ctx.createRadialGradient(
//           nebula.x, nebula.y, 0,
//           nebula.x, nebula.y, nebula.radius
//         );
//         nebulaGradient.addColorStop(0, nebula.color);
//         nebulaGradient.addColorStop(1, "rgba(0, 0, 0, 0)");
        
//         ctx.fillStyle = nebulaGradient;
//         ctx.beginPath();
//         ctx.arc(nebula.x, nebula.y, nebula.radius, 0, Math.PI * 2);
//         ctx.fill();
//       });
      
//       // Draw constellation lines
//       constellations.forEach(constellation => {
//         ctx.strokeStyle = "rgba(255, 255, 255, 0.2)";
//         ctx.lineWidth = 0.5;
        
//         constellation.lines.forEach(([fromIdx, toIdx]) => {
//           const from = constellation.stars[fromIdx];
//           const to = constellation.stars[toIdx];
          
//           ctx.beginPath();
//           ctx.moveTo(from.x, from.y);
//           ctx.lineTo(to.x, to.y);
//           ctx.stroke();
//         });
//       });
      
//       // Draw stars
//       celestialObjects.forEach(obj => {
//         if (obj.isStar) {
//           // Animate star twinkle
//           obj.twinkle.phase += obj.twinkle.speed;
//           const opacity = obj.isConstellation ? 
//             0.7 + Math.sin(obj.twinkle.phase) * 0.3 : 
//             0.5 + Math.sin(obj.twinkle.phase) * 0.5;
          
//           // Draw star
//           ctx.fillStyle = obj.color.replace(/[\d.]+\)$/g, `${opacity})`);
//           ctx.beginPath();
//           ctx.arc(obj.x, obj.y, obj.radius, 0, Math.PI * 2);
//           ctx.fill();
          
//           // Draw glow for constellation stars
//           if (obj.isConstellation) {
//             const glowGradient = ctx.createRadialGradient(
//               obj.x, obj.y, 0,
//               obj.x, obj.y, obj.radius * 4
//             );
//             glowGradient.addColorStop(0, "rgba(255, 255, 255, 0.3)");
//             glowGradient.addColorStop(1, "rgba(255, 255, 255, 0)");
            
//             ctx.fillStyle = glowGradient;
//             ctx.beginPath();
//             ctx.arc(obj.x, obj.y, obj.radius * 4, 0, Math.PI * 2);
//             ctx.fill();
//           }
//         }
//       });
      
//       // Draw sun
//       const sun = celestialObjects[0];
//       sun.pulsePhase += sun.pulseSpeed;
//       const pulseScale = 1 + Math.sin(sun.pulsePhase) * 0.1;
      
//       // Sun glow
//       const sunGradient = ctx.createRadialGradient(
//         sun.x, sun.y, 0,
//         sun.x, sun.y, sun.glowRadius * pulseScale
//       );
//       sunGradient.addColorStop(0, sun.color);
//       sunGradient.addColorStop(0.1, "rgba(253, 184, 19, 0.8)");
//       sunGradient.addColorStop(0.4, "rgba(253, 184, 19, 0.3)");
//       sunGradient.addColorStop(1, "rgba(253, 184, 19, 0)");
      
//       ctx.fillStyle = sunGradient;
//       ctx.beginPath();
//       ctx.arc(sun.x, sun.y, sun.glowRadius * pulseScale, 0, Math.PI * 2);
//       ctx.fill();
      
//       // Sun core
//       ctx.fillStyle = sun.color;
//       ctx.beginPath();
//       ctx.arc(sun.x, sun.y, sun.radius, 0, Math.PI * 2);
//       ctx.fill();
      
//       // Draw planets and moons
//       celestialObjects.forEach((obj, index) => {
//         if (index === 0 || obj.isStar || obj.isMoon) return; // Skip sun, stars, and moons for now
        
//         // Update planet position
//         obj.angle += obj.speed;
//         const x = obj.orbit.x + Math.cos(obj.angle) * obj.orbitRadius;
//         const y = obj.orbit.y + Math.sin(obj.angle) * obj.orbitRadius;
        
//         // Draw orbit
//         if (obj.orbit.visible) {
//           ctx.beginPath();
//           ctx.strokeStyle = "rgba(255, 255, 255, 0.1)";
//           ctx.arc(obj.orbit.x, obj.orbit.y, obj.orbitRadius, 0, Math.PI * 2);
//           ctx.stroke();
//         }
        
//         // Draw atmosphere if any
//         if (obj.atmosphere) {
//           ctx.fillStyle = obj.atmosphere.color;
//           ctx.beginPath();
//           ctx.arc(x, y, obj.atmosphere.radius, 0, Math.PI * 2);
//           ctx.fill();
//         }
        
//         // Draw planet
//         ctx.fillStyle = obj.color;
//         ctx.beginPath();
//         ctx.arc(x, y, obj.radius, 0, Math.PI * 2);
//         ctx.fill();
        
//         // Draw rings for Saturn
//         if (obj.rings) {
//           ctx.beginPath();
//           ctx.ellipse(
//             x, y, 
//             obj.rings.outerRadius, 
//             obj.rings.outerRadius / 3, 
//             Math.PI / 6, 0, Math.PI * 2
//           );
//           ctx.strokeStyle = obj.rings.color;
//           ctx.lineWidth = obj.rings.outerRadius - obj.rings.innerRadius;
//           ctx.stroke();
//         }
        
//         // Store updated position for moons
//         obj.currentX = x;
//         obj.currentY = y;
//       });
      
//       // Draw moons after planets are positioned
//       celestialObjects.forEach(obj => {
//         if (!obj.isMoon) return;
        
//         const planet = celestialObjects[obj.parentIndex];
        
//         // Update moon position relative to its planet
//         obj.angle += obj.speed;
//         const x = planet.currentX + Math.cos(obj.angle) * obj.orbitRadius;
//         const y = planet.currentY + Math.sin(obj.angle) * obj.orbitRadius;
        
//         // Draw moon orbit
//         ctx.beginPath();
//         ctx.strokeStyle = "rgba(255, 255, 255, 0.05)";
//         ctx.arc(planet.currentX, planet.currentY, obj.orbitRadius, 0, Math.PI * 2);
//         ctx.stroke();
        
//         // Draw moon
//         ctx.fillStyle = obj.color;
//         ctx.beginPath();
//         ctx.arc(x, y, obj.radius, 0, Math.PI * 2);
//         ctx.fill();
//       });
      
//       // Draw code blocks as floating elements
//       codeBlocks.forEach(block => {
//         block.rotation += block.rotationSpeed;
        
//         ctx.save();
//         ctx.translate(block.x, block.y);
//         ctx.rotate(block.rotation);
        
//         ctx.font = `${block.size}px monospace`;
//         ctx.fillStyle = block.color;
//         ctx.textAlign = "center";
//         ctx.textBaseline = "middle";
//         ctx.fillText(block.text, 0, 0);
        
//         ctx.restore();
//       });
      
//       // Process shooting stars
//       createShootingStar();
      
//       ctx.lineWidth = 2;
//       shootingStars.forEach((star, index) => {
//         star.x += Math.cos(star.angle) * star.speed;
//         star.y += Math.sin(star.angle) * star.speed;
        
//         const tailX = star.x - Math.cos(star.angle) * star.length;
//         const tailY = star.y - Math.sin(star.angle) * star.length;
        
//         const shootingStarGradient = ctx.createLinearGradient(
//           star.x, star.y, tailX, tailY
//         );
//         shootingStarGradient.addColorStop(0, "rgba(255, 255, 255, 0.8)");
//         shootingStarGradient.addColorStop(1, "rgba(255, 255, 255, 0)");
        
//         ctx.strokeStyle = shootingStarGradient;
//         ctx.beginPath();
//         ctx.moveTo(star.x, star.y);
//         ctx.lineTo(tailX, tailY);
//         ctx.stroke();
        
//         // Remove if off screen
//         if (star.y > window.innerHeight || star.x > window.innerWidth || star.x < 0) {
//           shootingStars.splice(index, 1);
//         }
//       });
      
//       // Interactive mouse effect - particles flowing toward cursor
//       if (frame % 5 === 0 && mousePosition.x !== 0) {
//         celestialObjects.push({
//           x: Math.random() * canvas.width,
//           y: Math.random() * canvas.height,
//           targetX: mousePosition.x,
//           targetY: mousePosition.y,
//           radius: Math.random() * 2 + 1,
//           speed: Math.random() * 2 + 1,
//           color: `rgba(${Math.random() * 100 + 155}, ${Math.random() * 100 + 155}, ${Math.random() * 255}, 0.7)`,
//           life: 100,
//           isParticle: true
//         });
//       }
      
//       // Update and draw particles
//       celestialObjects.forEach((obj, index) => {
//         if (!obj.isParticle) return;
        
//         // Calculate direction toward mouse
//         const dx = obj.targetX - obj.x;
//         const dy = obj.targetY - obj.y;
//         const distance = Math.sqrt(dx * dx + dy * dy);
        
//         // Move toward target
//         if (distance > 5) {
//           obj.x += (dx / distance) * obj.speed;
//           obj.y += (dy / distance) * obj.speed;
//         }
        
//         // Draw particle
//         ctx.beginPath();
//         ctx.fillStyle = obj.color;
//         ctx.arc(obj.x, obj.y, obj.radius, 0, Math.PI * 2);
//         ctx.fill();
        
//         // Reduce life and remove if expired
//         obj.life -= 1;
//         if (obj.life <= 0) {
//           celestialObjects.splice(index, 1);
//         }
//       });
      
//       animationId = requestAnimationFrame(renderFrame);
//     };
    
//     // Start animation
//     renderFrame();
    
//     // Cleanup
//     return () => {
//       cancelAnimationFrame(animationId);
//       window.removeEventListener('resize', resizeCanvas);
//     };
//   }, [mousePosition]);

//   // Tilt effect for profile image
//   useEffect(() => {
//     const handleMouseMove = (e) => {
//       const profileImg = document.getElementById("profile-img");
//       if (!profileImg) return;
//       const rect = profileImg.getBoundingClientRect();
//       const x = e.clientX - rect.left;
//       const y = e.clientY - rect.top;
//       const centerX = rect.width / 2;
//       const centerY = rect.height / 2;
//       const tiltX = (centerY - y) / 20;
//       const tiltY = (x - centerX) / 20;
//       profileImg.style.transform = `perspective(1000px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale(1.05)`;
//     };
    
//     const handleMouseLeave = () => {
//       const profileImg = document.getElementById("profile-img");
//       if (profileImg) profileImg.style.transform = "";
//     };
    
//     const imgContainer = document.getElementById("img-container");
//     if (imgContainer) {
//       imgContainer.addEventListener("mousemove", handleMouseMove);
//       imgContainer.addEventListener("mouseleave", handleMouseLeave);
//     }
    
//     return () => {
//       if (imgContainer) {
//         imgContainer.removeEventListener("mousemove", handleMouseMove);
//         imgContainer.removeEventListener("mouseleave", handleMouseLeave);
//       }
//     };
//   }, []);

//   // Animation variants
//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: { staggerChildren: 0.3, delayChildren: 0.2 },
//     },
//   };

//   const itemVariants = {
//     hidden: { y: 20, opacity: 0 },
//     visible: {
//       y: 0,
//       opacity: 1,
//       transition: { duration: 0.6 },
//     },
//   };

//   const buttonVariants = {
//     hover: {
//       scale: 1.05,
//       boxShadow: "0px 8px 20px rgba(99, 102, 241, 0.4)",
//       transition: { duration: 0.3 },
//     },
//     tap: { scale: 0.95 },
//   };

//   const gradientText = "bg-gradient-to-r from-pink-500 via-indigo-500 to-blue-500 text-transparent bg-clip-text";

//   return (
//     <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
//       {/* Space Background Canvas - positioned absolutely and covers full screen */}
//       <canvas 
//         ref={bgCanvasRef} 
//         className="absolute top-0 left-0 w-full h-full" 
//         style={{ zIndex: 0 }}
//       />
      
//       <div className="relative z-10 container mx-auto px-4 py-20">
//         <motion.div
//           className="flex flex-col md:flex-row items-center justify-between"
//           initial="hidden"
//           animate="visible"
//           variants={containerVariants}
//         >
//           <motion.div className="md:w-1/2 mb-12 md:mb-0 flex justify-center" variants={itemVariants}>
//             <div id="img-container" className="relative group transition-transform duration-300">
//               <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full blur-2xl opacity-60 group-hover:opacity-100"></div>
//               <img
//                 id="profile-img"
//                 src="/src/assets/bimoji.png"
//                 alt="Krish Moond"
//                 className="relative z-10 rounded-full w-64 h-64 object-cover shadow-2xl"
//               />
//             </div>
//           </motion.div>

//           <motion.div className="md:w-1/2 text-center md:text-left" variants={itemVariants}>
//             <motion.h1 className="text-5xl font-extrabold mb-4 text-white" variants={itemVariants}>
//               Hi, I'm <span className={gradientText}>Krish Moond</span>
//             </motion.h1>

//             <motion.h2 className="text-2xl text-indigo-200 mb-6" variants={itemVariants}>
//               <TypeAnimation
//                 sequence={[
//                   "Computer Science Student",
//                   1000,
//                   "Frontend Developer",
//                   1000,
//                   "UI/UX Enthusiast",
//                   1000,
//                   "Problem Solver",
//                   1000,
//                 ]}
//                 speed={50}
//                 repeat={Infinity}
//               />
//             </motion.h2>

//             <motion.p className="text-gray-300 mb-8 leading-relaxed" variants={itemVariants}>
//               Crafting delightful digital experiences with a blend of creative design and modern code.
//             </motion.p>

//             <motion.div className="flex flex-wrap gap-4 justify-center md:justify-start" variants={itemVariants}>
//               <motion.div variants={buttonVariants} whileHover="hover" whileTap="tap">
//                 <Link to="/contact" className="px-6 py-3 bg-indigo-600 text-white rounded-lg shadow-md flex items-center gap-2">
//                   <span>Contact Me</span>
//                   <FaEnvelope />
//                 </Link>
//               </motion.div>
//               <motion.div variants={buttonVariants} whileHover="hover" whileTap="tap">
//                 <Link to="/projects" className="px-6 py-3 border-2 border-indigo-400 text-indigo-200 rounded-lg flex items-center gap-2">
//                   <span>View Projects</span>
//                 </Link>
//               </motion.div>
//               <motion.div variants={buttonVariants} whileHover="hover" whileTap="tap" className="hidden md:block">
//                 <a href="/resume.pdf" download className="px-6 py-3 bg-pink-600 text-white rounded-lg flex items-center gap-2">
//                   <span>Download CV</span>
//                   <FaDownload />
//                 </a>
//               </motion.div>
//             </motion.div>

//             <motion.div className="flex mt-10 space-x-6 justify-center md:justify-start" variants={itemVariants}>
//               <motion.a href="https://github.com/KrishMoond" target="_blank" className="text-white hover:text-indigo-400" whileHover={{ scale: 1.2 }}>
//                 <FaGithub size={26} />
//               </motion.a>
//               <motion.a href="https://linkedin.com/in/krish-moond" target="_blank" className="text-white hover:text-blue-400" whileHover={{ scale: 1.2 }}>
//                 <FaLinkedin size={26} />
//               </motion.a>
//               <motion.a href="mailto:moondkrish921@gmail.com" className="text-white hover:text-red-400" whileHover={{ scale: 1.2 }}>
//                 <FaEnvelope size={26} />
//               </motion.a>
//               <motion.a href="tel:8708304851" className="text-white hover:text-green-400" whileHover={{ scale: 1.2 }}>
//                 <FaPhone size={26} />
//               </motion.a>
//             </motion.div>
//           </motion.div>
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default Home;