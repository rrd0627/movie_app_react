import React from 'react';

function Food({ fav }) {
  return <div>I like {fav}</div>;

}

function App() {
  return (
    <div>
      hello!

      <Food fav="kogi" />
      <Food fav="kog1" />
      <Food fav="kog2" />

    </div>


  );
}

export default App;
