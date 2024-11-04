import React from "react";
import Hero from "@/components/Hero";
import './styles.css';

interface CardProps {
  name: string;
  role: string;
  description: string;
}

const Card: React.FC<CardProps & { top: string; left: string }> = ({ name, role, description, top, left }) => (
  <div className="body" style={{ top, left }}>
    <h2>{name}</h2>
    <p>{role}</p>
    <p>{description}</p>
  </div>
);

const StaffPpl = [
  {
    name: "Staff",
    role: "[Role]",
    description: "[description wjoifrjgwjigjojgiwjgrojfoiwjigojwoijrgiowrjogjowirgfwijfrowjfoiwjifjwoifjowijr]",
    top: "450px",   
    left: "30px"
  },
  {
    name: "Staff2",
    role: "Role", 
    description:"description", 
    top:"450px", 
    left:"400px"
  },
  {
    name: "Staff3",
    role: "Role", 
    description:"description", 
    top:"450px", 
    left:"770px"
  },
  {
    name: "Staff3",
    role: "Role", 
    description:"description", 
    top:"450px", 
    left:"1140px"
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
      top={staff.top}
      left={staff.left}
    />
  ))}
    </div>

    </div>
  );
}
