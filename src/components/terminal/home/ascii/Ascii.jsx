import PropTypes from "prop-types";
import Windows from "./Windows";
import Mac from "./Mac";
import Linux from "./Linux";
import Default from "./Default";

import styles from "/src/styles/terminal/ascii.module.scss";


const Ascii = ({ os }) => {
  const dynamicComp = () => {
    if (os === "Windows") return <Windows />;
    if (os === "Mac") return <Mac />;
    if (os === "Linux") return <Linux />;
    else {
      return <Default/>
    }
  };
  return <section className={styles.asciiWrapper}>{dynamicComp()}</section>;
};

Ascii.propTypes = {
  os: PropTypes.string,
};

export default Ascii;
