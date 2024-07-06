import PropTypes from "prop-types";

import '/src/styles/terminal_base.scss'

const CommandLine = ({ handleSubmit, handleKeyDown, command, setCommand }) => {
  return (
    <section className="command_line">
      <form onSubmit={handleSubmit}>
        <label>{">"}</label>
        <input
          type="text"
          value={command}
          onChange={(e) => setCommand(e.target.value)}
          onKeyDown={(e) => handleKeyDown(e)}
        />
      </form>
    </section>
  );
};

CommandLine.propTypes = {
  handleSubmit: PropTypes.func,
  handleKeyDown: PropTypes.func,
  command: PropTypes.string,
  setCommand: PropTypes.func,
  os: PropTypes.string,
};

export default CommandLine;
