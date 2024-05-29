import { useEffect, useState } from "react";

const ProfileFilter = () => {
  const [profiles, setProfiles] = useState([]);
  const [filters, setFilters] = useState({
    instrument: "",
    location: "",
    level: "",
  });

  useEffect(() => {
    const fetchProfiles = async () => {
      const query = new URLSearchParams(filters).toString();
      try {
        const response = await fetch(`/api/profiles?${query}`);
        const data = await response.json();
        setProfiles(data.data);
      } catch (error) {
        console.error("Error fetching profiles:", error);
      }
    };

    fetchProfiles();
  }, [filters]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFilters((prevFilters) => ({ ...prevFilters, [name]: value }));
  };
  console.log("profiles", profiles);
  return (
    <div className="container mx-auto py-4">
      <div className="mb-4">
        <label
          htmlFor="instrument"
          className="block text-sm font-medium text-gray-700"
        >
          Instrument
        </label>
        <input
          type="text"
          id="instrument"
          name="instrument"
          value={filters.instrument}
          onChange={handleChange}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
        />
      </div>
      <div className="mb-4">
        <label
          htmlFor="location"
          className="block text-sm font-medium text-gray-700"
        >
          Location
        </label>
        <input
          type="text"
          id="location"
          name="location"
          value={filters.location}
          onChange={handleChange}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
        />
      </div>
      <div className="mb-4">
        <label
          htmlFor="level"
          className="block text-sm font-medium text-gray-700"
        >
          Level
        </label>
        <input
          type="text"
          id="level"
          name="level"
          value={filters.level}
          onChange={handleChange}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
        />
      </div>
    </div>
  );
};

export default ProfileFilter;
