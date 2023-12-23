import { BiChevronDown } from "react-icons/bi";
import PropTypes from "prop-types";

function Accordion({ children, title }) {
  return (
    <details className="group">
      <summary className="flex cursor-pointer list-none items-center justify-between border-b border-gray-200 p-4">
        <span className="text-sm font-semibold capitalize">{title}</span>
        <BiChevronDown className="h-5 w-5 rotate-270 stroke-current text-gray-400 transition-transform group-open:rotate-0" />
      </summary>
      <div className="border-b border-gray-200 p-4">{children}</div>
    </details>
  );
}

Accordion.propTypes = {
  title: PropTypes.string,
  children: PropTypes.element,
};

export default Accordion;
