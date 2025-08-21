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
      <button
        onClick={() => setShowPopout(!showPopout)}
        className="flex cursor-pointer"
      >
        <CalendarCheck />
      </button>
      <AnimatePresence>
        {showPopout && (
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 100, x: 28 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="absolute"
          >
            <input
              onChange={handleChange}
              className="outline-none flex items-center"
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
