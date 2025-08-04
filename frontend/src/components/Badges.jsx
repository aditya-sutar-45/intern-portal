import { Award } from "lucide-react";

const BADGES = ["#D9D900", "#c0c0c0", "#BD6500"];
function Badges() {
    return (
      <>
        <div className="flex justify-between">
          <div className="text-5xl font-chivo font-bold">Badges</div>
          <div className="flex flex-col text-end">
            <div className="font-lora">
              Next Tier:{" "}
              <span className="font-lora text-primary">Platinum</span>
            </div>
            <div className="flex items-center">
              <Award color={BADGES[0]} />
              <progress
                className="progress progress-info w-56"
                value="40"
                max="100"
              ></progress>
              <Award color="#D9D900" />
            </div>
          </div>
        </div>
        <div className="flex p-3 rounded-field">
          {BADGES.map((badgeColor, i) => (
            <div
              key={i}
              className="bg-base-300 hover:shadow hover:cursor-pointer rounded-full p-1 mx-1"
            >
              <Award color={badgeColor} size={42} />
            </div>
          ))}
        </div>
      </>
    );
}

export default Badges;