import { Trash } from "lucide-react";
import { motion } from "motion/react";

const DeleteAllButton = ({ deleteAll }) => {
  return (
    <motion.button
      type="button"
      title="clear tasks"
      onClick={() => deleteAll()}
      initial={{ opacity: 0 }}
      animate={{ opacity: 100 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      transition={{ duration: 0 }}
      className="cursor-pointer transition-all hover:text-red-300"
    >
      <Trash />
    </motion.button>
  );
};

export default DeleteAllButton;
