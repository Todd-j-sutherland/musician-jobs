import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui";
import Image from "next/image";

const UserProfileCard = ({
  id,
  image,
  name,
  instrument,
  location,
  level,
  description,
}) => {
  return (
    <Card
      key={id}
      className="mx-auto my-4 flex flex-col md:flex-row items-center md:items-start"
    >
      <div className="relative w-24 h-24 md:w-32 md:h-32 mx-4 my-2 md:my-0 self-center">
        <Image
          src={image}
          alt={name}
          fill
          className="rounded-full object-cover"
        />
      </div>
      <div className="flex flex-col">
        <CardHeader>
          <CardTitle>{name}</CardTitle>
          <CardDescription>{instrument}</CardDescription>
        </CardHeader>
        <CardContent>
          <p>
            <strong>Location:</strong> {location}
          </p>
          <p>
            <strong>Level:</strong> {level}
          </p>
          <p>
            <strong>Description:</strong> {description}
          </p>
        </CardContent>
        <CardFooter>
          <p>Contact details or additional footer content</p>
        </CardFooter>
      </div>
    </Card>
  );
};

export default UserProfileCard;
