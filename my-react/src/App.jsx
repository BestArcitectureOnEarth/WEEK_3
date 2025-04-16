import "./App.css";
import FetchImage from "./components/HigherOrder/FetchImage";
import Styles from "./components/HigherOrder/Styles";
import WithLoader from "./components/HigherOrder/withLoader";

function App() {
  return (
    <>
      {/* <Styles /> */}
      <FetchImage />
    </>
  );
}

export default App;
