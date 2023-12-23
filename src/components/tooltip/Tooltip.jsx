import PropTypes from "prop-types";

function Tooltip({ children, position }) {
  return (
    <div
      className={`absolute z-10 -${position}-[2.5rem] hidden items-center group-hover:flex`}
    >
      <div className="relative whitespace-nowrap rounded-md bg-white py-2 px-4 text-sm font-semibold text-gray-900 drop-shadow-lg">
        <div className={`absolute inset-0 ${position}-1 flex items-center`}>
          <div className="h-2 w-2 rotate-45 bg-white" />
        </div>
        {children}
      </div>
    </div>
  );
}

Tooltip.propTypes = {
  children: PropTypes.element,
  position: PropTypes.string,
};

Tooltip.defaultProps = {
  position: "bottom",
};

export default Tooltip;
