"use client";
import { useEffect, useState } from "react";
import UserProfileCard from "@/components/profileList/user-profile-card";
import ProfileFilter from "@/components/profileList/filter";

const ProfilePage = () => {
  const [users, setUsers] = useState([]);
  const [filters, setFilters] = useState({
    instrument: "",
    location: "",
    level: "",
  });
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProfiles = async () => {
      const query = new URLSearchParams(filters).toString();
      try {
        const response = await fetch(`/api/profiles?${query}`);
        const data = await response.json();
        if (data.success) {
          setUsers(data.data);
        } else {
          setError(data.message);
        }
      } catch (error) {
        setError("Error fetching profiles");
      }
    };

    fetchProfiles();
  }, [filters]);

  const handleFilterChange = (newFilters: any) => {
    setFilters(newFilters);
  };

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="container mx-auto py-4">
      <h1 className="text-3xl font-bold mb-6">User Profiles</h1>
      <div className="flex flex-col md:flex-row gap-4">
        <div className="w-full md:w-1/4 mb-4 md:mb-0">
          <ProfileFilter
            filters={filters}
            onFilterChange={handleFilterChange}
          />
        </div>
        <div className="w-full md:w-3/4">
          {users.map((profile) => (
            <UserProfileCard
              key={profile._id}
              name={profile.name}
              instrument={profile.instrument}
              location={profile.location}
              level={profile.level}
              description={profile.description}
              imageUrl={profile.imageUrl}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
