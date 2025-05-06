import { motion } from "framer-motion";
import { Database, Workflow, Cpu, Code, GitBranch, Monitor } from "lucide-react";
import { Tilt } from "react-tilt";

interface SkillCardProps {
  title: string;
  icon: string;
  level: number;
  index: number;
}

export const SkillCard = ({ title, icon, level, index }: SkillCardProps) => {
  const renderIcon = (iconName: string) => {
    switch (iconName) {
      case "database":
        return <Database className="w-10 h-10 text-secondary" />;
      case "workflow":
        return <Workflow className="w-10 h-10 text-secondary" />;
      case "cpu":
        return <Cpu className="w-10 h-10 text-secondary" />;
      case "code":
        return <Code className="w-10 h-10 text-secondary" />;
      case "git-branch":
        return <GitBranch className="w-10 h-10 text-secondary" />;
      case "monitor":
        return <Monitor className="w-10 h-10 text-secondary" />;
      default:
        return <Database className="w-10 h-10 text-secondary" />;
    }
  };

  const defaultOptions = {
    reverse: false,
    max: 35,
    perspective: 1000,
    scale: 1.05,
    speed: 1000,
    transition: true,
    axis: null,
    reset: true,
    easing: "cubic-bezier(.03,.98,.52,.99)",
  };

  return (
    <Tilt options={defaultOptions} style={{ transformStyle: "preserve-3d" }}>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        className="bg-gradient-to-b from-[#1d1836] to-[#0a0a1b] p-6 rounded-xl w-full shadow-xl hover:shadow-purple-500/10 transition-all duration-300"
      >
        <div className="flex items-center mb-4 relative">
          <div className="rounded-full bg-[#151030] w-16 h-16 flex items-center justify-center">
            {renderIcon(icon)}
          </div>
          <h3 className="text-white text-lg font-semibold ml-4">{title}</h3>
        </div>
        
        <div className="w-full bg-gray-700 rounded-full h-2.5 mb-4">
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: `${level}%` }}
            transition={{ duration: 1, delay: 0.5 + index * 0.1 }}
            className="bg-gradient-to-r from-blue-500 to-purple-600 h-2.5 rounded-full"
          />
        </div>
        
        <div className="flex justify-between text-sm text-gray-400">
          <span>Beginner</span>
          <span>Expert</span>
        </div>
      </motion.div>
    </Tilt>
  );
};