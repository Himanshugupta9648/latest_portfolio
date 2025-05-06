import { motion } from "framer-motion";
import { Github as GitHub, ExternalLink } from "lucide-react";
import { Tilt } from "react-tilt";

const projects = [
  {
    name: "Azure DevOps Integration Pipeline",
    description: "CI/CD pipeline for deploying PySpark code in Azure Databricks using Azure DevOps YAML pipelines. Includes trigger from Git, unit tests, and deployment automation.",
    tags: ["Azure DevOps", "CI/CD", "PySpark", "Azure Databricks"],
    image: "https://images.pexels.com/photos/1181271/pexels-photo-1181271.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    source_code_link: "https://github.com",
    live_demo_link: "#"
  },
  {
    name: "Flight Analytics System",
    description: "Real-time data ingestion and transformation system using Python APIs and Azure Synapse. Parses JSON data from APIs, processes using PySpark, and stores optimized parquet data in HDFS.",
    tags: ["PySpark", "Azure Synapse", "Python", "HDFS", "Parquet"],
    image: "https://images.pexels.com/photos/33622/airplane-flight-sunset-sky.jpg?auto=compress&cs=tinysrgb&w=1600",
    source_code_link: "https://github.com",
    live_demo_link: "#"
  },
  {
    name: "Retail Sales ETL Dashboard",
    description: "Used Azure Data Factory to extract sales data from on-prem sources, transformed in Databricks, and visualized using Power BI.",
    tags: ["Azure Data Factory", "ETL", "Databricks", "Power BI"],
    image: "https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=1600",
    source_code_link: "https://github.com",
    live_demo_link: "#"
  },
  {
    name: "Resume Ranker AI",
    description: "Built a Python ML model to classify and rank resumes based on job descriptions. Used Azure Blob Storage, Databricks, and MLFlow for model tracking.",
    tags: ["Python", "ML", "Azure Blob", "Databricks", "MLFlow"],
    image: "https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=1600",
    source_code_link: "https://github.com",
    live_demo_link: "#"
  },
  {
    name: "Log Analytics Dashboard",
    description: "Created a monitoring dashboard using Azure Log Analytics and Power BI to track pipeline performance and errors.",
    tags: ["Azure Log Analytics", "Power BI", "Monitoring"],
    image: "https://images.pexels.com/photos/669621/pexels-photo-669621.jpeg?auto=compress&cs=tinysrgb&w=1600",
    source_code_link: "https://github.com",
    live_demo_link: "#"
  }
];

const ProjectCard = ({ project, index }: { project: any; index: number }) => {
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
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="w-full sm:w-[360px]"
    >
      <Tilt options={defaultOptions} style={{ transformStyle: "preserve-3d" }}>
        <div className="bg-gradient-to-b from-[#1d1836] to-[#0a0a1b] p-5 rounded-xl w-full shadow-xl hover:shadow-purple-500/10 transition-all duration-300 h-full flex flex-col">
          <div className="relative w-full h-[200px]">
            <img
              src={project.image}
              alt={project.name}
              className="w-full h-full object-cover rounded-xl"
            />
            
            <div className="absolute inset-0 flex justify-end gap-2 m-3">
              <div
                onClick={() => window.open(project.source_code_link, "_blank")}
                className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer hover:scale-110 transition-transform"
              >
                <GitHub className="w-5 h-5 text-white" />
              </div>
              {project.live_demo_link && (
                <div
                  onClick={() => window.open(project.live_demo_link, "_blank")}
                  className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer hover:scale-110 transition-transform"
                >
                  <ExternalLink className="w-5 h-5 text-white" />
                </div>
              )}
            </div>
          </div>

          <div className="mt-5 flex-1 flex flex-col">
            <h3 className="text-white font-bold text-[20px]">{project.name}</h3>
            <p className="mt-2 text-gray-300 text-[14px] flex-1">{project.description}</p>
          </div>
          
          <div className="mt-4 flex flex-wrap gap-2">
            {project.tags.map((tag: string) => (
              <p key={tag} className="text-[12px] text-secondary bg-black-200 px-2 py-1 rounded-md">
                #{tag}
              </p>
            ))}
          </div>
        </div>
      </Tilt>
    </motion.div>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="relative min-h-screen py-20 px-4 sm:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-10"
        >
          <p className="text-secondary font-semibold text-lg mb-2">MY WORK</p>
          <h2 className="section-heading">Projects</h2>
          <p className="text-gray-300 text-lg max-w-3xl mt-4">
            Following projects showcase my skills and experience through real-world examples of my work. Each project reflects my ability to solve complex data problems, work with different technologies, and manage projects effectively.
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-8 mt-12">
          {projects.map((project, index) => (
            <ProjectCard key={`project-${index}`} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;