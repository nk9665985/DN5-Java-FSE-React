import React, { useState } from "react";

function GuestPage() {
  return (
      <div>
        <h2>Please sign up.</h2>

        <h3>Flight Details</h3>

        <ul>
          <li>Delhi → Mumbai</li>
          <li>Bangalore → Chennai</li>
          <li>Hyderabad → Kolkata</li>
        </ul>
      </div>
  );
}

function UserPage() {
  return (
      <div>
        <h2>Welcome back</h2>

        <h3>You can now book your tickets.</h3>

        <table border="1" cellPadding="10">
          <thead>
          <tr>
            <th>Flight</th>
            <th>Route</th>
            <th>Status</th>
          </tr>
          </thead>

          <tbody>
          <tr>
            <td>AI101</td>
            <td>Delhi → Mumbai</td>
            <td>Book Now</td>
          </tr>

          <tr>
            <td>AI202</td>
            <td>Bangalore → Chennai</td>
            <td>Book Now</td>
          </tr>

          <tr>
            <td>AI303</td>
            <td>Hyderabad → Kolkata</td>
            <td>Book Now</td>
          </tr>
          </tbody>
        </table>
      </div>
  );
}

function LoginButton(props) {
  return (
      <button onClick={props.onClick}>
        Login
      </button>
  );
}

function LogoutButton(props) {
  return (
      <button onClick={props.onClick}>
        Logout
      </button>
  );
}

function Greeting(props) {
  if (props.isLoggedIn) {
    return <UserPage />;
  }

  return <GuestPage />;
}

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const login = () => {
    setIsLoggedIn(true);
  };

  const logout = () => {
    setIsLoggedIn(false);
  };

  return (
      <div style={{ padding: "30px" }}>
        <Greeting isLoggedIn={isLoggedIn} />

        <br />

        {isLoggedIn ? (
            <LogoutButton onClick={logout} />
        ) : (
            <LoginButton onClick={login} />
        )}
      </div>
  );
}

export default App;