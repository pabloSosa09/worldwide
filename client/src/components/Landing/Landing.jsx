import style from "./Landing.module.css";
import { Link } from "react-router-dom";
import world from '/planet.png'

const Landing = () => { 
  return (
    <div className={style.wrapper}>
    <div className={style.container}>
        <div className={style.left}>
          <div className={style.bigtitle}>
            <h1>The world is too BIG</h1>
            <h1>Start Exploring now.</h1>
          </div>
                <div className={style.text}>
                  <p>This app will help you to know more about the countries of the world.</p>
                </div>
          <Link className={style.linkHome} to ='/home'>
            <h1 >Get Started</h1> 
          </Link>
        </div>
          <div className={style.right}>
              <img src={world} alt="world Image" />
            </div>
          </div>

    </div>
    
   )
}

export default Landing