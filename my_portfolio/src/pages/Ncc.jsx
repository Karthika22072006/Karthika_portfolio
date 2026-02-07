import { motion } from "framer-motion";
import { Medal, Users, Target, Shield, Award, Heart } from "lucide-react";
import Navbar from "../components/Navbar";

export default function Ncc() {
  const achievements = [
    {
      icon: Medal,
      title: "Best Cadet Award",
      description: "Recognized as the best cadet in the battalion for outstanding performance and leadership.",
      year: "2023"
    },
    {
      icon: Shield,
      title: "Camp Leadership",
      description: "Led a team of 50 cadets during the annual training camp with excellence.",
      year: "2022"
    },
    {
      icon: Award,
      title: "Community Service",
      description: "Awarded for exceptional contribution to community development programs.",
      year: "2023"
    }
  ];

  const skills = [
    {
      icon: Users,
      title: "Team Leadership",
      description: "Developed strong leadership skills through managing teams and coordinating activities."
    },
    {
      icon: Target,
      title: "Discipline & Focus",
      description: "Cultivated mental discipline and the ability to focus under pressure."
    },
    {
      icon: Heart,
      title: "Social Responsibility",
      description: "Learned the importance of giving back to society and community service."
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
              NCC & <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Leadership</span>
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              My journey as an NCC cadet and the leadership skills I've developed
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-400 mx-auto rounded-full mt-6"></div>
          </motion.div>

          {/* Hero Section */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-3xl p-12 border border-white/10 mb-16"
          >
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-white mb-6">My NCC Journey</h2>
                <div className="space-y-4 text-gray-300 leading-relaxed">
                  <p>
                    As an NCC cadet, I had the privilege of being part of an organization that shapes young minds into responsible citizens and leaders. The National Cadet Corps played a significant role in developing my character and instilling core values that continue to guide both my personal and professional life.
                  </p>
                  <p>
                    As an NCC cadet, I had the privilege of being part of an organization that shapes young minds into responsible citizens and leaders. The National Cadet Corps played a significant role in developing my character and instilling core values that continue to guide both my personal and professional life.
                  </p>
                </div>
              </div>
              
              <div className="text-center">
                <div className="w-64 h-64 mx-auto bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-full flex items-center justify-center border-4 border-white/20">
                  <div className="text-center">
                    <div className="text-6xl mb-2">🎖️</div>
                    <div className="text-white font-bold">NCC Cadet</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Achievements */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mb-16"
          >
            <h2 className="text-3xl font-bold text-white mb-8">Achievements & Recognition</h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              {achievements.map((achievement, i) => (
                <motion.div
                  key={achievement.title}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.6 + i * 0.1 }}
                  whileHover={{ y: -10 }}
                  className="bg-white/5 backdrop-blur-md rounded-2xl p-8 border border-white/10 hover:border-cyan-400/40 transition-all"
                >
                  <motion.div
                    className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-xl flex items-center justify-center mb-6"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <achievement.icon className="w-8 h-8 text-white" />
                  </motion.div>
                  <h3 className="text-xl font-bold text-white mb-3">{achievement.title}</h3>
                  <p className="text-gray-400 mb-4">{achievement.description}</p>
                  <div className="text-cyan-400 font-semibold">{achievement.year}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Skills Developed */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mb-16"
          >
            <h2 className="text-3xl font-bold text-white mb-8">Skills & Values Developed</h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              {skills.map((skill, i) => (
                <motion.div
                  key={skill.title}
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1 + i * 0.2 }}
                  className="bg-white/5 backdrop-blur-md rounded-2xl p-8 border border-white/10"
                >
                  <motion.div
                    className="w-16 h-16 bg-gradient-to-r from-green-500 to-teal-500 rounded-xl flex items-center justify-center mb-6"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <skill.icon className="w-8 h-8 text-white" />
                  </motion.div>
                  <h3 className="text-xl font-bold text-white mb-3">{skill.title}</h3>
                  <p className="text-gray-400">{skill.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Impact Statement */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-3xl p-12 border border-white/10 text-center"
          >
            <h2 className="text-3xl font-bold text-white mb-6">Impact on Professional Life</h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              The discipline, leadership, and teamwork skills I've developed through NCC have been 
              invaluable in my professional journey as a developer. They've taught me the importance of 
              collaboration, attention to detail, and taking ownership of my work. These qualities help 
              me excel in team environments and deliver high-quality solutions.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
