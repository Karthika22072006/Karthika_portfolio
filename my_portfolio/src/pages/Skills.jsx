import { motion } from "framer-motion";
import { Code, Palette, Smartphone, Rocket, Database, Globe, Zap, Shield, Monitor, Server, Brush, Beaker, GitBranch, Bug } from "lucide-react";
import Navbar from "../components/Navbar";

export default function Skills() {
  const skillCategories = [
    {
      icon: Monitor,
      title: "Frontend Development",
      color: "from-cyan-500 to-blue-500",
      skills: [
        { name: "HTML", level: 95 },
        { name: "CSS", level: 90 },
        { name: "React.js", level: 90 }
      ]
    },
    {
      icon: Server,
      title: "Backend Development",
      color: "from-purple-500 to-pink-500",
      skills: [
        { name: "Node.js", level: 85 },
        { name: "Express.js", level: 80 }
      ]
    },
    {
      icon: Brush,
      title: "UI/UX Design",
      color: "from-green-500 to-teal-500",
      skills: [
        { name: "Figma", level: 85 },
        { name: "Canva", level: 80 }
      ]
    },
    {
      icon: Beaker,
      title: "Testing",
      color: "from-orange-500 to-red-500",
      skills: [
        { name: "Jest", level: 80 },
        { name: "Vitest", level: 75 }
      ]
    }
  ];

  const additionalSkills = [
    { icon: GitBranch, name: "Git" },
    { icon: Bug, name: "Postman" },
    { icon: Zap, name: "Chrome DevTools" },
    { icon: Code, name: "VS Code" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#020617] via-[#0f172a] to-black">
      <Navbar />
      
      <section className="pt-24 pb-16 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Page Title */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              My <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Skills</span>
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              A comprehensive overview of my technical skills and expertise in modern web development
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-400 mx-auto rounded-full mt-6"></div>
          </motion.div>

          {/* Skill Categories */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: categoryIndex * 0.2 }}
                className="bg-white/5 backdrop-blur-md rounded-2xl p-8 border border-white/10"
              >
                {/* Category Header */}
                <div className="flex items-center mb-8">
                  <motion.div
                    className={`w-16 h-16 bg-gradient-to-r ${category.color} rounded-xl flex items-center justify-center mr-4`}
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <category.icon className="w-8 h-8 text-white" />
                  </motion.div>
                  <div>
                    <h3 className="text-2xl font-bold text-white">{category.title}</h3>
                  </div>
                </div>

                {/* Skills with Progress Bars */}
                <div className="space-y-6">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: categoryIndex * 0.2 + skillIndex * 0.1 }}
                    >
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-gray-300 font-medium">{skill.name}</span>
                        <span className="text-cyan-400 text-sm">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-white/10 rounded-full h-2 overflow-hidden">
                        <motion.div
                          className={`h-full bg-gradient-to-r ${category.color} rounded-full`}
                          initial={{ width: 0 }}
                          animate={{ width: `${skill.level}%` }}
                          transition={{ 
                            duration: 1, 
                            delay: categoryIndex * 0.2 + skillIndex * 0.1 + 0.5,
                            ease: "easeOut"
                          }}
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Additional Skills */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            <h2 className="text-3xl font-bold text-center text-white mb-12">Development Tools</h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {additionalSkills.map((skill, i) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1.2 + i * 0.1 }}
                  whileHover={{ y: -10, scale: 1.05 }}
                  className="bg-white/5 backdrop-blur-md rounded-xl p-6 border border-white/10 hover:border-cyan-400/40 transition-all text-center"
                >
                  <motion.div
                    className="w-14 h-14 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-xl flex items-center justify-center mx-auto mb-4"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <skill.icon className="w-7 h-7 text-white" />
                  </motion.div>
                  <h4 className="text-lg font-semibold text-white">{skill.name}</h4>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Learning Section */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.5 }}
            className="mt-16 text-center"
          >
            <div className="bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-3xl p-12 border border-white/10">
              <h3 className="text-2xl font-bold text-white mb-4">Always Learning</h3>
              <p className="text-gray-400 max-w-2xl mx-auto">
                I'm constantly expanding my skill set and staying up-to-date with the latest web technologies 
                and best practices. Currently exploring advanced React patterns, performance optimization, 
                and modern CSS techniques.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
