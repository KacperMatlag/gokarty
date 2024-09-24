import "./tournamentListElement.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare, faTableList } from "@fortawesome/free-solid-svg-icons";

const TournamentListElement = () => {
  return (
    <div style={{ padding: "5px", width: "100%" }}>
      <div className="tournamentListElementContiner p-3">
        <img
          src="https://t4.ftcdn.net/jpg/04/38/89/23/360_F_438892395_rBFn1ok5VpKxI9Qc3cP1ggypplEBkcJS.jpg"
          alt="logo"
        />
        <div className="tournamentContent">
          <h5>Nazwa</h5>
          <p>data</p>
        </div>
        <div className="tournamentsControls">
          <button className="btn btn-dark">
            <FontAwesomeIcon icon={faTableList} />
            Tabela
          </button>
          <button className="btn btn-light">
            <FontAwesomeIcon icon={faPenToSquare} />
            Modyfikacja
          </button>
        </div>
      </div>
    </div>
  );
};
export default TournamentListElement;
