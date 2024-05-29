"use client";
import { useEffect, useState } from "react";
import mockProfiles from "@/mock/profiles";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui";

const ProfilePage = () => {
  const [users, setUsers] = useState(mockProfiles);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch("/api/users");
        if (!response.ok) {
          throw new Error("Failed to fetch users");
        }
        const data = await response.json();
        setUsers(data.data);
      } catch (error) {
        setError(error.message);
      }
    };

    // fetchUsers();
  }, []);

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h1>User Profiles</h1>
      {users[0].image}
      <Card className="max-w-md mx-auto my-4 flex flex-col md:flex-row items-center md:items-start">
        <img
          src={users[0].image}
          alt={users[0].name}
          className="w-24 h-24 md:w-32 md:h-32 rounded-full mx-4 my-2 md:my-0"
        />
        <div className="flex flex-col">
          <CardHeader>
            <CardTitle>{users[0].name}</CardTitle>
            <CardDescription>{users[0].instrument}</CardDescription>
          </CardHeader>
          <CardContent>
            <p>
              <strong>Location:</strong> {users[0].location}
            </p>
            <p>
              <strong>Level:</strong> {users[0].level}
            </p>
            <p>
              <strong>Description:</strong> {users[0].description}
            </p>
          </CardContent>
          <CardFooter>
            <p>Contact details or additional footer content</p>
          </CardFooter>
        </div>
      </Card>
      {/* <ul>
        {users.map((user) => (
          <li key={user._id}>
            {user.name} - {user.email}
          </li>
        ))}
      </ul> */}
    </div>
  );
};

export default ProfilePage;
