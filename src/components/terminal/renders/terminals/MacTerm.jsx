import RenderContent from "../RenderContent";
import { useEffect } from "react";
import PropTypes from "prop-types";
import "/src/styles/terminal_base.scss";

const MacTerm = ({
  renderComp,
  os,
  handleSubmit,
  handleKeyDown,
  command,
  setCommand,
}) => {
  useEffect(() => {
    console.log("window scroll run");
    const termEL = document.getElementById("terminal");
    termEL.scrollTo(0, termEL.scrollHeight);
  }, [renderComp]);

  return (
    <div className="mac" id="terminal">
      <nav>
        <div className="menu">
          <span className="exit"></span>
          <span className="min"></span>
          <span className="max"></span>
        </div>
        <div className="title">
          <span>Pear Terminal</span>
        </div>
      </nav>
      <RenderContent
        renderComp={renderComp}
        os={os}
        handleSubmit={handleSubmit}
        handleKeyDown={handleKeyDown}
        command={command}
        setCommand={setCommand}
      />
    </div>
  );
};

MacTerm.propTypes = {
  renderComp: PropTypes.array,
  os: PropTypes.string,
  handleSubmit: PropTypes.func,
  handleKeyDown: PropTypes.func,
  command: PropTypes.string,
  setCommand: PropTypes.func,
};

export default MacTerm;
