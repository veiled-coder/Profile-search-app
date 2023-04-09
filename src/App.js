import { useState } from "react";
import "./App.css";
import Search from "./components/Search";
import UserProfiles from "./components/UserProfiles";

function App() {
  //lifting up state to use in children components
  const [user, setUser] = useState("");
  return (
    <div className="App">
      <Search user={user} setUser={setUser} />
      <UserProfiles user={user} />
    </div>
  );
}

export default App;
