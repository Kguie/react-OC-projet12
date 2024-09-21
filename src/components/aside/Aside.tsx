import yoga from "../../assets/icons/yoga.svg";
import bike from "../../assets/icons/bike.svg";
import swim from "../../assets/icons/swim.svg";
import workout from "../../assets/icons/workout.svg";

export default function Aside() {
  const buttonsLabel = [yoga, swim, bike, workout];

  return (
    <aside className="aside">
      <div className="aside__buttons-wrapper">
        {buttonsLabel.map((label) => (
          <button className="aside__button" key={label}>
            <img className="aside__button__icon" alt={label} src={label} />
          </button>
        ))}
      </div>
      <p className="aside__copyright">Copyright, SportSee 2020</p>
    </aside>
  );
}
