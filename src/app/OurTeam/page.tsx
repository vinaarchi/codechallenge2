"use client";

import * as React from "react";
import axios from "axios";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

interface User {
  name: {
    first: string;
    last: string;
  };
  picture: {
    large: string;
  };
  email: string;
  location: {
    city: string;
    country: string;
  };
}

const Ourteam = () => {
  const [team, setTeam] = React.useState<User[]>([]);

  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://randomuser.me/api/?results=6"
        );
        setTeam(response.data.results);
      } catch (error) {
        console.log("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      <Navbar />
      <div className="flex flex-col pt-5 ">
        <h1 className="text-4xl font-rafeny font-bold text-center mb-8 text-customDarkBlue">
          Our Team
        </h1>
        <div className="flex flex-col md:flex-row md:flex-wrap justify-center gap-8 pb-10">
          {team.map((user, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg p-6 text-center"
            >
              <img
                src={user.picture.large}
                alt={`${user.name.first} ${user.name.last}`}
                className="w-24 h-auto rounded-md mx-auto mb-4"
              />
              <h3>
                {user.name.first} {user.name.last}
              </h3>
              <p>{user.email}</p>
              <p>
                {user.location.city} {user.location.country}
              </p>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Ourteam;
