"use client";
import { useEffect, useState } from "react";
import mockProfiles from "@/mock/profiles";
import UserProfileCard from "@/components/profileList/user-profile-card";
import ProfileFilter from "@/components/profileList/filter";

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
      <div className="flex">
        <div>
          <ProfileFilter />
        </div>

        <div>
          {users.map((profile) => {
            return (
              <UserProfileCard
                id={profile.id}
                key={profile._id}
                name={profile.name}
                instrument={profile.instrument}
                location={profile.location}
                level={profile.level}
                description={profile.description}
                image={profile.imageUrl}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
