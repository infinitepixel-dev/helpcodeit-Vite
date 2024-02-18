import { useRef } from "react";
import PropTypes from "prop-types";

function AutoExpandingTextarea({ value, onChange }) {
  const textareaRef = useRef(null);

  const handleInput = (event) => {
    onChange(event); // Propagate the event to the parent's onChange handler
    textareaRef.current.style.height = "inherit"; // Reset height - important to shrink on delete
    textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`; // Set new height
  };

  return (
    <textarea
      ref={textareaRef}
      value={value}
      onChange={handleInput}
      style={{
        height: "150px",
        overflowY: "hidden", // Hide the scrollbar
      }}
      className="bg-white border border-black w-full h-20 dark:bg-slate-600 text-white p-2 rounded-md"
    />
  );
}

AutoExpandingTextarea.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
};

export default AutoExpandingTextarea;
