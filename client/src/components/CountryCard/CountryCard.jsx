import { Link } from "react-router-dom";
import style from "./CountryCard.module.css";

// eslint-disable-next-line react/prop-types
const CountryCard = ({ id, name, image, continent }) => {
  return (
    <Link to={`/detail/${id}`}>
        <div className={style.card}>
          <div className={style.flag}>
            <img src={image} alt={`Flag from ${name}`} />
          </div>
          <div className={style.content}>
            <div className={style.country}>
              <h4>{name}</h4>
              <br />
              <h5>{continent}</h5>
            </div>
          </div>
        </div> 
    </Link>
  );
};
export default CountryCard;
