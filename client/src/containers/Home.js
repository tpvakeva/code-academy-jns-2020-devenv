import React from "react";
import { Link } from "react-router-dom";

function Home(props) {
  return (
    <div>
      <h1>Code Academy Joensuu 2020</h1>
      <nav>
        <ol>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/styling">Styling</Link>
          </li>
          <li>
            <Link to="/forms">Forms</Link>
          </li>
          <li>
            <Link to="/users">Users</Link>
          </li>
          <li>
            <Link to="/books">Books</Link>
          </li>
          <li>
            <Link to="/graphs">Graphs</Link>
          </li>
        </ol>
      </nav>
    </div>
  );
}

export default Home;
