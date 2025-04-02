import { Link } from "react-router";
import hospital from "../../../assets/hospital.jpeg";
import { ChevronDown } from "lucide-react";

const Hospital = () => {
  return (
    <div className="flex flex-col md:flex-row-reverse md:gap-32 md:pt-20 pt-10">
      {/* Left side (Image) - Will appear below text on mobile */}
      <div className="w-full md:w-[65%] order-2 md:order-2">
        <div className="bg-white shadow">
          <img src={hospital} alt="Hospital" className="w-full h-auto p-2" />
        </div>
        <div className="pt-16">
          <h2 className="text-[26px] text-[#2c3038] font-semibold pb-16">
            Personal identification information
          </h2>
          <p>
            We may collect personal identification information from Users in a
            variety of ways, including, but not limited to, when Users visit our
            site, register on the site, and in connection with other activities,
            services, features or resources we make available on our Site. Users
            may be asked for, as appropriate, name, email address, mailing
            address, phone number. Users may, however, visit our Site
            anonymously. We will collect personal identification information
            from Users only if they voluntarily submit such information to us.
            Users can always refuse to supply personally identification
            information, except that it may prevent them from engaging in
            certain Site related activities.
          </p>
        </div>
        <div className="pt-8">
          <h2 className="text-[26px] text-[#2c3038] font-semibold pb-6">
            Non-personal identification information
          </h2>
          <p className="pb-4">
            We may collect non-personal identification information about Users
            whenever they interact with our Site. Non-personal identification
            information may include the browser name, the type of computer and
            technical information about Users means of connection to our Site,
            such as the operating system and the Internet service providers
            utilized and other similar information.
          </p>
        </div>
        <div>
          <h2 className="text-[26px] text-[#2c3038] font-semibold pb-6">
            Web browser cookies
          </h2>
          <p className="pb-4">
            Our Site may use "cookies" to enhance User experience. User's web
            browser places cookies on their hard drive for record-keeping
            purposes and sometimes to track information about them. User may
            choose to set their web browser to refuse cookies, or to alert you
            when cookies are being sent. If they do so, note that some parts of
            the Site may not function properly.
          </p>
        </div>
        <div>
          <h2 className="text-[26px] text-[#2c3038] font-semibold pb-3">
            How we use collected information
          </h2>
          <p className="pb-3">
            Sebaghar may collect and use Users personal information for the
            following purposes:
          </p>
          <ul className="list-disc pl-6 pb-8 text-[#6c757d]">
            <li>
              To run and operate our Site We may need your information display
              content on the Site correctly.
            </li>
            <li>
              To improve customer service Information you provide helps us
              respond to your customer service requests and support needs more
              efficiently.
            </li>
            <li>
              To personalize user experience We may use information in the
              aggregate to understand how our Users as a group use the services
              and resources provided on our Site.
            </li>
            <li>
              To improve our Site We may use feedback you provide to improve our
              products and services.
            </li>
            <li>
              To run a promotion, contest, survey or other Site feature To send
              Users information they agreed to receive about topics we think
              will be of interest to them.
            </li>
            <li>
              To send periodic emails We may use the email address to send User
              information and updates pertaining to their order. It may also be
              used to respond to their inquiries, questions, and/or other
              requests.
            </li>
          </ul>
        </div>
        <div>
          <h2 className="text-[26px] text-[#2c3038] font-semibold pb-3">
            How we protect your information
          </h2>
          <p className="text-[#383b3d] pb-6">
            We adopt appropriate data collection, storage and processing
            practices and security measures to protect against unauthorized
            access, alteration, disclosure or destruction of your personal
            information, username, password, transaction information and data
            stored on our Site.
          </p>
        </div>
        <div>
          <h2 className="text-[26px] text-[#2c3038] font-semibold pb-3">
            Sharing your personal information
          </h2>
          <p className="text-[#383b3d] pb-6">
            We may share or sell information with third parties for marketing or
            other purposes.
          </p>
        </div>
        <div>
          <h2 className="text-[26px] text-[#2c3038] font-semibold pb-3">
            Electronic newsletters
          </h2>
          <p className="text-[#383b3d] pb-6">
            If User decides to opt-in to our mailing list, they will receive
            emails that may include company news, updates, related product or
            service information, etc.
          </p>
        </div>
        <div>
          <h2 className="text-[26px] text-[#2c3038] font-semibold pb-3">
            Advertising
          </h2>
          <p className="text-[#383b3d] pb-6">
            Ads appearing on our site may be delivered to Users by advertising
            partners, who may set cookies. These cookies allow the ad server to
            recognize your computer each time they send you an online
            advertisement to compile non personal identification information
            about you or others who use your computer. This information allows
            ad networks to, among other things, deliver targeted advertisements
            that they believe will be of most interest to you. This privacy
            policy does not cover the use of cookies by any advertisers.
          </p>
        </div>
        <div>
          <h2 className="text-[26px] text-[#2c3038] font-semibold pb-3">
            Google Adsense
          </h2>
          <p className="text-[#383b3d] pb-1">
            Some of the ads may be served by Google. Google's use of the DART
            cookie enables it to serve ads to Users based on their visit to our
            Site and other sites on the Internet. DART uses "non personally
            identifiable information" and does NOT track personal information
            about you, such as your name, email address, physical address, etc.
            You may opt out of the use of the DART cookie by visiting the Google
            ad and content network privacy policy at
          </p>
          <p className="pb-6">
            <Link
              to="http://www.google.com/privacy_ads.html"
              className="text-blue-500 hover:text-red-600"
            >
              http://www.google.com/privacy_ads.html
            </Link>
          </p>
        </div>
        <div>
          <h2 className="text-[26px] text-[#2c3038] font-semibold pb-3">
            Changes to this privacy policy
          </h2>
          <p className="text-[#383b3d] pb-6">
            Sebaghar has the discretion to update this privacy policy at any
            time. When we do, we will post a notification on the main page of
            our Site. We encourage Users to frequently check this page for any
            changes to stay informed about how we are helping to protect the
            personal information we collect. You acknowledge and agree that it
            is your responsibility to review this privacy policy periodically
            and become aware of modifications.
          </p>
        </div>
        <div>
          <h2 className="text-[26px] text-[#2c3038] font-semibold pb-3">
            Your acceptance of these terms
          </h2>
          <p className="text-[#383b3d] pb-6">
            By using this Site, you signify your acceptance of this policy. If
            you do not agree to this policy, please do not use our Site. Your
            continued use of the Site following the posting of changes to this
            policy will be deemed your acceptance of those changes.
          </p>
        </div>
        <div>
          <h2 className="text-[26px] text-[#2c3038] font-semibold pb-3">
            Contacting us
          </h2>
          <p className="text-[#383b3d] pb-6">
            If you have any questions about this Privacy Policy, the practices
            of this site, or your dealings with this site, please contact us.
          </p>
          <p className="text-[#383b3d] pb-16">
            This document was last updated on August 21, 2016
          </p>
        </div>
      </div>
      {/* Right side (Text Content) - Will appear above image on mobile */}
      <div className="w-full md:w-[35%] flex flex-col order-1 md:order-1">
        <h3 className="text-[26px] text-[#2c3038] text-center font-semibold mb-4">
          Join Our Hospital List
        </h3>
        <form className="flex flex-col w-full">
          <input
            type="text"
            placeholder="Hospital Name*"
            className="w-full px-2 py-2 mb-3 border border-gray-300 rounded-sm text-sm md:text-base focus:outline-none focus:ring-1 focus:ring-[#17a2b8] hover:ring-bg-[#17a2b8] hover:ring-1 hover:ring-[#17a2b8]"
          />
          <input
            type="text"
            placeholder="Phone Number*"
            className="w-full px-2 py-2 mb-3 border border-gray-300 rounded-sm text-sm md:text-base focus:outline-none focus:ring-1 focus:ring-[#17a2b8] hover:ring-bg-[#17a2b8] hover:ring-1 hover:ring-[#17a2b8]"
          />
          <input
            type="text"
            placeholder="Email Address"
            className="w-full px-2 py-2 mb-3 border border-gray-300 rounded-sm text-sm md:text-base focus:outline-none focus:ring-1 focus:ring-[#17a2b8] hover:ring-bg-[#17a2b8] hover:ring-1 hover:ring-[#17a2b8]"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full px-2 py-2 mb-3 border border-gray-300 rounded-sm text-sm md:text-base focus:outline-none focus:ring-1 focus:ring-[#17a2b8] hover:ring-bg-[#17a2b8] hover:ring-1 hover:ring-[#17a2b8]"
          />
          <div className="relative flex items-center justify-between">
            <input
              type="text"
              placeholder="Division*"
              className="w-full px-2 py-2 mb-3 border border-gray-300 rounded-sm text-sm md:text-base focus:outline-none focus:ring-1 focus:ring-[#17a2b8] hover:ring-bg-[#17a2b8] hover:ring-1 hover:ring-[#17a2b8]"
            />
            <ChevronDown className="absolute right-0 top-2 pr-1 cursor-pointer"/>
          </div>
          <div className="relative flex items-center justify-between">
            <input
              type="text"
              placeholder="District*"
              className="w-full px-2 py-2 mb-3 border border-gray-300 rounded-sm text-sm md:text-base focus:outline-none focus:ring-1 focus:ring-[#17a2b8] hover:ring-bg-[#17a2b8] hover:ring-1 hover:ring-[#17a2b8]"
            />
            <ChevronDown className="absolute right-0 top-2 pr-1 cursor-pointer"/>
          </div>
          <div className="relative flex items-center justify-between">
            <input
              type="text"
              placeholder="Upazila/Thana*"
              className="w-full px-2 py-2 mb-3 border border-gray-300 rounded-sm text-sm md:text-base focus:outline-none focus:ring-1 focus:ring-[#17a2b8] hover:ring-bg-[#17a2b8] hover:ring-1 hover:ring-[#17a2b8]"
            />
            <ChevronDown className="absolute right-0 top-2 pr-1 cursor-pointer"/>
          </div>
          <div className="flex flex-col items-start text-start justify-start">
            <textarea
              placeholder="Address*"
              className="w-full px-2 pb-44 mb-3 border border-gray-300 rounded-sm text-sm md:text-base focus:outline-none focus:ring-1 focus:ring-[#17a2b8] hover:ring-bg-[#17a2b8] hover:ring-1 hover:ring-[#17a2b8]"
            ></textarea>
          </div>
          <div className="pt-6">
            <button className="w-full flex items-center justify-center bg-red-600 py-4 text-white font-semibold cursor-pointer hover:bg-red-700">
              Sign Up
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Hospital;
