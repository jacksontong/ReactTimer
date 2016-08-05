import React from 'react';
import Nav from './Nav';

const Main = (props) => {
  return (
    <div>
      <div>
        <div>
          <Nav/>
          <p>Main.jsx Rendered</p>
          {props.children}
        </div>
      </div>
    </div>
  );
};

export default Main;
