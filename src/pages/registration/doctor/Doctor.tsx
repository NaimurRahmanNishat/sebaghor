import doctor from "../../../assets/docrorR.jpeg";

const Doctor = () => {
  return (
    <div>
      <div className="flex flex-col lg:flex-row justify-center gap-16 px-4 py-8">
        {/* left side content */}
        <div className="w-full lg:w-2/3 mt-10 lg:mt-0 lg:pl-10 text-justify order-2 md:order-1">
          <div className="mb-6">
            <img
              src={doctor}
              alt="..."
              className="w-full rounded shadow border-4 border-white"
            />
          </div>
          <h2 className="text-xl font-semibold mb-2">
            Personal identification information
          </h2>
          <p className="mb-4">
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
          <h3 className="text-lg font-semibold mb-2">
            Non-personal identification information
          </h3>
          <p className="mb-4">
            We may collect non-personal identification information about Users
            whenever they interact with our Site. Non-personal identification
            information may include the browser name, the type of computer and
            technical information about Users means of connection to our Site,
            such as the operating system and the Internet service providers
            utilized and other similar information.
          </p>
          <h3 className="text-lg font-semibold mb-2">
            How we use collected information
          </h3>
          <ul className="list-disc list-inside mb-4 space-y-1">
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
          <h3 className="text-lg font-semibold mb-2">
            How we protect your information
          </h3>
          <p className="mb-4">
            We adopt appropriate data collection, storage and processing
            practices and security measures to protect against unauthorized
            access, alteration, disclosure or destruction of your personal
            information, username, password, transaction information and data
            stored on our Site.
          </p>
          <h3 className="text-lg font-semibold mb-2">Electronic newsletters</h3>
          <p>
            If User decides to opt-in to our mailing list, they will receive
            emails that may include company news, updates, related product or
            service information, etc.
          </p>
        </div>
        {/* right side */}
        <div className="w-full lg:w-1/3 order-1 md:order-2">
          <div className="text-center mb-6">
            <h1 className="text-2xl font-semibold">Join Our Doctor List</h1>
          </div>
          <form method="post" accept-charset="utf-8" className="space-y-4">
            <input
              type="text"
              name="doctor_name"
              className="w-full border border-gray-300 rounded px-4 py-2"
              placeholder="Full Name"
            />
            <input
              type="text"
              name="doctor_phone"
              className="w-full border border-gray-300 rounded px-4 py-2"
              placeholder="Phone Number *"
            />
            <input
              type="text"
              name="email"
              className="w-full border border-gray-300 rounded px-4 py-2"
              placeholder="Email Address"
            />
            <div className="relative">
              <input
                type="password"
                name="password"
                className="w-full border border-gray-300 rounded px-4 py-2 pr-10"
                placeholder="Password *"
              />
              <i className="absolute right-3 top-3 text-gray-400">👁️</i>
            </div>
            <input
              type="text"
              name="bmdcnumber"
              className="w-full border border-gray-300 rounded px-4 py-2"
              placeholder="BMDC NUMBER"
            />
            <div>
              <label className="block font-medium mb-1">Gender:</label>
              <div className="flex space-x-4">
                <label className="inline-flex items-center">
                  <input
                    type="radio"
                    name="sex"
                    value="Male"
                    className="form-radio text-blue-500"
                  />
                  <span className="ml-2">Male</span>
                </label>
                <label className="inline-flex items-center">
                  <input
                    type="radio"
                    name="sex"
                    value="Female"
                    className="form-radio text-blue-500"
                  />
                  <span className="ml-2">Female</span>
                </label>
              </div>
            </div>
            <select
              name="department_id"
              className="w-full border border-gray-300 rounded px-4 py-2"
            >
              <option value="" selected>
                --Select Department--
              </option>
              <option value="1">Cardiology</option>
              <option value="3">Laser</option>
              <option value="4">Medicine</option>
              <option value="5">Dentistry</option>
              <option value="9">Orthopaedic</option>
              {/* <!-- Add the rest of the options as needed --> */}
            </select>
            <button
              type="submit"
              name="submit"
              className="w-full bg-blue-600 text-white font-semibold py-2 rounded hover:bg-blue-700 transition"
            >
              Sign Up
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Doctor;
