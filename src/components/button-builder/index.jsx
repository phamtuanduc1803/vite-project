import Group from "../group";
import PropTypes from "prop-types";

const ButtonBuilder = ({ title, id }) => {
  return (
    <Group id={id}>
      <button className="rounded-full bg-blue-600 py-3 px-8 text-white">
        {title}
      </button>
    </Group>
  );
};

ButtonBuilder.propTypes = {
  title: PropTypes.string,
  id: PropTypes.string,
};

export default ButtonBuilder;
