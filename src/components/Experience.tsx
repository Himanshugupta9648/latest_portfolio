import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";

const experiences = [
  {
    title: "Consultant Developer",
    company: "Infogain",
    location: "Noida, India",
    date: "04/2025 – Present",
    description: [
      "Leading data engineering initiatives using Azure Databricks and PySpark",
      "Designing and implementing ETL pipelines for large datasets",
      "Optimizing data transformation processes for performance",
      "Collaborating with cross-functional teams to deliver data solutions"
    ]
  },
  {
    title: "Senior Data Engineer",
    company: "Tredence Analytics",
    location: "Gurgaon, India",
    date: "09/2024 – 03/2025",
    description: [
      "Developed and maintained data pipelines using Azure Data Factory",
      "Architected data solutions using Azure Synapse Analytics",
      "Implemented data quality checks and monitoring systems",
      "Mentored junior engineers on data engineering best practices"
    ]
  },
  {
    title: "Data Engineer",
    company: "Persistent Systems",
    location: "Pune, India",
    date: "06/2021 – 07/2024",
    description: [
      "Built ETL pipelines for processing large volumes of data",
      "Utilized PySpark for distributed data processing",
      "Integrated various data sources into a central data lake",
      "Implemented data governance and security practices"
    ]
  },
  {
    title: "Software Engineer Intern",
    company: "Desktop Developer",
    location: "WPF & C# .NET",
    date: "01/2021 – 05/2021",
    description: [
      "Developed desktop applications using WPF and C# .NET",
      "Created user interfaces with XAML",
      "Implemented business logic and database integrations",
      "Participated in full software development lifecycle"
    ]
  }
];

const ExperienceCard = ({ experience, index }: { experience: any; index: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="flex flex-col sm:flex-row gap-4 mb-10"
    >
      <div className="flex-shrink-0 w-16 h-16 rounded-full bg-[#151030] flex items-center justify-center shadow-md">
        <Briefcase className="w-8 h-8 text-secondary" />
      </div>
      
      <div className="flex-1">
        <div className="bg-gradient-to-b from-[#1d1836] to-[#0a0a1b] p-6 rounded-xl shadow-xl hover:shadow-purple-500/10 transition-all duration-300">
          <h3 className="text-white text-xl font-semibold">{experience.title}</h3>
          <p className="text-secondary mt-1">{experience.company}</p>
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mt-2">
            <p className="text-gray-400">{experience.location}</p>
            <p className="text-gray-400 mt-1 sm:mt-0">{experience.date}</p>
          </div>
          
          <ul className="mt-4 space-y-2">
            {experience.description.map((item: string, i: number) => (
              <motion.li 
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: 0.3 + i * 0.1 }}
                className="text-gray-300 flex items-start"
              >
                <span className="inline-block w-2 h-2 rounded-full bg-purple-500 mt-2 mr-2"></span>
                {item}
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </motion.div>
  );
};

const Experience = () => {
  return (
    <section id="experience" className="relative min-h-screen py-20 px-4 sm:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-10"
        >
          <p className="text-secondary font-semibold text-lg mb-2">WHAT I HAVE DONE</p>
          <h2 className="section-heading">Work Experience</h2>
        </motion.div>

        <div className="mt-12">
          <div className="relative flex flex-col">
            {/* Vertical line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-500 to-transparent hidden sm:block"></div>
            
            {/* Experience cards */}
            {experiences.map((experience, index) => (
              <ExperienceCard key={index} experience={experience} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;