import { Header } from "./header";
import "../../styles/_home.scss";
import { Pill } from "./pill";
export const Home = () => {
  return (
    <div className="home-container">
      <Header />
      <Pill />
      <div className="call-to-action">
        <h4>Not sure where to go</h4>
        <button>
          {" "}
          <span>i'm flexible</span>
        </button>
      </div>
    </div>
  );
};
