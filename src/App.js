import "./styles.css";
import data from "./unfaelle.json";

export default function App() {
  const unfaelle = data; // Unfaelle ist ein Array mit Objekten aus der JSON Datei.

  // Aufgabe 1
  const letzterUnfall = unfaelle[unfaelle.length - 1];
  const unfall = `${letzterUnfall.id_unfall}: ${letzterUnfall.schwere}`;

  // Aufgabe 2
  const unfaelleNebenstrasse = unfaelle.filter(u => u.strasseart === "Nebenstrasse");
  console.log(unfaelleNebenstrasse)

  // Aufgabe 3
  const foundUnfaelle = unfaelle.find((u) => u.jahr === "2015" && u.monat === 11 && u.fahrrd_bet === true);
  console.log(foundUnfaelle) 

  return (
    <div className="App">
      <div>{unfall}</div>
      <br></br>
      <ol>
      {
        unfaelle.map(unfall => (<li>{unfall.id_unfall}</li>))


      }

      </ol>
    </div>
  );
}
