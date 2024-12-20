import RenderContent from "../RenderContent";
import PropTypes from "prop-types";
import { useEffect } from "react";

import "/src/styles/terminal_base.scss";

const LinuxTerm = ({
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
    <div className="alacritty" id="terminal">
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

LinuxTerm.propTypes = {
  renderComp: PropTypes.array,
  os: PropTypes.string,
  handleSubmit: PropTypes.func,
  handleKeyDown: PropTypes.func,
  command: PropTypes.string,
  setCommand: PropTypes.func,
};

export default LinuxTerm;
