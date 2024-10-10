import React from "react";
import Hero from "@/components/Hero";
import './styles.css';

interface CardProps {
  name: string;
  role: string;
  description: string;
}

const Card: React.FC<CardProps> = ({ name, role, description }) => (
    <div className="body">
      <h2 >{name}</h2> 
      <p>{role}</p> 
      <p>{description}</p> 
    </div>
);

const StaffPpl = [
  {
    name: "Staff",
    role: "Role",
    description: "description"
  }
]

export default function StaffPage() {
  return (
    <div>
      <Hero
        title="Meet the Staff"
        subtitle=""
        description="The dedicated team behind Noble and Greenough Model UN Conference"
        buttonText="Register Now"
        backgroundImage="/background.jpeg"
      />

    <div className="staff">
        {StaffPpl.map((staff, index) => (
          <Card
            key={index}
            name={staff.name}
            role={staff.role}
            description={staff.description}
          />
        ))}
      </div>
    </div>
  );
}
