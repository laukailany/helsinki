import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const Statistik = (props) => {
  if (props.summe === 0 && props.title === true) {
    return (
      <tr>
        <td>Kein Feedback gegeben</td>
      </tr>
    );
  }

  if (props.summe === 0) {
    return (
      <tr>
        <td></td>
      </tr>
    );
  }

  return (
    <tr>
      <td>{props.name}: {props.inhalt}</td>
    </tr>
  );
};

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>
    {text}
  </button>
);

const App = () => {
  const [gut, setGut] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [schlecht, setSchlecht] = useState(0);

  const handleGutClick = () => {
    setGut(gut + 1);
  };

  const handleNeutralClick = () => {
    setNeutral(neutral + 1);
  };

  const handleSchlechtClick = () => {
    setSchlecht(schlecht + 1);
  };

  return (
    <div>
      <div>
        <h1>Geben Sie Feedback</h1>
        <Button handleClick={handleGutClick} text='Gut' />
        <Button handleClick={handleNeutralClick} text='Neutral' />
        <Button handleClick={handleSchlechtClick} text='Schlecht' />
        <h1>Statistik</h1>
        <table>
          <tbody>
            <Statistik title={true} summe={gut + schlecht + neutral} />
            <Statistik name="Gut" summe={gut + schlecht + neutral} inhalt={gut} />
            <Statistik name="Neutral" summe={gut + schlecht + neutral} inhalt={neutral} />
            <Statistik name="Schlecht" summe={gut + schlecht + neutral} inhalt={schlecht} />
            <Statistik name="Durchschnitt" summe={gut + schlecht + neutral} inhalt={(gut - schlecht) / (gut + schlecht + neutral)} />
            <Statistik name="Positiv" summe={gut + schlecht + neutral} inhalt={(gut) / (gut + schlecht + neutral) * 100} />
          </tbody>
        </table>
      </div>
    </div>
  );
};

ReactDOM.render(<App />,
  document.getElementById('root')
);