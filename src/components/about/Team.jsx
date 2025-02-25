import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaLinkedin } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { FiHexagon } from "react-icons/fi";
import { LuIceCreamCone } from "react-icons/lu";

const Team = () => {
  const [teamMembers, setTeamMembers] = useState([]);
  const [filteredMembers, setFilteredMembers] = useState([]);
  const [visibleMembers, setVisibleMembers] = useState(9);
  const [selectedFilter, setSelectedFilter] = useState("all");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/data/team.json")
      .then((response) => response.json())
      .then((data) => {
        setTeamMembers(data.teamMembers);
        setFilteredMembers(data.teamMembers);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching team data:", error);
        setLoading(false);
      });
  }, []);

  const filterMembers = (filter) => {
    setSelectedFilter(filter);
    if (filter === "all") {
      setFilteredMembers(teamMembers);
    } else {
      setFilteredMembers(
        teamMembers.filter((member) =>
          member.position.toLowerCase().includes(filter)
        )
      );
    }
  };

  const loadMoreMembers = () => {
    setVisibleMembers((prev) => prev + 9);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="team-container flex">
      <div className="team-filter w-[auto] mr-[40px] sticky top-0 h-screen overflow-y-auto bg-white p-4">
        <div className="flex items-start filter-list flex-col space-y-3">
          {[
            { label: "All Members", value: "all" },
            { label: "Director", value: "director" },
            { label: "Chief Executive Officer", value: "ceo" },
            { label: "Manager", value: "manager" },
            { label: "Head of Department", value: "hod" },
            { label: "Executive Manager", value: "executive" },
            { label: "Executive Assistant", value: "assistant" },
          ].map(({ label, value }) => (
            <button
              key={value}
              className={`filter-btn ${
                selectedFilter === value
                  ? "font-bold text-[#003399] font-[Roboto-italics] text-[30px] flex items-center flex-row"
                  : "text-[#010440] font-[Roboto-thin] text-[25px] flex items-center flex-row"
              }`}
              onClick={() => filterMembers(value)}
            >
              {selectedFilter === value && <FiHexagon className="mr-[5px]" />} {label}
            </button>
          ))}
        </div>
        <button className="btn-primary mt-5">Join Us</button>
      </div>

      <div className="flex-1 flex flex-col">
        <div className="team-members w-full grid x-sm:grid-col3  lg:grid-cols-3 gap-6 p-4">
          {filteredMembers.slice(0, visibleMembers).map((member, index) => (
            <div
              key={index}
              className="member-card relative w-[100%] h-[400px] flex justify-center bg-cover bg-center rounded-[1.5rem] overflow-hidden group"
              style={{ backgroundImage: `url(${member.image})` }}
            >
              <div className="overlay absolute inset-0 bg-[#01498499] opacity-100 group-hover:bg-[#52a56499] transition-opacity duration-300 flex justify-center items-end">
                <div className="info w-full px-[20px] py-[20px] text-white">
                  <h3 className="font-[Roboto] uppercase text-[20px] text-[#ffffff]">{member.name}</h3>
                  <p>{member.position}</p>
                  <div className="social-links flex items-center justify-start">
                    <Link href={member.linkedin} passHref>
                      <span className="text-white"><FaLinkedin className="mx-[5px]" /></span>
                    </Link>
                    <Link href={`mailto:${member.email}`} passHref>
                      <span className="text-white"><MdOutlineEmail className="mx-[5px]" /></span>
                    </Link>
                  </div>
                </div>
              </div>
              
              {/* SVG and Ice Cream Cone Icon on hover */}
              <div className="absolute top-[-20px] right-[-10px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center">
                {/* Ice Cream Cone Icon */}
                <LuIceCreamCone className="text-black text-[30px] z-[1] mb-[-10px]" />
                {/* SVG corner icon */}
                <img
                  src="data:image/svg+xml;charset=utf-8,<svg xmlns='http://www.w3.org/2000/svg' width='70' height='65' fill='none' preserveAspectRatio='none'><path fill='%23fff' fill-rule='evenodd' d='M49.645 46.763C60.34 46.763 70 54.928 70 65V24C70 10.745 59.255 0 46 0H0c10.693 0 19.362 8.165 19.362 18.237V35.54c0 6.198 5.334 11.223 11.915 11.223z' clip-rule='evenodd'/></svg>"
                  alt="Corner SVG"
                  className="w-[70px] h-[65px] z-[4]"
                />
              </div>
              <div className="absolute top-[10px] right-[5px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center">
              <LuIceCreamCone className="text-black text-[30px] z-[5] mb-[-10px]" />

              </div>
            </div>
          ))}
        </div>

        {filteredMembers.length > visibleMembers && (
          <div>
            <div className="mt-5 w-full flex justify-center">
              <button className="btn-primary-green" onClick={loadMoreMembers}>
                Show More
              </button>
            </div>
            <div className="mt-5 w-full flex justify-center">
              {visibleMembers} of {filteredMembers.length}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Team;
