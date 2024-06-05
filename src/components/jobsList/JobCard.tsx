"use client";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui";

const JobCard = ({
  id,
  jobTitle,
  jobDescription,
  location,
  instrument,
  companyName,
  salaryRange,
  employmentType,
  applicationDeadline,
  contactEmail,
}) => {
  return (
    <Card
      key={id}
      className="mx-auto my-4 flex flex-col md:flex-row items-center md:items-start"
    >
      <div className="flex flex-col w-full">
        <CardHeader>
          <CardTitle>{jobTitle}</CardTitle>
          <CardDescription>{instrument}</CardDescription>
        </CardHeader>
        <CardContent>
          <p>
            <strong>Company:</strong> {companyName}
          </p>
          <p>
            <strong>Location:</strong> {location}
          </p>
          <p>
            <strong>Salary Range:</strong> {salaryRange}
          </p>
          <p>
            <strong>Employment Type:</strong> {employmentType}
          </p>
          <p>
            <strong>Application Deadline:</strong>{" "}
            {new Date(applicationDeadline).toLocaleDateString()}
          </p>
          <p>
            <strong>Description:</strong> {jobDescription}
          </p>
        </CardContent>
        <CardFooter>
          <p>
            <strong>Contact:</strong> {contactEmail}
          </p>
        </CardFooter>
      </div>
    </Card>
  );
};

export default JobCard;
