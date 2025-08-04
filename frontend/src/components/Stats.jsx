import { Asterisk, IndianRupee, Trophy } from "lucide-react";

function Stats() {
  return (
    <div className="stats shadow">
      <div className="stat">
        <div className="stat-figure text-secondary">
          <IndianRupee size={24} />
        </div>
        <div className="stat-title">Donations Raised: </div>
        <div className="stat-value">31K</div>
        <div className="stat-desc">Jan 1st - Feb 1st</div>
      </div>

      <div className="stat">
        <div className="stat-figure text-secondary">
          <Asterisk size={24} />
        </div>
        <div className="stat-title">Referals Used</div>
        <div className="stat-value">200</div>
        <div className="stat-desc">↗︎ 400 (22%)</div>
      </div>

      <div className="stat">
        <div className="stat-figure text-secondary">
          <Trophy size={24} />
        </div>
        <div className="stat-title">Rewards Unlocked</div>
        <div className="stat-value">3</div>
      </div>
    </div>
  );
}

export default Stats;
