/*
 * Author: Mohammed Musthafa
 * Created Date: Friday November 25th 2022
 * Product : TensorIoT
 */

import NavBar from "./components/NavBar";
import LaunchData from "./components/LaunchData";
import { CenteredFlex } from "./styles/tensor";
import Filters from "./components/Filters";
import "antd/dist/reset.css";

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
