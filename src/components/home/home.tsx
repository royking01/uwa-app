import { Header } from "./header";
import "../../styles/_home.scss";
import { Pill } from "./pill";
export const Home = () => {
  return (
    <div className="home-container">
      <Header />
      <Pill />
    </div>
  );
};
