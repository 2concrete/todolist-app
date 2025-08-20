import { ChevronLeft, Settings } from "lucide-react";
import { useState } from "react";
import DateButton from "./DateButton";

const ToolPopout = ({ setDeadline, deadline }) => {
  const [showPopout, setShowPopout] = useState(false);
  return (
    <div className="flex gap-1 text-neutral-200">
      <button
        onClick={() => setShowPopout(!showPopout)}
        className="cursor-pointer"
      >
        {showPopout ? <ChevronLeft /> : <Settings />}
      </button>
      <div
        className={`transition-all duration-300 ease-in-out ${
          showPopout
            ? "opacity-100 translate-x-0"
            : "opacity-0 -translate-x-2 pointer-events-none"
        }`}
      >
        <DateButton deadline={deadline} setDeadline={setDeadline} />
      </div>
    </div>
  );
};

export default ToolPopout;
