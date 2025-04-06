import sebaOne from "../../assets/seba/sebaOne.jpg";
import sebaTwo from "../../assets/seba/sebaTwo.jpg";
import sebaThree from "../../assets/seba/sebaThree.jpg";
import sebaFour from "../../assets/seba/sebaFour.jpeg";
import sebaFive from "../../assets/seba/sebaFive.png";
import sebaSix from "../../assets/seba/sebaSix.jpg";
import sebaSeven from "../../assets/seba/sebaSeven.jpg";
import sebaEight from "../../assets/seba/sebaEight.jpeg";
import sebaNine from "../../assets/seba/sebaNine.jpg";
import sebaTen from "../../assets/seba/sebaTen.png";
import sebaEleven from "../../assets/seba/sebaEleven.jpg";
import sebaTwelve from "../../assets/seba/sebaTwelve.jpg";
import sebaThirteen from "../../assets/seba/sebaThertin.jpg";
import sebaFourteen from "../../assets/seba/sebaFourteen.jpg";
import sebaFifteen from "../../assets/seba/sebaFiften.jpg";

const sebaBlogs = [
  {
    id: 1,
    image: sebaOne,
    title: "অর্থোপেডিক চিকিৎসা",
    description:
      "শিশুদের জন্মগত পায়ের ত্রুটি এবং শিশুদের জন্মগত পা বাঁকার চিকিৎসা",
  },
  {
    id: 2,
    image: sebaTwo,
    title: "ত্বক ও এলার্জি",
    description:
      "দাম্পত্যজীবনে কলহ,হতাশা,অস্থিরতা,হতাশা,কিংবা পারষ্পরিক সম্পর্কের টানাপোড়েন",
  },
  {
    id: 3,
    image: sebaThree,
    title: "ত্বক ও এলার্জি",
    description:
      "অনেকে আমার কাছে তার বয়স অনুযায়ী কিভাবে ত্বকের যত্ন নিবেন তা জানতে চেয়েছেন।",
  },
  {
    id: 4,
    image: sebaFour,
    title: "ত্বক ও এলার্জি",
    description: "দাঁদ রোগ।ডা.মোঃ মুরাদ হোসেন",
  },
  {
    id: 5,
    image: sebaFive,
    title: "Corona News",
    description: "করোনাঃ আতংক নয়,করুন জয় । ডা.ফাতেমা খান",
  },
  {
    id: 6,
    image: sebaSix,
    title: "Corona News",
    description: "ঘরে বসে ডাক্তার দেখাতে ইন্সটল করুন সেবাঘর অ্যাপ।",
  },
  {
    id: 7,
    image: sebaSeven,
    title: "Corona News",
    description:
      "কাজী অক্সিজেন লিমিটেড - জরুরী প্রয়োজনে অক্সিজেনের চাহিদা পূরণে।",
  },
  {
    id: 8,
    image: sebaEight,
    title: "ত্বক ও এলার্জি",
    description: "হাত-পায়ের তালু ঘামাঃ কারণ ও প্রতিকার। ডা.মোঃ মুরাদ হোসেন",
  },
  {
    id: 9,
    image: sebaNine,
    title: "টিউটোরিয়াল",
    description:
      "যেভাবে সেবাঘর Apps টি ব্যাবহার করে ডাক্তারের এপয়েন্টমেন্ট নিবেন",
  },
  {
    id: 10,
    image: sebaTen,
    title: "মেডিসিন",
    description: "Corona and dengue awareness campaign",
  },
  {
    id: 11,
    image: sebaEleven,
    title: "ত্বক ও এলার্জি",
    description: "ছুলি রোগঃ কারণ,লক্ষণ ও প্রতিকার।ডাঃ মোঃ মুরাদ হোসেন",
  },
  {
    id: 12,
    image: sebaTwelve,
    title: "ত্বক ও এলার্জি",
    description: "ত্বকের যত্ন। ডা.মোঃমুরাদ হোসেন",
  },
  {
    id: 13,
    image: sebaThirteen,
    title: "ত্বক ও এলার্জি",
    description: "শীতে ত্বকের যত্ন। ডা.মোঃ মুরাদ হোসেন",
  },
  {
    id: 14,
    image: sebaFourteen,
    title: "Corona News",
    description: "করোনাভাইরাস: বাংলাদেশে কি ওষুধের যথেষ্ট যোগান থাকবে?",
  },
  {
    id: 15,
    image: sebaFifteen,
    title: "মেডিসিন",
    description:
      "Hypertension বা উচ্চ রক্তচাপ - ডাঃ মোঃ আরিফুল ইসলাম, নবজাতক ও শিশুরোগ বিশেষজ্ঞ",
  },
];

const ShebaBlog = () => {
  return (
    <div>
      <div className="flex flex-col md:flex-row gap-12 md:py-16 ">
        {/* left side */}
        <div className="w-full md:w-[80%]">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {sebaBlogs.map((blog) => (
              <div
                key={blog.id}
                className="border rounded-xl p-4 shadow-md bg-white"
              >
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-48 object-cover cursor-pointer hover:scale-105 transition-transform duration-300 rounded-lg mb-3"
                />
                <h3 className="text-xl font-semibold mb-2">{blog.title}</h3>
                <p className="text-sm text-gray-600">{blog.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* right side */}
        <div className="w-full md:w-[20%]">
          {/* You can add popular blogs, tags, or sidebar content here */}
          <div className="border h-fit rounded-sm py-4 px-3">
            <p className="pt-1.5 pb-1.5 text-red-800 font-medium">Treatment help desk</p>
            <p className="pt-1.5 pb-1.5 text-red-800 font-medium">Question and Answer</p>
            <p className="pt-1.5 pb-1.5 text-red-800 font-medium">Corona News</p>
            <p className="pt-1.5 pb-1.5 text-red-800 font-medium">GYN And OBS</p>
            <p className="pt-1.5 pb-1.5 text-red-800 font-medium">টিউটোরিয়াল</p>
            <p className="pt-1.5 pb-1.5 text-red-800 font-medium">Offer</p>
            <p className="pt-1.5 pb-1.5 text-red-800 font-medium">National</p>
            <p className="pt-1.5 pb-1.5 text-red-800 font-medium">ত্বক ও এলার্জি</p>
            <p className="pt-1.5 pb-1.5 text-red-800 font-medium">Colorectal Surgery</p>
            <p className="pt-1.5 pb-1.5 text-red-800 font-medium">মেডিসিন</p>
            <p className="pt-1.5 pb-1.5 text-red-800 font-medium">Child Doctor</p>
            <p className="pt-1.5 pb-1.5 text-red-800 font-medium">ENT</p>
            <p className="pt-1.5 pb-1.5 text-red-800 font-medium">EYE</p>
            <p className="pt-1.5 pb-1.5 text-red-800 font-medium">অর্থোপেডিক চিকিৎসা</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShebaBlog;
