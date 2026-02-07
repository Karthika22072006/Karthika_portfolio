import { motion } from "framer-motion";
import { Download, Calendar, MapPin, Mail, Phone, GraduationCap, Briefcase, Award } from "lucide-react";
import Navbar from "../components/Navbar";
import resumePDF from "../assets/Karthika H.pdf";

export default function Resume() {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = resumePDF;
    link.download = 'Karthika_H_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const education = [
    {
      degree: "B.E Computer Science and Engineering",
      school: "Jeppiaar Institute of Technology",
      location: "Chennai",
      period: "2023 - 2027",
      gpa: "8.89"
    }
  ];

  const experience = [
    {
      title: "Trainee Developer Intern",
      company: "JIT Global Infosystems",
      location: "Porur, Tamilnadu",
      period: "June 2025 - Present",
      responsibilities: [
        "Developing and maintaining web applications using modern frontend technologies",
        "Implementing UI components and user interfaces with React and JavaScript",
        "Writing clean, testable, and maintainable code following best practices",
        "Collaborating with development team on full-stack projects and cloud technologies",
        "Gaining hands-on experience in enterprise-level applications and development workflows"
      ]
    }
  ];

  const certifications = [
    // {
    //   name: "React Developer Certification",
    //   issuer: "Meta",
    //   date: "2024"
    // },
    {
      name: "Data Science using Python",
      issuer: "NPTEL",
      date: "2024"
    },
    // {
    //   name: "JavaScript Algorithms and Data Structures",
    //   issuer: "freeCodeCamp",
    //   date: "2023"
    // }
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
              My <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Resume</span>
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-8">
              A comprehensive overview of my education, experience, and qualifications
            </p>
            <motion.button
              onClick={handleDownload}
              className="px-8 py-3 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 text-black font-semibold hover:from-cyan-400 hover:to-blue-400 transition-all transform hover:scale-105 flex items-center gap-2 mx-auto"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Download className="w-5 h-5" />
              Download PDF
            </motion.button>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-400 mx-auto rounded-full mt-8"></div>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-white/5 backdrop-blur-md rounded-2xl p-8 border border-white/10 mb-12"
          >
            <h2 className="text-2xl font-bold text-white mb-6">Contact Information</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-cyan-400" />
                <span className="text-gray-300">kathikak301@gmail.com</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-cyan-400" />
                <span className="text-gray-300">+91 9786467277</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-cyan-400" />
                <span className="text-gray-300">Chengalpattu, Tamilnadu, India</span>
              </div>
              <div className="flex items-center gap-3">
                <Calendar className="w-5 h-5 text-cyan-400" />
                <span className="text-gray-300">Available for work</span>
              </div>
            </div>
          </motion.div>

          {/* Education */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mb-12"
          >
            <h2 className="text-3xl font-bold text-white mb-8 flex items-center">
              <GraduationCap className="w-8 h-8 text-cyan-400 mr-3" />
              Education
            </h2>
            
            {education.map((edu, i) => (
              <div key={i} className="bg-white/5 backdrop-blur-md rounded-2xl p-8 border border-white/10">
                <div className="flex flex-wrap justify-between items-start mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">{edu.degree}</h3>
                    <p className="text-xl text-cyan-400">{edu.school}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-gray-400 mb-1">{edu.period}</p>
                    <p className="text-gray-400">{edu.location}</p>
                    <p className="text-cyan-400 font-semibold">GPA: {edu.gpa}</p>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>

          {/* Experience */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mb-12"
          >
            <h2 className="text-3xl font-bold text-white mb-8 flex items-center">
              <Briefcase className="w-8 h-8 text-cyan-400 mr-3" />
              Experience
            </h2>
            
            <div className="space-y-6">
              {experience.map((exp, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.8 + i * 0.2 }}
                  className="bg-white/5 backdrop-blur-md rounded-2xl p-8 border border-white/10"
                >
                  <div className="flex flex-wrap justify-between items-start mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-2">{exp.title}</h3>
                      <p className="text-xl text-cyan-400">{exp.company}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-gray-400 mb-1">{exp.period}</p>
                      <p className="text-gray-400">{exp.location}</p>
                    </div>
                  </div>
                  
                  <ul className="space-y-2">
                    {exp.responsibilities.map((resp, j) => (
                      <li key={j} className="text-gray-300 flex items-start">
                        <span className="text-cyan-400 mr-2">•</span>
                        {resp}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Certifications */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            <h2 className="text-3xl font-bold text-white mb-8 flex items-center">
              <Award className="w-8 h-8 text-cyan-400 mr-3" />
              Certifications
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              {certifications.map((cert, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1.2 + i * 0.1 }}
                  className="bg-white/5 backdrop-blur-md rounded-xl p-6 border border-white/10"
                >
                  <h3 className="text-xl font-bold text-white mb-2">{cert.name}</h3>
                  <p className="text-gray-400">{cert.issuer}</p>
                  <p className="text-cyan-400 text-sm mt-2">{cert.date}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
