import { Check, MessageSquareMore, Phone, Video } from "lucide-react";
import doctorOne from "../../assets/doctorOne.png";
import doctorTwo from "../../assets/doctorTwo.png";
import doctorThree from "../../assets/doctorThree.jpg";
import doctorFour from "../../assets/doctorFour.jpg";
import doctorFive from "../../assets/doctorFive.png";
import doctorSix from "../../assets/doctorsix.jpg";
import doctorSeven from "../../assets/doctorseven.jpg";
import doctorEight from "../../assets/doctoreight.jpg";
import doctorNine from "../../assets/doctornine.png";
import doctorTen from "../../assets/doctorten.jpg";
import { useState } from "react";

interface Doctor {
  id: number;
  name: string;
  image: string;
  degree: string;
  specialization: string;
  address: string;
  proffession: string;
  experience: string;
  code: string;
  fees: string;
}

const doctors: Doctor[] = [
  {
    id: 1,
    name: "DR. Zahidul Islam",
    image: doctorOne,
    degree: "(M.B.B.S. ,PGT (Skin &VD),PGT(Medicine))",
    specialization: "Skin Disease, Allergy, Sexual Disease",
    address: "Dhaka Medical College Hospital, Dhaka, Bangladesh",
    proffession: "BMDC registered doctor",
    experience: "4 Years Experience",
    code: "BMDC - 91933",
    fees: "300.00TK",
  },
  {
    id: 2,
    name: "DR. Sayeef Hossain Khan",
    image: doctorTwo,
    degree:
      "(MBBS (DMC), BCS (Health) FCPS (Medicine, GOLD MEDALIST), MRCP (UK), MACP (USA), CCD(Birdem), EULAR Fellow(Switzerland))",
    specialization:
      "ডায়াবেটিস, উচ্চ রক্তচাপ, কিডনি, বাত, পরিপাকতন্ত্র, ফুসফুস, হৃদরোগ, এ্যাজমা, স্নায়ু, চর্ম, হরমোন জনিত রোগ",
    address: "Dhaka Medical College Hospital, Dhaka, Bangladesh",
    proffession: "MBBS( DMC),BCS(Health),FCPS(Medicine),MRCP(UK),MACP(USA)",
    experience: "14 Years Experience",
    code: "BMDC - A59412",
    fees: "500.00TK",
  },
  {
    id: 3,
    name: "DR. FARZANA AFROS",
    image: doctorThree,
    degree:
      "(MBBS (Rajshahi Medical College), CCD (BIRDEM), Certified Course on COVID-19 (Under WHO & DGHS))",
    specialization: "General Physician, Medicine, COVID-19 (Coronavirus)",
    address:
      "Armed Forces Medical College, Dhaka Cantonment, Dhaka, Bangladesh",
    proffession:
      "Present position: Assistant health officer, Dhaka North city corporation",
    experience: "10 Years Experience",
    code: "BMDC - A 69678",
    fees: "200.00TK",
  },
  {
    id: 4,
    name: "Dr Halima khanom Antora",
    image: doctorFour,
    degree: "(MBBS(DU)MD(On-course) (BSMMU)PGT( DMCH))",
    specialization: "Gynae and Medicine specialist",
    address: "Bangabandhu Sheikh Mujib Medical University, Dhaka, Bangladesh",
    proffession: "Leadership abilities to lead...",
    experience: "3 Years Experience",
    code: "BMDC - A 98196",
    fees: "350.00TK",
  },
  {
    id: 5,
    name: "DR. MD. MURAD HOSSAIN",
    image: doctorFive,
    degree:
      "(MBBS, BCS(Health), DD(Thailand), Diploma in Aesthetic Medicine(AAAM,USA), Higher Trained in Sexual Medicine(Hungary))",
    specialization: "Skin, Allergy & Sex disease specialist",
    address: "Shaheed Ahsan Ullah Master General Hospital.",
    proffession: "Ex.consultant, Kuwait Bangladesh Friendship Govt.Hospital",
    experience: "8 Years Experience",
    code: "BMDC - 56805",
    fees: "600.00TK",
  },
  {
    id: 6,
    name: "Dr. Md. Mahbubul Islam",
    image: doctorSix,
    degree: "(MBBS,BCS(Health),DLO(BSMMU))",
    specialization: "নাক, কান, গলা বিভাগ, মেডিসিন, সেক্স",
    address: "Shaheed Suhrawardy Medical College Hospital, Dhaka",
    proffession:
      "As Salamu Alaikum. Dr. Md. Mahbubul Islam is very much patient friendly, Helpful & Dedicated ENT doctor, Having 10 years…",
    experience: "10 Years Experience",
    code: "BMDC - A62931",
    fees: "250.00TK",
  },
  {
    id: 7,
    name: "DR. MD. ZAHIDUL AMIN",
    image: doctorSeven,
    degree: "(MBBS CCD(BIRDEM))",
    specialization: "MEDICINE,NEOROMEDICINE, DIABETOLOGY, CARDIOLOGY",
    address: "National Institute of Neurosciences and Hospital, Agargao, Dhaka",
    proffession:
      "As Salamu Alaikum. Dr. Md. Mahbubul Islam is very much patient friendly, Helpful & Dedicated ENT doctor, Having 10 years…",
    experience: "16 Years Experience",
    code: "BMDC - A51608",
    fees: "550.00TK",
  },
  {
    id: 8,
    name: "DR.AFRID JAHAN",
    image: doctorEight,
    degree: "(MBBS,BCS,DMU(Ultra),PGT(Dermatology))",
    specialization:
      "Experienced in Dermatology &Gynecology Mitford & Shaheed Suhrawardy Medical College and Hospital.",
    address: "Mymensingh Medical College, Mymensingh, Bangladesh",
    proffession:
      "Dr.Afrid Jahan completed MBBS from Mymensingh Medical College in the year of 2008 and afterwards completed her post gratuation…",
    experience: "13 Years Experience",
    code: "BMDC - A48412",
    fees: "250.00TK",
  },
  {
    id: 9,
    name: "ডা. ইমরুল হাসান",
    image: doctorNine,
    degree:
      "(এমবিবিএস( কুমিল্লা মেডিকেল কলেজ), ডিডিভি( চর্ম ও যৌন রোগ), পিজিটি( মেডিসিন), সিসিডি ইন ডায়াবেটোলজি)",
    specialization:
      "চর্ম ও যৌন রোগ(Dermatology and Venereology) Modern hospital Ltd",
    address: "কুমিল্লা মেডিকেল কলেজ কুমিল্লা বাংলাদেশ",
    proffession:
      "আসসালামু আলাইকুম। আমি ডাক্তার ইমরুল হাসান।   আমি  2014 সালে  কুমিল্লা মেডিকেল কলেজ থেকে এমবিবিএস সম্পন্ন করি। আমি বঙ্গবন্ধু…",
    experience: "5 Years Experience",
    code: "BMDC - A74393",
    fees: "300.00TK",
  },
  {
    id: 10,
    name: "Dr Mst Happy Begum",
    image: doctorTen,
    degree:
      "(MBBS,DGO(On Course)in BSMMU; Fcps part-02( Trainee)(Obstetrics and Gynaecology))",
    specialization: "Gynaecologist, Obstetrics,Covid-19",
    address: "BSMMU(Bangabandhu Sheikh Mujib Medical University), Dhaka",
    proffession:
      "I am Dr Mst Happy Begum.I have completed my MBBS degree from Shaheed  Suhrawardy Medical College.",
    experience: "4 Years Experience",
    code: "BMDC - A95209",
    fees: "300.00TK",
  },
];


