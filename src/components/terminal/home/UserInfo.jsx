import styles from "/src/styles/terminal/userInfo.module.scss";
import PropTypes from "prop-types";

const UserInfo = ({ os }) => {
  return (
    <section className={styles.userInfoContainer}>
      <div className={styles.userInfo}>
        <span>
          OS: <p>{os}</p>
        </span>
        <span>
          Kernal: <p>1.3.0 rolling</p>
        </span>
        <span>
          Packages: <p>351 packages audited (npm)</p>
        </span>
        <span>
          Theme: <p>Alacritty</p>
        </span>
        <span>
          Terminal: <p>Best terminal you&apos;ve ever used</p>
        </span>
      </div>
    </section>
  );
};

UserInfo.propTypes = {
  os: PropTypes.string,
};

export default UserInfo;
