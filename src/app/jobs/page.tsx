"use client";
import { useEffect, useState } from "react";
import JobCard from "@/components/jobsList/JobCard";

const JobsPage = () => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response = await fetch("/api/jobs");
        const result = await response.json();
        if (response.ok) {
          setJobs(result.data);
        } else {
          setError(result.message);
        }
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchJobs();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div className="min-h-screen flex flex-col items-center bg-gray-100 py-8">
      <h1 className="text-3xl font-bold mb-6">Job Postings</h1>
      <div className="w-full max-w-4xl">
        {jobs.map((job) => (
          <JobCard key={job._id} {...job} />
        ))}
      </div>
    </div>
  );
};

export default JobsPage;
