import { TournamentListElement } from "../../components/componentsExport";
import "./tournaments.css";

const Tournaments = () => {
  return (
    <div className="d-flex">
      <div className="w-75">
        <div className="tournamentList">
          <TournamentListElement />
          <TournamentListElement />
          <TournamentListElement />
        </div>
      </div>
      <div className="w-25">2</div>
    </div>
  );
};
export default Tournaments;
