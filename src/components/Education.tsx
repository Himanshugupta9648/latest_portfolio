import { motion } from "framer-motion";
import { Tilt } from "react-tilt";
import { GraduationCap, Award } from "lucide-react";

const certifications = [
  {
    name: "Microsoft Azure Fundamentals (AZ-900)",
    issuer: "Microsoft",
    date: "May 2022",
    image: "https://images.pexels.com/photos/669615/pexels-photo-669615.jpeg?auto=compress&cs=tinysrgb&w=1600"
  },
  {
    name: "Microsoft Azure Data Engineer (DP-203)",
    issuer: "Microsoft",
    date: "January 2023",
    image: "https://images.pexels.com/photos/325111/pexels-photo-325111.jpeg?auto=compress&cs=tinysrgb&w=1600"
  }
];

const CertificationCard = ({ certification, index }: { certification: any; index: number }) => {
  const defaultOptions = {
    reverse: false,
    max: 25,
    perspective: 1000,
    scale: 1.05,
    speed: 1200,
    transition: true,
    axis: null,
    reset: true,
    easing: "cubic-bezier(.03,.98,.52,.99)",
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      className="w-full sm:w-[350px]"
    >
      <Tilt options={defaultOptions} style={{ transformStyle: "preserve-3d" }}>
        <div className="bg-gradient-to-b from-[#1d1836] to-[#0a0a1b] rounded-xl w-full shadow-xl hover:shadow-purple-500/10 transition-all duration-300 overflow-hidden">
          <div className="relative w-full h-[120px]">
            <img
              src={certification.image}
              alt={certification.name}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
              <Award className="text-white w-12 h-12" />
            </div>
          </div>
          
          <div className="p-6">
            <h3 className="text-white font-bold text-lg">{certification.name}</h3>
            <div className="flex justify-between items-center mt-2">
              <p className="text-gray-300 text-sm">{certification.issuer}</p>
              <p className="text-gray-400 text-sm">{certification.date}</p>
            </div>
          </div>
        </div>
      </Tilt>
    </motion.div>
  );
};

const Education = () => {
  return (
    <section id="education" className="relative min-h-screen py-20 px-4 sm:px-8 bg-[#0a0a1b]">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-10"
        >
          <p className="text-secondary font-semibold text-lg mb-2">MY BACKGROUND</p>
          <h2 className="section-heading">Education & Certifications</h2>
        </motion.div>

        <div className="flex flex-col md:flex-row gap-8 items-start">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex-1"
          >
            <div className="bg-gradient-to-b from-[#1d1836] to-[#0a0a1b] p-8 rounded-xl shadow-xl hover:shadow-purple-500/10 transition-all duration-300">
              <div className="flex items-center mb-6">
                <div className="rounded-full bg-[#151030] w-16 h-16 flex items-center justify-center">
                  <GraduationCap className="w-8 h-8 text-secondary" />
                </div>
                <h3 className="text-xl font-semibold text-white ml-4">Education</h3>
              </div>
              
              <div className="relative pl-8 border-l-2 border-purple-500">
                <div className="absolute top-0 left-[-9px] w-4 h-4 rounded-full bg-purple-500"></div>
                <div className="mb-8">
                  <h4 className="text-white text-lg font-semibold">B.Tech in Electronics and Communication</h4>
                  <p className="text-secondary mt-1">Delhi Technological University (DCE)</p>
                  <p className="text-gray-400 mt-1">2017 – 2021</p>
                  
                  <div className="mt-4">
                    <p className="text-gray-300">Relevant Coursework:</p>
                    <ul className="mt-2 space-y-2">
                      <li className="text-gray-300 flex items-start">
                        <span className="inline-block w-2 h-2 rounded-full bg-purple-500 mt-2 mr-2"></span>
                        Database Management Systems
                      </li>
                      <li className="text-gray-300 flex items-start">
                        <span className="inline-block w-2 h-2 rounded-full bg-purple-500 mt-2 mr-2"></span>
                        Data Structures & Algorithms
                      </li>
                      <li className="text-gray-300 flex items-start">
                        <span className="inline-block w-2 h-2 rounded-full bg-purple-500 mt-2 mr-2"></span>
                        Computer Networks
                      </li>
                      <li className="text-gray-300 flex items-start">
                        <span className="inline-block w-2 h-2 rounded-full bg-purple-500 mt-2 mr-2"></span>
                        Cloud Computing Fundamentals
                      </li>
                      <li className="text-gray-300 flex items-start">
                        <span className="inline-block w-2 h-2 rounded-full bg-purple-500 mt-2 mr-2"></span>
                        Digital Signal Processing
                      </li>
                    </ul>
                  </div>
                  
                  <div className="mt-6">
                    <p className="text-gray-300">Achievements:</p>
                    <ul className="mt-2 space-y-2">
                      <li className="text-gray-300 flex items-start">
                        <span className="inline-block w-2 h-2 rounded-full bg-secondary mt-2 mr-2"></span>
                        Dean's List for Academic Excellence (2019-2020)
                      </li>
                      <li className="text-gray-300 flex items-start">
                        <span className="inline-block w-2 h-2 rounded-full bg-secondary mt-2 mr-2"></span>
                        3rd Place, University Hackathon (2020)
                      </li>
                      <li className="text-gray-300 flex items-start">
                        <span className="inline-block w-2 h-2 rounded-full bg-secondary mt-2 mr-2"></span>
                        Tech Fest Project Showcase Winner (2019)
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex-1"
          >
            <div className="bg-gradient-to-b from-[#1d1836] to-[#0a0a1b] p-8 rounded-xl shadow-xl hover:shadow-purple-500/10 transition-all duration-300">
              <div className="flex items-center mb-6">
                <div className="rounded-full bg-[#151030] w-16 h-16 flex items-center justify-center">
                  <Award className="w-8 h-8 text-secondary" />
                </div>
                <h3 className="text-xl font-semibold text-white ml-4">Certifications</h3>
              </div>
              
              <div className="flex flex-wrap gap-6 mt-8">
                {certifications.map((certification, index) => (
                  <CertificationCard
                    key={`certification-${index}`}
                    certification={certification}
                    index={index}
                  />
                ))}
              </div>
              
              <div className="mt-10">
                <h4 className="text-white text-lg font-semibold mb-4">Additional Training</h4>
                
                <div className="space-y-4">
                  <div className="border-l-4 border-purple-500 pl-4">
                    <h5 className="text-white font-medium">Advanced Data Engineering on Azure</h5>
                    <p className="text-gray-400 mt-1">Microsoft Learning | 2023</p>
                  </div>
                  
                  <div className="border-l-4 border-secondary pl-4">
                    <h5 className="text-white font-medium">Apache Spark for Big Data Processing</h5>
                    <p className="text-gray-400 mt-1">Databricks Academy | 2022</p>
                  </div>
                  
                  <div className="border-l-4 border-tertiary pl-4">
                    <h5 className="text-white font-medium">Python for Data Engineering</h5>
                    <p className="text-gray-400 mt-1">DataCamp | 2021</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Education;