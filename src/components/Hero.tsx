import { motion } from "framer-motion";
import { DataCanvas } from "../animations/DataCanvas";
import { Github as GitHub, Linkedin, Mail } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto flex items-center">
      <div className="absolute inset-0">
        <DataCanvas />
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-16 flex flex-col sm:flex-row items-center justify-center sm:justify-between">
        <div>
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mb-4"
          >
            <h1 className="text-4xl sm:text-6xl font-bold text-white mb-2">
              Himanshu <span className="text-[#915EFF]">Gupta</span>
            </h1>
            <h2 className="text-xl sm:text-2xl text-white-100">Data Engineer</h2>
            <p className="text-gray-400 mt-1">Delhi, India</p>
          </motion.div>
          
          <motion.p
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-lg sm:text-xl max-w-md text-gray-300 mb-8"
          >
            Transforming big data into powerful insights with Azure, Databricks & PySpark.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.1 }}
            className="flex gap-4"
          >
            <a
              href="#contact"
              className="bg-gradient-to-r from-purple-500 to-indigo-600 py-3 px-8 rounded-lg text-white font-medium shadow-lg hover:shadow-purple-500/20 transition-all duration-300"
            >
              Contact Me
            </a>
            <a
              href="#projects"
              className="bg-transparent border border-gray-600 py-3 px-8 rounded-lg text-white font-medium hover:border-purple-500 transition-all duration-300"
            >
              View Projects
            </a>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.4 }}
            className="flex gap-4 mt-8"
          >
            <a
              href="https://github.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-gray-800 text-white hover:bg-gray-700 transition-colors duration-200"
              aria-label="GitHub profile"
            >
              <GitHub size={20} />
            </a>
            <a
              href="https://linkedin.com/in/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-gray-800 text-white hover:bg-gray-700 transition-colors duration-200"
              aria-label="LinkedIn profile"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="mailto:himanshug1030@gmail.com"
              className="p-2 rounded-full bg-gray-800 text-white hover:bg-gray-700 transition-colors duration-200"
              aria-label="Email me"
            >
              <Mail size={20} />
            </a>
          </motion.div>
        </div>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="w-full max-w-sm mt-12 sm:mt-0 hidden md:block"
        >
          {/* This space is intentionally left empty for the 3D animation to be more visible */}
        </motion.div>
      </div>
      
      <div className="absolute bottom-10 w-full flex justify-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-white flex justify-center items-start p-2">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-white mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;