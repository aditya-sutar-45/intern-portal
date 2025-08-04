import axios from "axios";
import { useEffect, useState } from "react";
import { useUser } from "../context/UserContext";

function Leaderboard() {
  const [leaderBoard, setLeaderboard] = useState([]);
  const [error, setError] = useState("");
  const { user } = useUser();
  useEffect(() => {
    const fetchLeaderboard = async () => {
      try {
        const res = await axios.get(
          `${import.meta.env.VITE_SERVER_BASE_URL}/leaderboard`
        );
        setLeaderboard(res.data);
      } catch (error) {
        console.error("Error fetching leaderboard:", error);
        setError("Failed to load leaderboard");
      }
    };
    fetchLeaderboard();
  }, []);

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
          {!error ? (
            leaderBoard.slice(0, 10).map((l, i) => (
              <tr
                className={
                  l.referralCode.match(user.referralCode) ? "bg-base-300" : ""
                }
                key={i}
              >
                <th>{i + 1}</th>
                <td>{l.name}</td>
                <td>{l.referralCode}</td>
                <td>{l.donations}</td>
              </tr>
            ))
          ) : (
            <tr>
              <th colSpan="4" className="text-center">
                {error}
              </th>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default Leaderboard;
