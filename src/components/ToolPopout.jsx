import { ChevronLeft, Settings } from "lucide-react";
import DateButton from "./DateButton";
import { AnimatePresence, motion } from "motion/react";
import DeleteAllButton from "./DeleteAllButton";
import DescriptionButton from "./DescriptionButton";

const ToolPopout = ({
  setDeadline,
  deadline,
  deleteAll,
  editDescription,
  setEditDescription,
  showToolPopout,
  setShowToolPopout,
}) => {
  return (
    <div className="flex gap-1 text-neutral-800 dark:text-neutral-200">
      <motion.button
        type="button"
        initial={{ scale: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setShowToolPopout(!showToolPopout)}
        className="cursor-pointer"
      >
        {showToolPopout ? <ChevronLeft /> : <Settings />}
      </motion.button>
      <AnimatePresence>
        {showToolPopout && (
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 100, x: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="flex gap-2"
          >
            <DateButton deadline={deadline} setDeadline={setDeadline} />
            <DescriptionButton
              editDescription={editDescription}
              setEditDescription={setEditDescription}
            />
            <DeleteAllButton deleteAll={deleteAll} />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ToolPopout;
