import styles from "../styles";
import { arrowUp } from "../assets";

const GetStarted = () => (
  <div
    className={`${styles.flexCenter} w-[140px] h-[140px] rounded-full bg-blue-gradient p-[2px] cursor-pointer`}
  >
    <div
      className={`${styles.flexCenter} flex-col bg-primary w-[100%] h-[100%] rounded-full`}
    >
      <div className={`${styles.flexStart} flex`}>
        <p className="font-poppins font-medium text-[18px] leading-[23.4px] flex">
          <span className="text-gradient">Lancer</span>
          <img
            src={arrowUp}
            alt="arrow-up"
            className="w-[23px] h-[23px] object-contain"
          />
        </p>
      </div>
    </div>
  </div>
);

export default GetStarted;
