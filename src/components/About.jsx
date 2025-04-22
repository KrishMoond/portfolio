// import React, { useEffect, useRef, useState } from "react";
// import { FaCode, FaLaptopCode, FaServer, FaUsers } from "react-icons/fa";
// import { motion } from "framer-motion";
// import { Activity, Code, Database, FileCode, GitBranch, GitPullRequest, HardDrive, Layers, Server, Wifi } from "lucide-react";

// const techItems = [
//   { component: Code, color: "#3B82F6" },
//   { component: Database, color: "#10B981" },
//   { component: Server, color: "#EC4899" },
//   { component: Wifi, color: "#F59E0B" },
//   { component: HardDrive, color: "#8B5CF6" },
//   { component: FileCode, color: "#6366F1" },
//   { component: Layers, color: "#EF4444" },
//   { component: GitBranch, color: "#14B8A6" },
//   { component: GitPullRequest, color: "#F97316" },
//   { component: Activity, color: "#06B6D4" }
// ];

// export const About = () => {
//   const canvasRef = useRef(null);
//   const [text, setText] = useState("");
//   const [isTypingComplete, setIsTypingComplete] = useState(false);
//   // const message = "Welcome to My Digital Universe! 🌌";

  

//   useEffect(() => {
//     const message = "Welcome to My Digital Universe! 🌌";
//     let i = 0;
//     setText(""); // Reset text
//     setIsTypingComplete(false);

//     const interval = setInterval(() => {
//       if (i < message.length) {
//         setText((prev) => prev + message[i]);
//         i++;
//       } else {
//         setIsTypingComplete(true);
//         clearInterval(interval);
//       }
//     }, 100);

//     return () => clearInterval(interval);
//   }, []);

//   useEffect(() => {
//     const canvas = canvasRef.current;
//     const ctx = canvas.getContext("2d");
//     const stars = [];
//     const numStars = 100;

//     const handleResize = () => {
//       canvas.width = window.innerWidth;
//       canvas.height = window.innerHeight;
//     };

//     window.addEventListener("resize", handleResize);
//     handleResize();

//     class Star {
//       constructor() {
//         this.x = Math.random() * canvas.width;
//         this.y = Math.random() * canvas.height;
//         this.size = Math.random() * 2 + 0.5;
//         this.speedX = Math.random() * 0.3 - 0.15;
//         this.speedY = Math.random() * 0.3 - 0.15;
//         this.opacity = Math.random() * 0.5 + 0.2;
//       }

//       update() {
//         this.x += this.speedX;
//         this.y += this.speedY;

//         if (this.x > canvas.width) this.x = 0;
//         if (this.x < 0) this.x = canvas.width;
//         if (this.y > canvas.height) this.y = 0;
//         if (this.y < 0) this.y = canvas.height;
//       }

//       draw() {
//         ctx.beginPath();
//         ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
//         ctx.fillStyle = `rgba(255, 255, 255, ${this.opacity})`;
//         ctx.fill();
//       }
//     }

//     for (let i = 0; i < numStars; i++) {
//       stars.push(new Star());
//     }

//     const drawCircuitLines = () => {
//       const gridSize = 30;
      
//       ctx.strokeStyle = "rgba(40, 82, 175, 0.2)";
//       ctx.lineWidth = 1;
      
//       for (let y = 0; y < canvas.height; y += gridSize) {
//         if (Math.random() > 0.7) continue;
        
//         ctx.beginPath();
//         ctx.moveTo(0, y);
        
//         let x = 0;
//         while (x < canvas.width) {
//           const segmentLength = Math.random() * 100 + 50;
//           const gap = Math.random() * 30 + 10;
          
//           ctx.lineTo(x + segmentLength, y);
//           x += segmentLength + gap;
//           ctx.moveTo(x, y);
//         }
        
//         ctx.stroke();
//       }
      
//       for (let x = 0; x < canvas.width; x += gridSize) {
//         if (Math.random() > 0.7) continue;
        
//         ctx.beginPath();
//         ctx.moveTo(x, 0);
        
//         let y = 0;
//         while (y < canvas.height) {
//           const segmentLength = Math.random() * 100 + 50;
//           const gap = Math.random() * 30 + 10;
          
//           ctx.lineTo(x, y + segmentLength);
//           y += segmentLength + gap;
//           ctx.moveTo(x, y);
//         }
        
//         ctx.stroke();
//       }
      
