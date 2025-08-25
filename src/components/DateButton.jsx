import { CalendarCheck } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";

const DateButton = ({ deadline, setDeadline }) => {
  const [showPopout, setShowPopout] = useState(false);
  const handleChange = (e) => {
    setDeadline(e.target.value);
  };

  return (
    <div className="relative flex gap-1">
      <motion.button
        type="button"
        initial={{ opacity: 0 }}
        animate={{ opacity: 100 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setShowPopout(!showPopout)}
        className="flex cursor-pointer"
      >
        <CalendarCheck />
      </motion.button>
      <AnimatePresence>
        {showPopout && (
          <motion.div
            initial={{ opacity: 0, y: 0 }}
            animate={{ opacity: 100, y: 30 }}
            exit={{ opacity: 0, zy: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="absolute"
          >
            <input
              onChange={handleChange}
              className="outline-none text-neutral-800 dark:text-neutral-200 flex bg-transparent items-center"
              type="date"
              value={deadline || ""}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default DateButton;
