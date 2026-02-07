import { motion } from "framer-motion";
import { Code, Heart, Lightbulb, Users } from "lucide-react";
import Navbar from "../components/Navbar";

export default function About() {
  const values = [
    {
      icon: Code,
      title: "Clean Code",
      description: "Writing maintainable, scalable, and efficient code that follows best practices."
    },
    {
      icon: Heart,
      title: "User-Centric",
      description: "Always putting the user experience first and creating intuitive interfaces."
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "Continuously learning and implementing new technologies and approaches."
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "Working effectively in teams and communicating ideas clearly."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#020617] via-[#0f172a] to-black">
      <Navbar />
      
      <section className="pt-24 pb-16 px-6">
        <div className="max-w-6xl mx-auto">
          {/* Page Title */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              About <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Me</span>
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-400 mx-auto rounded-full"></div>
          </motion.div>

          {/* Main Content */}
          <div className="grid md:grid-cols-2 gap-12 items-start mb-16">
            {/* About Text */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h2 className="text-3xl font-bold text-white mb-6">
                Passionate Frontend Developer
              </h2>
              
              <div className="space-y-4 text-gray-300 leading-relaxed">
                <p>
                 I am a passionate software developer with a strong foundation in frontend and backend development, focused on building scalable, user-centric applications with clean architecture.
                </p>
                
                <p>  
                 I work across React, Tailwind CSS, backend technologies, cloud platforms, and testing tools, transforming ideas into reliable, secure, and high-performance digital solutions.
                </p>
                
                <p>
               Along with development, I design intuitive interfaces using Figma, follow testing best practices, and continuously explore cloud and modern technologies to grow as a versatile developer.s and tutorials.
                </p>
              </div>
            </motion.div>

                      </div>

          {/* Internship Experience */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mt-16"
          >
            <h2 className="text-3xl font-bold text-white mb-8">Professional Experience</h2>
            
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
              className="bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-2xl p-8 border border-white/10"
            >
              <div className="flex flex-wrap justify-between items-start mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">Trainee Developer Intern</h3>
                  <p className="text-xl text-cyan-400">JIT Global</p>
                </div>
                <div className="text-right">
                  <p className="text-gray-400">June 16, 2024 - Present</p>
                  <p className="text-cyan-400 font-semibold">8+ Months</p>
                </div>
              </div>
              
              <div className="space-y-3">
                <p className="text-gray-300">
                  Currently working as a Trainee Developer Intern at JIT Global, gaining hands-on experience in full-stack development, 
                  cloud technologies, and enterprise-level applications.
                </p>
                <div className="grid md:grid-cols-2 gap-4 mt-6">
                  <div className="space-y-2">
                    <h4 className="text-lg font-semibold text-white">Key Responsibilities:</h4>
                    <ul className="space-y-1 text-gray-300">
                      <li className="flex items-start">
                        <span className="text-cyan-400 mr-2">•</span>
                        Developing and maintaining web applications
                      </li>
                      <li className="flex items-start">
                        <span className="text-cyan-400 mr-2">•</span>
                        Implementing UI components and user interfaces
                      </li>
                      <li className="flex items-start">
                        <span className="text-cyan-400 mr-2">•</span>
                        Writing clean, testable, and maintainable code
                      </li>
                    </ul>
                  </div>
                  <div className="space-y-2">
                    <h4 className="text-lg font-semibold text-white">Technologies Used:</h4>
                    <ul className="space-y-1 text-gray-300">
                      <li className="flex items-start">
                        <span className="text-cyan-400 mr-2">•</span>
                        Frontend: React, JavaScript, CSS
                      </li>
                      <li className="flex items-start">
                        <span className="text-cyan-400 mr-2">•</span>
                        Backend: Node.js, Express
                      </li>
                      <li className="flex items-start">
                        <span className="text-cyan-400 mr-2">•</span>
                        Cloud & Testing: AWS, Jest, CI/CD
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Values Section */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
          >
            <h2 className="text-3xl font-bold text-center text-white mb-12">My Values</h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, i) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.4 + i * 0.1 }}
                  whileHover={{ y: -10 }}
                  className="bg-white/5 backdrop-blur-md rounded-2xl p-8 border border-white/10 hover:border-cyan-400/40 transition-all"
                >
                  <motion.div
                    className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-xl flex items-center justify-center mb-6"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <value.icon className="w-8 h-8 text-white" />
                  </motion.div>
                  <h3 className="text-xl font-bold text-white mb-4">{value.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