//       ctx.fillStyle = "rgba(56, 189, 248, 0.5)";
//       for (let x = 0; x < canvas.width; x += gridSize) {
//         for (let y = 0; y < canvas.height; y += gridSize) {
//           if (Math.random() > 0.1) continue;
          
//           ctx.beginPath();
//           ctx.arc(x, y, 2, 0, Math.PI * 2);
//           ctx.fill();
//         }
//       }
//     };

//     const animate = () => {
//       ctx.clearRect(0, 0, canvas.width, canvas.height);
//       drawCircuitLines();
      
//       stars.forEach((star) => {
//         star.update();
//         star.draw();
//       });

//       requestAnimationFrame(animate);
//     };

//     animate();

//     return () => {
//       window.removeEventListener("resize", handleResize);
//     };
//   }, []);

//   return (
//     <section
//       id="about"
//       className="relative py-16 bg-gray-100 dark:bg-gray-900 transition-colors overflow-hidden w-full min-h-screen"
//     >
//       <canvas ref={canvasRef} className="absolute inset-0 z-0 bg-gray-900" />
      
//       <div className="absolute inset-0 overflow-hidden z-0 opacity-60 pointer-events-none">
//         {techItems.map((item, index) => {
//           const Icon = item.component;
//           const randomX = Math.random() * 100;
//           const randomY = Math.random() * 100;
//           const scale = 0.5 + Math.random() * 1.5;
          
//           return (
//             <motion.div
//               key={index}
//               className="absolute text-white"
//               style={{ 
//                 left: `${randomX}%`, 
//                 top: `${randomY}%`,
//                 color: item.color,
//                 opacity: 0.7
//               }}
//               animate={{
//                 x: [20, -20, 30, -30, 10, -10, 0],
//                 y: [10, -20, 30, -10, 20, -30, 0],
//                 rotate: [0, 5, -5, 3, -3, 0]
//               }}
//               transition={{
//                 duration: 20 + Math.random() * 30,
//                 repeat: Infinity,
//                 repeatType: "reverse",
//                 ease: "easeInOut"
//               }}
//             >
//               <Icon size={20 * scale} />
//             </motion.div>
//           );
//         })}
//       </div>

//       <div className="container mx-auto px-4 relative z-10">
//         <motion.h2
//           initial={{ opacity: 0, y: -30 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           className="text-4xl font-bold text-center mb-12 text-gray-800 dark:text-white"
//         >
//           <span className="inline-block">
//             {text}
//             {!isTypingComplete && (
//               <span className="inline-block w-1 h-5 ml-1 bg-blue-500 animate-pulse" />
//             )}
//           </span>
//         </motion.h2>

//         <div className="grid md:grid-cols-2 gap-8">
//           <motion.div
//             initial={{ opacity: 0, x: -40 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.6 }}
//             className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-xl"
//           >
//             <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white">
//               Who I Am
//             </h3>
//             <p className="text-gray-600 dark:text-gray-300 mb-4">
//               I'm a Computer Science and Engineering student at LPU with a
//               passion for building responsive and user-friendly web
//               applications.
//             </p>
//             <p className="text-gray-600 dark:text-gray-300">
//               I love diving into programming fundamentals, data structures, and
//               real-world web tech. Always hungry to learn and take on challenges.
//             </p>
//           </motion.div>

//           <motion.div
//             initial={{ opacity: 0, x: 40 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.6 }}
//             className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-xl"
//           >
//             <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white">
//               What I Do
//             </h3>
//             <div className="grid grid-cols-2 gap-4">
//               {[
//                 { icon: <FaCode />, title: "Web Development", text: "Creating responsive websites" },
//                 { icon: <FaLaptopCode />, title: "Frontend", text: "React, JavaScript, Tailwind" },
//                 { icon: <FaServer />, title: "Backend", text: "PHP, MySQL, Node.js" },
//                 { icon: <FaUsers />, title: "Team Projects", text: "Collaboration & Git" },
//               ].map((item, i) => (
//                 <motion.div
//                   key={i}
//                   whileHover={{ scale: 1.05 }}
//                   className="flex items-start space-x-3"
//                 >
//                   <div className="bg-blue-100 dark:bg-blue-900 p-2 rounded-md text-blue-600 dark:text-blue-400">
//                     {item.icon}
//                   </div>
//                   <div>
//                     <h4 className="font-medium text-gray-800 dark:text-white">{item.title}</h4>
//                     <p className="text-sm text-gray-600 dark:text-gray-300">{item.text}</p>
//                   </div>
//                 </motion.div>
//               ))}
//             </div>
//           </motion.div>
//         </div>

