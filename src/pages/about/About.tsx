import about1 from "../../assets/about1.jpg";
import about2 from "../../assets/about2.jpg";
import about3 from "../../assets/about3.jpg";
import bdtask from "../../assets/bdtask.jpeg";

interface TeamMember {
  img: string;
  name: string;
  role: string;
}

const teamMembers: TeamMember[] = [
  { img: about1, name: "Sumch Muhammad Tarek", role: "Managing Director" },
  { img: about2, name: "Tanzil Ahmad", role: "CEO" },
  { img: about3, name: "Tohidul Islam", role: "CMO" },
];

const About = () => {
  return (
    <div className="py-10 px-6 sm:px-12 md:px-20 lg:px-40 xl:px-72 max-w-7xl mx-auto">
      <h1 className="text-3xl sm:text-4xl font-bold text-[#343a40]">
        About Us
      </h1>
      <p className="text-[#555a64] pt-3 pb-6 max-w-3xl mx-auto">
        Sebagar is a unique idea project implemented by Bdtask Limited. Our main
        goal is to provide quality healthcare and build a global community.
      </p>

      <div className="space-y-4 text-[#555a64] max-w-3xl mx-auto">
        <p>
          We have a great team continuously working to build the best platform
          for the Bangladeshi community and beyond.
        </p>
        <p>
          Bay Cliff Consultant & Tell Us are working on our international
          consultation. We plan to expand Sebagar health services globally,
          starting with African countries.
        </p>
        <p>
          Our goal is to provide opportunities for developing and underdeveloped
          nations. Bangladesh is our pilot project, and we aim to expand our
          operations soon.
        </p>
      </div>

      <h3 className="text-[#2c3038] text-2xl font-bold mt-10">
        Our Team Members
      </h3>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-6">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className="bg-white border rounded-sm pt-5 flex flex-col text-center relative"
          >
            <img
              src={member.img}
              alt={member.name}
              className="object-cover rounded-b-full rounded-t-full"
            />
            <h3 className="mt-4 text-lg font-semibold">{member.name}</h3>
            <h4 className="text-sm text-gray-600">{member.role}</h4>
            <p className="absolute -mt-8 bg-[#007bff] left-[40%] md:left-[32%] text-white rounded-sm px-2 py-0.5 text-xs font-medium">
              Co-founder
            </p>
          </div>
        ))}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-6">
        <div className="flex flex-col border rounded-sm">
          <img src={bdtask} alt="bdtask" className="rounded-full mt-5" />
          <h3 className="font-medium">Bdtask Limited</h3>
          <p>Technology Partner</p>
        </div>
      </div>
    </div>
  );
};

export default About;
