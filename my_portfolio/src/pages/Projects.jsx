import { motion } from "framer-motion";
import { ExternalLink, Github, Star, Calendar } from "lucide-react";
import Navbar from "../components/Navbar";

export default function Projects() {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A modern e-commerce platform built with React and Node.js, featuring user authentication, payment integration, and responsive design.",
      image: "🛒",
      tech: ["React", "Node.js", "MongoDB", "Stripe", "Tailwind CSS"],
      github: "#",
      live: "#",
      featured: true,
      date: "2024"
    },
    {
      title: "Task Management App",
      description: "A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.",
      image: "📋",
      tech: ["React", "Firebase", "Framer Motion", "Material UI"],
      github: "#",
      live: "#",
      featured: true,
      date: "2024"
    },
    {
      title: "Weather Dashboard",
      description: "A beautiful weather dashboard with location-based forecasts, interactive maps, and detailed weather analytics.",
      image: "🌤️",
      tech: ["JavaScript", "API Integration", "Chart.js", "CSS3"],
      github: "#",
      live: "#",
      featured: false,
      date: "2023"
    },
    {
      title: "Portfolio Website",
      description: "A personal portfolio website with smooth animations, responsive design, and optimized performance.",
      image: "🎨",
      tech: ["React", "Tailwind CSS", "Framer Motion", "Vite"],
      github: "#",
      live: "#",
      featured: false,
      date: "2024"
    },
    {
      title: "Social Media Dashboard",
      description: "Analytics dashboard for social media management with data visualization and reporting features.",
      image: "📊",
      tech: ["React", "D3.js", "Node.js", "Express"],
      github: "#",
      live: "#",
      featured: false,
      date: "2023"
    },
    {
      title: "Blog Platform",
      description: "A full-featured blogging platform with markdown support, comment system, and admin dashboard.",
      image: "📝",
      tech: ["Next.js", "MongoDB", "Tailwind CSS", "MDX"],
      github: "#",
      live: "#",
      featured: false,
      date: "2023"
    }
  ];

  const featuredProjects = projects.filter(project => project.featured);
  const otherProjects = projects.filter(project => !project.featured);

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
              My <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Projects</span>
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              A showcase of my recent work and personal projects
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-400 mx-auto rounded-full mt-6"></div>
          </motion.div>

          {/* Featured Projects */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-16"
          >
            <h2 className="text-3xl font-bold text-white mb-8 flex items-center">
              <Star className="w-8 h-8 text-yellow-400 mr-3" />
              Featured Projects
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              {featuredProjects.map((project, i) => (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 + i * 0.2 }}
                  whileHover={{ y: -10 }}
                  className="bg-white/5 backdrop-blur-md rounded-2xl overflow-hidden border border-white/10 hover:border-cyan-400/40 transition-all"
                >
                  {/* Project Image */}
                  <div className="h-48 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 flex items-center justify-center text-6xl">
                    {project.image}
                  </div>
                  
                  {/* Project Content */}
                  <div className="p-8">
                    <div className="flex justify-between items-start mb-4">
                      <h3 className="text-2xl font-bold text-white">{project.title}</h3>
                      <span className="text-sm text-gray-400 flex items-center">
                        <Calendar className="w-4 h-4 mr-1" />
                        {project.date}
                      </span>
                    </div>
                    
                    <p className="text-gray-400 mb-6 leading-relaxed">
                      {project.description}
                    </p>
                    
                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 rounded-full bg-white/10 text-sm text-gray-300 border border-white/20"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    
                    {/* Links */}
                    <div className="flex gap-4">
                      <motion.a
                        href={project.github}
                        className="flex items-center gap-2 px-4 py-2 rounded-lg border border-white/20 text-white hover:bg-white/10 transition-all"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Github className="w-4 h-4" />
                        Code
                      </motion.a>
                      <motion.a
                        href={project.live}
                        className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500 text-black font-semibold hover:from-cyan-400 hover:to-blue-400 transition-all"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <ExternalLink className="w-4 h-4" />
                        Live Demo
                      </motion.a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Other Projects */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <h2 className="text-3xl font-bold text-white mb-8">Other Projects</h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {otherProjects.map((project, i) => (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1 + i * 0.1 }}
                  whileHover={{ y: -10, scale: 1.02 }}
                  className="bg-white/5 backdrop-blur-md rounded-xl overflow-hidden border border-white/10 hover:border-cyan-400/40 transition-all"
                >
                  {/* Project Image */}
                  <div className="h-32 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 flex items-center justify-center text-4xl">
                    {project.image}
                  </div>
                  
                  {/* Project Content */}
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-3">
                      <h3 className="text-lg font-bold text-white">{project.title}</h3>
                      <span className="text-xs text-gray-400">{project.date}</span>
                    </div>
                    
                    <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                      {project.description}
                    </p>
                    
                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-1 mb-4">
                      {project.tech.slice(0, 3).map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 rounded-full bg-white/10 text-xs text-gray-300"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.tech.length > 3 && (
                        <span className="px-2 py-1 rounded-full bg-white/10 text-xs text-gray-300">
                          +{project.tech.length - 3}
                        </span>
                      )}
                    </div>
                    
                    {/* Links */}
                    <div className="flex gap-2">
                      <motion.a
                        href={project.github}
                        className="flex items-center gap-1 px-3 py-1 rounded border border-white/20 text-white hover:bg-white/10 transition-all text-sm"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Github className="w-3 h-3" />
                        Code
                      </motion.a>
                      <motion.a
                        href={project.live}
                        className="flex items-center gap-1 px-3 py-1 rounded bg-gradient-to-r from-cyan-500 to-blue-500 text-black font-semibold text-sm hover:from-cyan-400 hover:to-blue-400 transition-all"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <ExternalLink className="w-3 h-3" />
                        Live
                      </motion.a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.5 }}
            className="mt-16 text-center"
          >
            <div className="bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-3xl p-12 border border-white/10">
              <h3 className="text-2xl font-bold text-white mb-4">Interested in Collaboration?</h3>
              <p className="text-gray-400 mb-6">
                I'm always open to discussing new projects and opportunities.
              </p>
              <motion.a
                href="mailto:your.email@example.com"
                className="inline-block px-8 py-3 rounded-full bg-gradient-to-r from-cyan-500 to-purple-500 text-black font-semibold hover:from-cyan-400 hover:to-purple-400 transition-all transform hover:scale-105"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get In Touch
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