//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           className="mt-12 bg-white dark:bg-gray-800 p-6 rounded-lg shadow-xl"
//         >
//           <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white">Training</h3>
//           <div className="border-l-4 border-blue-600 dark:border-blue-400 pl-4">
//             <h4 className="font-medium text-gray-800 dark:text-white">Summer Training - Board Infinity</h4>
//             <p className="text-sm text-gray-500 dark:text-gray-400">May 2024 - July 2024</p>
//             <ul className="mt-2 space-y-2 text-gray-600 dark:text-gray-300 list-disc list-inside">
//               <li>JavaScript for Web Development</li>
//               <li>Mastered DOM manipulation & async JS</li>
//               <li>Created interactive apps</li>
//               <li>Worked with APIs, events, and local storage</li>
//               <li>Used Git for version control</li>
//             </ul>
//           </div>
//         </motion.div>

//         <motion.div
//           initial={{ opacity: 0, scale: 0.8 }}
//           whileInView={{ opacity: 1, scale: 1 }}
//           transition={{ delay: 0.3, duration: 0.6 }}
//           className="text-center mt-10"
//         >
           
//           <motion.button
//             whileHover={{ scale: 1.1 }}
//             whileTap={{ scale: 0.95 }}
//             className="bg-blue-600 text-white px-6 py-3 rounded-full text-lg font-semibold shadow-md hover:bg-blue-700 transition"
//           >
            
//             Let's Connect 🚀
           
            
//           </motion.button>
          
          
//         </motion.div>
//       </div>
//     </section>
//   );
// };


import React, { useEffect, useRef, useState } from "react";
import { FaCode, FaLaptopCode, FaServer, FaUsers } from "react-icons/fa";
import { motion } from "framer-motion";
import { Activity, Code, Database, FileCode, GitBranch, GitPullRequest, HardDrive, Layers, Server, Wifi } from "lucide-react";

const techItems = [
  { component: Code, color: "#3B82F6" },
  { component: Database, color: "#10B981" },
  { component: Server, color: "#EC4899" },
  { component: Wifi, color: "#F59E0B" },
  { component: HardDrive, color: "#8B5CF6" },
  { component: FileCode, color: "#6366F1" },
  { component: Layers, color: "#EF4444" },
  { component: GitBranch, color: "#14B8A6" },
  { component: GitPullRequest, color: "#F97316" },
  { component: Activity, color: "#06B6D4" }
];

