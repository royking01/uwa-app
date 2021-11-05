import { Header } from "./section-1/header";
import "../../../styles/./home/_home.scss";
import { Pill } from "./section-1/pill";
export const Home = () => {
  return (
    <div className="home-container">
      <Header />
      <Pill />
      <div className="call-to-action">
        <h4>Not sure where to go</h4>
        <button>
          <span>i'm flexible</span>
        </button>
      </div>
    </div>
  );
};
