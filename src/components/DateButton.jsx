import { CalendarCheck } from "lucide-react";
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
      <div
        className={`absolute left-7 transition-all duration-300 ease-in-out ${
          showPopout
            ? "opacity-100 translate-x-0 pointer-events-auto"
            : "opacity-0 -translate-x-2 pointer-events-none"
        }`}
      >
        <input
          onChange={handleChange}
          className="outline-none flex items-center"
          type="date"
          value={deadline || ""}
        />
      </div>
    </div>
  );
};

export default DateButton;
