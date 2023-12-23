import PropTypes from "prop-types";
import { useCallback, useEffect } from "react";

const Group = ({ title, children, id, className }) => {
  useEffect(() => {}, []);

  const handleSelect = useCallback((e) => {
    const elementBuilder = document.getElementById(id);
    if (elementBuilder.classList.contains("hidden")) {
      elementBuilder.classList.remove("hidden");
    } else {
      elementBuilder.classList.add("hidden");
    }
    e.stopPropagation();
  }, []);

  return (
    <div className={`relative`} onClick={handleSelect}>
      <div
        id={id}
        className={`pointer-events-none hidden absolute inset-0 border-2 border-blue-600`}
      >
        <div className="absolute -translate-y-full pl-2">
          <div className="flex items-center gap-x-2 rounded-t-lg bg-blue-600 px-3 py-1 text-white">
            <span className="text-sm">{title}</span>
          </div>
        </div>
        <div className="absolute left-0 top-0 h-2 w-2 -translate-x-full -translate-y-full border-2 border-blue-600"></div>
        <div className="absolute right-0 top-0 h-2 w-2 translate-x-full -translate-y-full border-2 border-blue-600"></div>
        <div className="absolute right-0 bottom-0 h-2 w-2 translate-x-full translate-y-full border-2 border-blue-600"></div>
        <div className="absolute left-0 bottom-0 h-2 w-2 -translate-x-full translate-y-full border-2 border-blue-600"></div>
        <div className="absolute inset-x-0 top-0 flex -translate-y-1/2 items-center justify-center">
          <div className="h-2 w-2 border-2 border-blue-600 bg-white"></div>
        </div>
        <div className="absolute inset-x-0 bottom-0 flex translate-y-1/2 items-center justify-center">
          <div className="h-2 w-2 border-2 border-blue-600 bg-white"></div>
        </div>
      </div>
      <div className={className}>{children}</div>
    </div>
  );
};

Group.propTypes = {
  title: PropTypes.string,
  children: PropTypes.element,
  id: PropTypes.string,
  className: PropTypes.string,
};

export default Group;
