import CountryCard from "../CountryCard/CountryCard";
import style from "./Countries.module.css";

// eslint-disable-next-line react/prop-types
const Countries = ({ countries }) => {
  return (
    <div className={style.container}>
      {
        // eslint-disable-next-line react/prop-types
        countries.map(({ id, name, image, continent }) => {
          return (
            <CountryCard
              key={id}
              id={id}
              name={name}
              image={image}
              continent={continent}
            />
          );
        })}
    </div>
  );
};

export default Countries;