const itemsPerPage = 5;
const HeroCard = () => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const totalPages = Math.ceil(doctors.length / itemsPerPage);
  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentDoctors = doctors.slice(startIndex, startIndex + itemsPerPage);

  return (
    <div className="pt-20">
      {currentDoctors.map((doctor) => (
        <div
          key={doctor.id}
          className="group w-full flex flex-col md:flex-row justify-center md:justify-start items-center border-b bg-white shadow h-full pb-8 pt-8 transition duration-300 hover:shadow-lg hover:bg-gray-100"
        >
          <div className="md:w-[70%] md:px-3 flex flex-col md:flex-row items-center md:justify-start justify-center">
            <div className="flex flex-shrink-0 items-center gap-4 h-28 w-28 rounded-full overflow-hidden">
              <img
                src={doctor.image}
                alt={doctor.name}
                className="w-full h-full object-cover bg-gray-200"
              />
            </div>
            <div className="px-0 md:px-4 text-center md:text-start">
              <h2 className="text-xl font-semibold">{doctor.name}</h2>
              <h4 className="text-md font-medium text-red-700">
                {doctor.degree}
              </h4>
              <p className="text-md text-gray-600">{doctor.specialization}</p>
              <p className="text-md text-gray-600">{doctor.address}</p>
              <p className="text-md text-gray-600">{doctor.proffession}</p>
            </div>
          </div>
          <div className="relative md:w-[30%] pt-5 md:pt-0 md:border-l px-3 flex flex-col gap-2">
            <div className="flex gap-2 mb-2">
              <Check className="text-red-600 rounded-full bg-red-100" />
              <h3 className="text-md text-gray-600">{doctor.experience}</h3>
            </div>
            <div className="flex gap-2 mb-2">
              <Check className="text-red-600 rounded-full bg-red-100" />
              <h3 className="text-md text-gray-600">{doctor.code}</h3>
            </div>
            <div className="flex gap-2 mb-2">
              <Check className="text-red-600 rounded-full bg-red-100" />
              <h3 className="text-md text-gray-600">Fees: {doctor.fees}</h3>
            </div>
            <div className="pt-3 pb-3 flex flex-col items-center gap-4 text-center">
              <div className="flex items-center gap-4">
                <Phone />
                <MessageSquareMore />
                <Video />
              </div>
            </div>
            <div>
              <button className="xl:absolute xl:-right-[90px] xl:top-14 xl:rotate-90 px-4 py-2 text-red-700 font-medium border border-gray-200 cursor-pointer transition duration-300 group-hover:bg-red-600 group-hover:text-white group-hover:border-red-600">
                Book Appointment
              </button>
            </div>
          </div>
        </div>
      ))}
      <div className="flex justify-center items-center gap-4 mt-4">
        <button
          onClick={handlePrevPage}
          disabled={currentPage === 1}
          className="px-4 py-2 bg-gray-200 cursor-pointer rounded-md disabled:opacity-0"
        >
          Previous
        </button>
        <p className="text-lg font-medium">
          {" "}
          <span className="px-3 py-1 border text-red-500">
            {currentPage}
          </span>{" "}
          <span className="px-3 py-1 border">{totalPages}</span>
        </p>
        <button
          onClick={handleNextPage}
          disabled={currentPage === totalPages}
          className="px-4 py-2 bg-gray-200 rounded-md cursor-pointer disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default HeroCard;
