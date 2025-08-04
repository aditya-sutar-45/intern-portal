import { Copy } from "lucide-react";
import Badges from "../components/Badges";
import Leaderboard from "../components/Leaderboard";
import Stats from "../components/Stats";
import { useUser } from "../context/UserContext";

function Dashboard() {
  const { user } = useUser();
  if (!user) {
    return (
      <div className="h-[90vh] flex justify-center items-center">
        <h1 className="text-5xl font-chivo font-bold">Access Denied</h1>
      </div>
    );
  }

  return (
    <div className="h-[92vh] flex justify-center items-center">
      {/* <div className="flex justify-items-center text-center"> */}
      <div className="h-[100%] w-[80%] flex flex-col justify-evenly">
        <div className="flex flex-row justify-between">
          <div className="w-[50%]">
            <h1 className="text-5xl font-chivo font-bold">
              Hello, {user.name}
            </h1>
            <div className="py-6 font-lora flex items-center">
              <span>Referal Code: </span>
              <div className="tooltip" data-tip="copy code">
                <button className="btn btn-primary mx-1 btn-sm">
                  {user.referralCode} <Copy size={12} className="ml-1" />
                </button>
              </div>
            </div>
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
