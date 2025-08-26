import { Text } from "lucide-react";
import { motion } from "motion/react";

const DescriptionButton = ({ editDescription, setEditDescription }) => {
  return (
    <motion.button
      onClick={() => setEditDescription(!editDescription)}
      initial={{ scale: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      type="button"
    >
      <Text className={editDescription && "text-green-300"} />
    </motion.button>
  );
};

export default DescriptionButton;
