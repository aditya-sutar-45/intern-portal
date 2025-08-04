import { Copy } from "lucide-react";
import Badges from "../components/Badges";
import Leaderboard from "../components/Leaderboard";
import Stats from "../components/Stats";

function Dashboard() {
  return (
    <div className="h-[90vh] flex justify-center items-center">
      {/* <div className="flex justify-items-center text-center"> */}
      <div className="h-[80%] w-[80%] flex flex-col justify-evenly">
        <div className="flex flex-row justify-between">
          <div className="w-[50%]">
            <h1 className="text-5xl font-chivo font-bold">Hello, Aditya</h1>
            <p className="py-6 font-lora">
              <span>Referal Code: </span>
              <div className="tooltip" data-tip="copy code">
                <button className="btn btn-primary mx-1 btn-sm">
                  aditya2005
                </button>
              </div>
            </p>
          </div>
          <div className="w-[50%]">
            <Badges />
          </div>
        </div>
        <Stats />
        <Leaderboard />
        {/* <button className="btn btn-primary">Get Started</button> */}
      </div>
      {/* </div> */}
    </div>
  );
}

export default Dashboard;
