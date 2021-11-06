import "../../../../styles/home/section-1/_header.scss";
import { useState, useEffect } from "react";
import { headerLinkService } from "../../../../services/headerLinkService";
import { LogoImage } from "../../../../assets/icons/logoImage";
import HarmburgerIcon from "../../../../assets/icons/harmburger";
import PersonIcon from "../../../../assets/icons/personIcon";
export const Header = () => {
  let [currentLink, setLinkState] = useState(" ");
  useEffect(() => {
    setLink("Places to stay?");
  }, []);
  const setLink = (link: string) => {
    setLinkState(link);
    headerLinkService.setData(link);
  };
  return (
    <header className="header">
      <div className="header__logo">
        <span className="header__logo__img">
          <LogoImage />
        </span>
        <h3 className="header__logo__name">Uwa</h3>
      </div>
      <div className="header__links">
        <ul className="header__links__list">
          <li
            className={`header__links__list__item ${
              currentLink === "Places to stay?" ? "true" : " "
            }`}
            onClick={() => setLink("Places to stay?")}
          >
            <a href="/#">Places to stay</a>
          </li>
          <li
            className={`header__links__list__item ${
              currentLink === "Monthly stays" ? "true" : " "
            }`}
            onClick={() => setLink("Monthly stays")}
          >
            <a href="/#">Monthly stays</a>
          </li>
          <li className="header__links__list__item">
            <a href="/#">Experiences</a>
          </li>
        </ul>
      </div>
      <div className="header__action">
        <p>Become a host</p>

        <button className="header__action__button">
          <HarmburgerIcon />
          <PersonIcon />
        </button>
      </div>
    </header>
  );
};
