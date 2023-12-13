import "./DarkMode.css";
import "./DarkMode.scss";
const DarkMode = () => {
  const styleTarget = document.body;

  const setDarkMode = () => {
    styleTarget.classList.remove("dark-mode", "light-mode");
    styleTarget.classList.add("dark-mode");
  };
  const setLightMode = () => {
    styleTarget.classList.remove("dark-mode", "light-mode");
    styleTarget.classList.add("light-mode");
  };

  const toggleDarkLight = (e) => {
    if (e.target.checked) setDarkMode();
    else setLightMode();
  };
  setLightMode();
  return (
    <div className="dark_mode">
      <input
        className="dark_mode_input"
        type="checkbox"
        id="darkmode-toggle"
        onChange={toggleDarkLight}
      />
      <label className="dark_mode_label" htmlFor="darkmode-toggle"></label>
    </div>
  );
};
export default DarkMode;
