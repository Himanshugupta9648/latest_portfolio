import { motion } from "framer-motion";
import { SkillCard } from "./SkillCard";

const skills = [
  {
    title: "Azure Databricks",
    icon: "database",
    level: 90,
  },
  {
    title: "Azure Data Factory",
    icon: "workflow",
    level: 85,
  },
  {
    title: "Azure Synapse",
    icon: "cpu",
    level: 80,
  },
  {
    title: "SQL",
    icon: "code",
    level: 90,
  },
  {
    title: "Python",
    icon: "code",
    level: 85,
  },
  {
    title: "Git & Azure DevOps",
    icon: "git-branch",
    level: 75,
  },
  {
    title: "Hadoop, HDFS, Parquet",
    icon: "database",
    level: 80,
  },
  {
    title: "Windows/Linux OS",
    icon: "monitor",
    level: 75,
  },
];

const About = () => {
  return (
    <section id="about" className="relative min-h-screen py-20 px-4 sm:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-10"
        >
          <p className="text-secondary font-semibold text-lg mb-2">INTRODUCTION</p>
          <h2 className="section-heading">Overview</h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-4 text-gray-300 text-lg max-w-3xl"
          >
            Data Engineer with 3+ years of experience in designing and implementing scalable data solutions using Azure services. Expertise in Azure Data Factory, Azure Databricks, and Azure Synapse Analytics. Skilled in building and optimizing data pipelines, working with big data technologies like Hadoop, Hive, Spark, and using Python/SQL for automation and transformation.
          </motion.p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-2xl font-semibold text-white mb-8">Technical Skills</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {skills.map((skill, index) => (
              <SkillCard 
                key={skill.title} 
                title={skill.title} 
                icon={skill.icon} 
                level={skill.level}
                index={index}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;