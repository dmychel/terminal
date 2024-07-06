import PropTypes from "prop-types";
import '/src/styles/user_info.scss'

const UserInfo = ({ os }) => {
  return (
    <section className="user_info_container">
      <div className="user_info">
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
          Theme: <p>{os}</p>
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