export const About = () => {
  const canvasRef = useRef(null);
  const [text, setText] = useState("");
  const [isTypingComplete, setIsTypingComplete] = useState(false);

  useEffect(() => {
    const message = "Welcome to My Digital Universe! 🌌";
    let i = 0;
    setText(""); // Reset text
    setIsTypingComplete(false);

    const interval = setInterval(() => {
      if (i < message.length) {
        setText((prev) => prev + message[i]);
        i++;
      } else {
        setIsTypingComplete(true);
        clearInterval(interval);
      }
    }, 100);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const stars = [];
    const numStars = 100;

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    class Star {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 2 + 0.5;
        this.speedX = Math.random() * 0.3 - 0.15;
        this.speedY = Math.random() * 0.3 - 0.15;
        this.opacity = Math.random() * 0.5 + 0.2;
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;

        if (this.x > canvas.width) this.x = 0;
        if (this.x < 0) this.x = canvas.width;
        if (this.y > canvas.height) this.y = 0;
        if (this.y < 0) this.y = canvas.height;
      }

      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${this.opacity})`;
        ctx.fill();
      }
    }

    for (let i = 0; i < numStars; i++) {
      stars.push(new Star());
    }

    const drawCircuitLines = () => {
      const gridSize = 30;
      
      ctx.strokeStyle = "rgba(40, 82, 175, 0.2)";
      ctx.lineWidth = 1;
      
      for (let y = 0; y < canvas.height; y += gridSize) {
        if (Math.random() > 0.7) continue;
        
        ctx.beginPath();
        ctx.moveTo(0, y);
        
        let x = 0;
        while (x < canvas.width) {
          const segmentLength = Math.random() * 100 + 50;
          const gap = Math.random() * 30 + 10;
          
          ctx.lineTo(x + segmentLength, y);
          x += segmentLength + gap;
          ctx.moveTo(x, y);
        }
        
        ctx.stroke();
      }
      
      for (let x = 0; x < canvas.width; x += gridSize) {
        if (Math.random() > 0.7) continue;
        
        ctx.beginPath();
        ctx.moveTo(x, 0);
        
        let y = 0;
        while (y < canvas.height) {
          const segmentLength = Math.random() * 100 + 50;
          const gap = Math.random() * 30 + 10;
          
          ctx.lineTo(x, y + segmentLength);
          y += segmentLength + gap;
          ctx.moveTo(x, y);
        }
        
        ctx.stroke();
      }
      
      ctx.fillStyle = "rgba(56, 189, 248, 0.5)";
      for (let x = 0; x < canvas.width; x += gridSize) {
        for (let y = 0; y < canvas.height; y += gridSize) {
          if (Math.random() > 0.1) continue;
          
          ctx.beginPath();
          ctx.arc(x, y, 2, 0, Math.PI * 2);
          ctx.fill();
        }
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      drawCircuitLines();
      
      stars.forEach((star) => {
        star.update();
        star.draw();
      });

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Handle click to scroll to contact section
  const handleConnectClick = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    } else {
      console.warn("Contact section (#contact) not found on this page.");
    }
  };

  return (
    <section
      id="about"
      className="relative py-16 bg-gray-100 dark:bg-gray-900 transition-colors overflow-hidden w-full min-h-screen"
    >
      <canvas ref={canvasRef} className="absolute inset-0 z-0 bg-gray-900" />
      
      <div className="absolute inset-0 overflow-hidden z-0 opacity-60 pointer-events-none">
        {techItems.map((item, index) => {
          const Icon = item.component;
          const randomX = Math.random() * 100;
          const randomY = Math.random() * 100;
          const scale = 0.5 + Math.random() * 1.5;
          
          return (
            <motion.div
              key={index}
              className="absolute text-white"
              style={{ 
                left: `${randomX}%`, 
                top: `${randomY}%`,
                color: item.color,
                opacity: 0.7
              }}
              animate={{
                x: [20, -20, 30, -30, 10, -10, 0],
                y: [10, -20, 30, -10, 20, -30, 0],
                rotate: [0, 5, -5, 3, -3, 0]
              }}
              transition={{
                duration: 20 + Math.random() * 30,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut"
              }}
            >
              <Icon size={20 * scale} />
            </motion.div>
          );
        })}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-center mb-12 text-gray-800 dark:text-white"
        >
          <span className="inline-block">
            {text}
            {!isTypingComplete && (
              <span className="inline-block w-1 h-5 ml-1 bg-blue-500 animate-pulse" />
            )}
          </span>
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-xl"
          >
            <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white">
              Who I Am
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              I'm a Computer Science and Engineering student at LPU with a
              passion for building responsive and user-friendly web
              applications.
            </p>
            <p className="text-gray-600 dark:text-gray-300">
              I love diving into programming fundamentals, data structures, and
              real-world web tech. Always hungry to learn and take on challenges.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-xl"
          >
            <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white">
              What I Do
            </h3>
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: <FaCode />, title: "Web Development", text: "Creating responsive websites" },
                { icon: <FaLaptopCode />, title: "Frontend", text: "React, JavaScript, Tailwind" },
                { icon: <FaServer />, title: "Backend", text: "PHP, MySQL, Node.js" },
                { icon: <FaUsers />, title: "Team Projects", text: "Collaboration & Git" },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  whileHover={{ scale: 1.05 }}
                  className="flex items-start space-x-3"
                >
                  <div className="bg-blue-100 dark:bg-blue-900 p-2 rounded-md text-blue-600 dark:text-blue-400">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800 dark:text-white">{item.title}</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-300">{item.text}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mt-12 bg-white dark:bg-gray-800 p-6 rounded-lg shadow-xl"
        >
          <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white">Training</h3>
          <div className="border-l-4 border-blue-600 dark:border-blue-400 pl-4">
            <h4 className="font-medium text-gray-800 dark:text-white">Summer Training - Board Infinity</h4>
            <p className="text-sm text-gray-500 dark:text-gray-400">May 2024 - July 2024</p>
            <ul className="mt-2 space-y-2 text-gray-600 dark:text-gray-300 list-disc list-inside">
              <li>JavaScript for Web Development</li>
              <li>Mastered DOM manipulation & async JS</li>
              <li>Created interactive apps</li>
              <li>Worked with APIs, events, and local storage</li>
              <li>Used Git for version control</li>
            </ul>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-center mt-10"
        >
          <motion.button
            onClick={handleConnectClick}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="bg-blue-600 text-white px-6 py-3 rounded-full text-lg font-semibold shadow-md hover:bg-blue-700 transition"
          >
            Let's Connect 🚀
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};