import { LEADERBOARD } from "../data/leaderbaord";

function Leaderboard() {
  return (
    <div className="overflow-x-auto">
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th>Rank</th>
            <th>Name</th>
            <th>Referral Code</th>
            <th>Donations</th>
          </tr>
        </thead>
        <tbody>
          {LEADERBOARD.map((l, i) => (
            <tr className={l.name.match("Aditya") ? "bg-base-300" : ""} key={i}>
              <th>{l.rank}</th>
              <td>{l.name}</td>
              <td>{l.referralCode}</td>
              <td>{l.donations}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Leaderboard;
