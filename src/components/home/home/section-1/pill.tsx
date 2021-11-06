import { pillInterface } from "../../../../models/pill";
import "../../../../styles/home/section-1/_pill.scss";
import { useState, useEffect } from "react";
import { headerLinkService } from "../../../../services/headerLinkService";
import SearchIcon from "../../../../assets/icons/searchIcon";
export const Pill = () => {
  const pillListItems: pillInterface[] = [
    { title: "Location", subTitle: "Where are you going" },
    { title: "Check in", subTitle: "Add date" },
    { title: "Check out", subTitle: "Add date" },
    { title: "Guest", subTitle: "Add guest" },
  ];
  const [pillLists, setPill] = useState(pillListItems);
  useEffect(() => {
    document
      .querySelector(".pill-container__search__word")
      ?.classList.add("hide");
    headerLinkService.getData().subscribe((res: any) => {
      res.value == "Monthly stays" ? setPillList() : setPill(pillListItems);
    });
  }, []);
  const setPillList = () => {
    return setPill([
      { title: "Location", subTitle: "Where are you going" },
      { title: "Date", subTitle: "Add When you want to go" },
    ]);
  };
  const search = document.querySelector(
    ".pill-container__search__word"
  )?.classList;
  const showSearch = () => {
    search?.remove("hide");
  };
  function hideSearch(): void {
    search?.add("hide");
  }
  return (
    <div className="pill-container">
      <div className="pill-container__elements">
        {pillLists.map((res, id) => (
          <p
            className="pill-container__pill"
            key={id}
            onClick={() => showSearch()}
            onMouseLeave={() => hideSearch()}
          >
            {res.title}
            <span>{res.subTitle ? res.subTitle : ""}</span>
          </p>
        ))}
        <button className="pill-container__search">
          <SearchIcon />
          <span className="pill-container__search__word">search</span>
          <span className="pill-container__search__word--small">
            Where are you going
          </span>
        </button>
      </div>
    </div>
  );
};
