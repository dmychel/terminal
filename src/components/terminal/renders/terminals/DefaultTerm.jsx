import RenderContent from "../RenderContent";
import PropTypes from "prop-types";
import { useEffect } from "react";

import "/src/styles/terminal_base.scss";

const DefaultTerm = ({
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
    <div className="default" id="terminal">
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

DefaultTerm.propTypes = {
  renderComp: PropTypes.array,
  os: PropTypes.string,
  handleSubmit: PropTypes.func,
  handleKeyDown: PropTypes.func,
  command: PropTypes.string,
  setCommand: PropTypes.func,
};

export default DefaultTerm;
