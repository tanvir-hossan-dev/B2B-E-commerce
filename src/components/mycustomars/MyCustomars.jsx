import React, { useEffect, useState } from "react";
import { getDatabase, ref, onValue } from "firebase/database";
import gravatarUrl from "gravatar-url";

const MyCustomars = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    const db = getDatabase();
    const starCountRef = ref(db, "users/");
    onValue(starCountRef, (snapshot) => {
      const data = snapshot.val();
      const Arr = data && Object.keys(data).map((key) => ({ ...data[key] }));
      setUsers(Arr);
    });
  }, []);

  return (
    <div className="w-[1200px] m-auto border-[1px] mt-[100px] mb-8 border-solid py-4 px-6 border-gray-300 rounded-sm">
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th>index</th>
              <th>Photo</th>
              <th>Name</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {users?.map((user, index) => {
              const { email, username } = user;

              return (
                <tr key={index}>
                  <th className="w-[70px]">{index + 1}</th>
                  <td>
                    <img className="w-[40px] h-[40px]" src={gravatarUrl(email)} alt={username} />
                  </td>
                  <td>{username}</td>
                  <td>Details</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyCustomars;
