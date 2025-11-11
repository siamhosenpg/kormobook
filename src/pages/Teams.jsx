import React, { useEffect } from "react";
import { useTeamStore } from "../store/useTeamStore";
import Teambox from "../components/ui/Teambox";

const Teams = () => {
  const { Teams, loading, fetchTeam, deleteTeam } = useTeamStore();

  useEffect(() => {
    fetchTeam();
  }, [fetchTeam]);

  if (loading) return <p>Loading Teams...</p>;

  return (
    <div className="Pagearea Toparea">
      {loading ? (
        <div className="flex items-center justify-center h-full">
          <p>Loading...</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Teams.map((team) => (
            <Teambox key={team.teamId} team={team} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Teams;
