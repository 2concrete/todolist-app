import { Moon, Sun } from "lucide-react";
import { motion } from "motion/react";

const ThemeToggle = ({ setIsDark, isDark }) => {
  return (
    <motion.button
      whileTap={{ rotate: 360 }}
      transition={{ duration: 0.3 }}
      className="text-neutral-800 dark:text-neutral-200 cursor-pointer absolute right-0 top-0 p-2"
      onClick={() => setIsDark(!isDark)}
    >
      {isDark ? <Sun /> : <Moon />}
    </motion.button>
  );
};

export default ThemeToggle;
