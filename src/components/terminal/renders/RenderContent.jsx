import PropTypes from "prop-types";
import CommandLine from "/src/components/terminal/CommandLine";

import "/src/styles/terminal_base.scss";

const RenderContent = ({
  renderComp,
  os,
  handleSubmit,
  handleKeyDown,
  command,
  setCommand,
}) => {
  return (
    <div className="content">
      {renderComp.map((comp) => {
        const CompName = comp;
        return <CompName key={crypto.randomUUID()} os={os} />;
      })}
      <CommandLine
        handleSubmit={handleSubmit}
        handleKeyDown={handleKeyDown}
        command={command}
        setCommand={setCommand}
      />
    </div>
  );
};

RenderContent.propTypes = {
  renderComp: PropTypes.array,
  os: PropTypes.string,
  handleSubmit: PropTypes.func,
  handleKeyDown: PropTypes.func,
  command: PropTypes.string,
  setCommand: PropTypes.func,
};

export default RenderContent;

// handleSubmit={handleSubmit}
//           handleKeyDown={handleKeyDown}
//           command={command}
//           setCommand={setCommand}
//           os={os}
