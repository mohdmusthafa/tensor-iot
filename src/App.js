import "antd/dist/reset.css";
import { Layout, Button } from "antd";
import NavBar from "./components/NavBar";
import LaunchData from "./components/LaunchData";
import { CenteredFlex } from "./styles/tensor";
import Filters from "./components/Filters";

function App() {
  return (
    <div>
			<NavBar />
			<Filters />
			<CenteredFlex mx={50}>
			<LaunchData />

			</CenteredFlex>
		</div>
  );
}

export default App;
