import { useEffect, useState } from "react";
import "./App.css";
import Input from "./components/Input";
import UserCard from "./components/UserCard";
import users from "./utils/data";

function App() {
  const [usersData] = useState(users);
  const [filterData, setFilterData] = useState(users);
  const [query, setQuery] = useState("");

  useEffect(() => {
    if (query !== "") {
      const filtered = usersData.filter(
        (user) =>
          user.name.toLowerCase().includes(query.toLowerCase()) ||
          user.role.toLowerCase().includes(query.toLowerCase())
      );
      setFilterData(filtered);
    } else {
      setFilterData(usersData);
    }
  }, [query, usersData]);

  return (
    <div className="p-4 min-h-screen bg-gray-100">
      <h1 className="font-bold text-4xl text-center text-indigo-700 mb-6">
        User Data
      </h1>

      <Input query={query} setQuery={setQuery} />

      <div className="my-6 flex flex-wrap gap-6 justify-center">
        {filterData.length > 0 ? (
          filterData.map((user) => <UserCard key={user.id} user={user} />)
        ) : (
          <div className="text-red-500 text-xl font-medium capitalize">
            No users to display
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
