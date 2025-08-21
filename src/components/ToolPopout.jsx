import { ChevronLeft, Settings } from "lucide-react";
import { useState } from "react";
import DateButton from "./DateButton";
import { AnimatePresence, easeInOut, motion } from "motion/react";

const ToolPopout = ({ setDeadline, deadline }) => {
  const [showPopout, setShowPopout] = useState(false);
  return (
    <div className="flex gap-1 text-neutral-200">
      <motion.button
        initial={{ scale: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setShowPopout(!showPopout)}
        className="cursor-pointer"
      >
        {showPopout ? <ChevronLeft /> : <Settings />}
      </motion.button>
      <AnimatePresence>
        {showPopout && (
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 100, x: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            <DateButton deadline={deadline} setDeadline={setDeadline} />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ToolPopout;
