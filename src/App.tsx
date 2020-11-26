import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Overview</h1>
          {Block1("Updates", "Updates")}
          {Block2("Marriage Status", "Marriage Status")}
      </header>
    </div>
  );
}

function Block1(label: string, name: string) {
  return (
  <section className="block1">
    <h3>{label}</h3>
    <h2>{name}</h2>
    12/27/19 @11:51AM: Howard changed the CDE name to General Health Score. <br />
    2/14/20 @7:13AM: Debby added to the discussion board. <br />
    3/5/20 @1:28PM: Janet proposed adding a new column. <br />
  </section>
  )
}

function Block2(label: string, name: string) {
  return (
  <section className="block2">
    <h3>{label}</h3>
    <h3>{name}</h3>
    12/27/19 @11:51AM: Howard changed the CDE name to General Health Score. <br />
    2/14/20 @7:13AM: Debby added to the discussion board. <br />
    3/5/20 @1:28PM: Janet proposed adding a new column. <br />
  </section>
  )
}

export default App;
