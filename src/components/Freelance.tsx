import { motion } from "framer-motion";
import { Laptop, ExternalLink } from "lucide-react";

const Freelance = () => {
  return (
    <section id="freelance" className="relative py-20 px-4 sm:px-8 bg-[#0a0a1b]">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-10"
        >
          <p className="text-secondary font-semibold text-lg mb-2">ADDITIONAL SERVICES</p>
          <h2 className="section-heading">Freelance Work</h2>
        </motion.div>

        <div className="flex flex-col md:flex-row gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex-1"
          >
            <div className="bg-gradient-to-b from-[#1d1836] to-[#0a0a1b] p-8 rounded-xl shadow-xl">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 rounded-full bg-[#151030] flex items-center justify-center">
                  <Laptop className="w-6 h-6 text-secondary" />
                </div>
                <h3 className="text-xl font-semibold text-white ml-4">Freelance Services</h3>
              </div>
              
              <p className="text-gray-300 mb-6">
                Also available for freelance projects related to Data Engineering, pipeline automation, and data architecture. Previous freelance work includes creating ETL pipelines for startups and building reporting dashboards using Azure Synapse and Power BI.
              </p>
              
              <h4 className="text-lg font-semibold text-white mb-4">Services Offered:</h4>
              
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 rounded-full bg-purple-500 mt-2 mr-2"></span>
                  <span className="text-gray-300">Custom ETL/ELT pipeline development</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 rounded-full bg-purple-500 mt-2 mr-2"></span>
                  <span className="text-gray-300">Data architecture consulting</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 rounded-full bg-purple-500 mt-2 mr-2"></span>
                  <span className="text-gray-300">Azure Databricks & PySpark development</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 rounded-full bg-purple-500 mt-2 mr-2"></span>
                  <span className="text-gray-300">Performance optimization for data workflows</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 rounded-full bg-purple-500 mt-2 mr-2"></span>
                  <span className="text-gray-300">Data visualization with Power BI</span>
                </li>
              </ul>
              
              <a
                href="https://freelancer.com/u/himanshu-dataengineer"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center bg-gradient-to-r from-purple-500 to-indigo-600 py-2 px-4 rounded-lg text-white font-medium shadow-lg hover:shadow-purple-500/20 transition-all duration-300"
              >
                View Freelance Profile
                <ExternalLink className="ml-2 w-4 h-4" />
              </a>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex-1"
          >
            <div className="bg-gradient-to-b from-[#1d1836] to-[#0a0a1b] p-8 rounded-xl shadow-xl">
              <h3 className="text-xl font-semibold text-white mb-6">Recent Freelance Projects</h3>
              
              <div className="space-y-6">
                <div className="border-l-4 border-purple-500 pl-4">
                  <h4 className="text-white font-medium">E-commerce Data Pipeline</h4>
                  <p className="text-gray-400 mt-1">Designed and implemented a data pipeline for an e-commerce startup that processes 1TB+ of customer and sales data daily.</p>
                </div>
                
                <div className="border-l-4 border-secondary pl-4">
                  <h4 className="text-white font-medium">Financial Analytics Dashboard</h4>
                  <p className="text-gray-400 mt-1">Created a real-time financial analytics dashboard using Azure Synapse and Power BI for a fintech company.</p>
                </div>
                
                <div className="border-l-4 border-tertiary pl-4">
                  <h4 className="text-white font-medium">Healthcare Data Integration</h4>
                  <p className="text-gray-400 mt-1">Built a secure data integration solution for a healthcare provider to consolidate patient data from multiple sources.</p>
                </div>
                
                <div className="border-l-4 border-accent pl-4">
                  <h4 className="text-white font-medium">IoT Data Processing</h4>
                  <p className="text-gray-400 mt-1">Developed a scalable IoT data processing solution using Azure services for a manufacturing client.</p>
                </div>
              </div>
              
              <div className="mt-8">
                <h4 className="text-lg font-semibold text-white mb-4">Availability</h4>
                <p className="text-gray-300">Currently accepting new clients for short to medium-term projects. Contact me for availability and rates.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Freelance;