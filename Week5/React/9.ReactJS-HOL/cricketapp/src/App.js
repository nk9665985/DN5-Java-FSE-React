import "./App.css";
import ListofPlayers from "./ListofPlayers";
import {
  OddPlayers,
  EvenPlayers,
  IndianPlayers,
  ListofIndianPlayers,
  IndianTeam
} from "./IndianPlayers";

function App() {
  var flag = true;

  if (flag === true) {
    return (
        <div>
          <ListofPlayers />
        </div>
    );
  } else {
    return (
        <div>
          <h1>Indian Team</h1>

          <h1>Odd Players</h1>
          {OddPlayers(IndianTeam)}

          <hr />

          <h1>Even Players</h1>
          {EvenPlayers(IndianTeam)}

          <hr />

          <h1>List of Indian Players Merged:</h1>
          <ListofIndianPlayers IndianPlayers={IndianPlayers} />
        </div>
    );
  }
}

export default App;