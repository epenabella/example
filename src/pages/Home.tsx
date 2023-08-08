import { useState } from "react";

const getUsers = async function () {
  const res = await fetch("http://localhost:5175/api/user-profiles");
  return await res.json();
};

const Home = () => {
  const [users, setUsers] = useState<any[]>();
  return (
    <>
      <h1>Home</h1>
      <div>Maybe a header</div>
      <div>BODY</div>
      <button onClick={() => getUsers().then(setUsers)}>Get Users</button>
      {users && (
        <>
          {users.map((_: any) => (
            <div key={_.Id}>{_.FirstName}</div>
          ))}
        </>
      )}

      <div>Maybe a footer?</div>
    </>
  );
};

export default Home;
