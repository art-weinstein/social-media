import React from "react";

function Header() {
  return (
    <React.Fragment>
      <div className="header navbar">
        <div className="btn-group">
          <button className="btn btn-outline-dark">Home</button>
          <button className="btn btn-outline-dark">Notifications</button>
          <button className="btn btn-outline-dark">Messages</button>
        </div>
        <div>
          <form className="form-inline">
            <label>
              Search
              <input type="text" className="text-input" name="search" />
            </label>
            <input
              type="submit"
              className="btn btn-outline-dark"
              value="Post"
            />
          </form>
        </div>
      </div>
      <hr />
    </React.Fragment>
  );
}

export default Header;
