
import React from 'react';
import Typical from 'react-typical'
function Home() {
  return (
    <div>
      <Typical
      loop={Infinity}
      steps={[
        "You know what?",
        1000,
        "I am still working on this",
        1000,
        "But I am getting there",
        1000
      ]}
      />
    </div>
  );
}

export default Home;
