const Contact = () => {
  return (
    <section
      id="contact"
      className="relative w-full bg-gradient-to-br from-gray-900 via-gray-950 to-black text-white flex flex-col items-center justify-center py-20 px-6 font-serif"
    >
      {/* Glow effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-500/10 via-transparent to-transparent blur-3xl pointer-events-none"></div>

      <div className="relative z-10 max-w-5xl w-full text-center">
        {/* Heading */}
        <p className="text-blue-400 font-semibold uppercase tracking-wider">
          Contact Us
        </p>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mt-3">
          Get in Touch
        </h2>
        <p className="text-gray-400 text-base sm:text-lg mt-4">
          Fast, reliable iPhone repairs — available right here in Faisalabad.
        </p>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
          {/* Email */}
          <div className="flex flex-col items-center bg-gradient-to-b from-gray-800/50 to-gray-900/50 p-8 rounded-2xl border border-gray-800 hover:border-blue-500/40 hover:shadow-blue-500/10 transition-all duration-300">
            <span className="p-3 rounded-full bg-blue-500/10 text-blue-400">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-8 h-8"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21.75 6.75v10.5A2.25 2.25 0 0119.5 19.5h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25"
                />
              </svg>
            </span>
            <h3 className="mt-4 text-xl font-semibold">Email</h3>
            <p className="text-gray-400 text-sm mt-2">
              Our team is always here to help.
            </p>
            <p className="text-blue-400 font-medium mt-2">
              support@iphonerepairfsd.com
            </p>
          </div>

          {/* Location */}
          <div className="flex flex-col items-center bg-gradient-to-b from-gray-800/50 to-gray-900/50 p-8 rounded-2xl border border-gray-800 hover:border-blue-500/40 hover:shadow-blue-500/10 transition-all duration-300">
            <span className="p-3 rounded-full bg-blue-500/10 text-blue-400">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-8 h-8"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 20.25s7.5-4.108 7.5-11.25a7.5 7.5 0 10-15 0c0 7.142 7.5 11.25 7.5 11.25z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 10.5a2.25 2.25 0 110-4.5 2.25 2.25 0 010 4.5z"
                />
              </svg>
            </span>
            <h3 className="mt-4 text-xl font-semibold">Location</h3>
            <p className="text-gray-400 text-sm mt-2">
              Visit our Faisalabad repair shop.
            </p>
            <p className="text-blue-400 font-medium mt-2">
              D Ground, Faisalabad, Pakistan
            </p>
          </div>

          {/* Phone */}
          <div className="flex flex-col items-center bg-gradient-to-b from-gray-800/50 to-gray-900/50 p-8 rounded-2xl border border-gray-800 hover:border-blue-500/40 hover:shadow-blue-500/10 transition-all duration-300">
            <span className="p-3 rounded-full bg-blue-500/10 text-blue-400">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-8 h-8"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25A2.25 2.25 0 0021.75 19.5v-1.372a1.125 1.125 0 00-.852-1.091l-4.423-1.106a1.125 1.125 0 00-1.173.417l-.97 1.293a1.125 1.125 0 01-1.21.38A12.035 12.035 0 016.75 10.25a1.125 1.125 0 01.38-1.21l1.293-.97a1.125 1.125 0 00.417-1.173L7.734 2.25a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                />
              </svg>
            </span>
            <h3 className="mt-4 text-xl font-semibold">Phone</h3>
            <p className="text-gray-400 text-sm mt-2">Mon–Sat, 10am–8pm.</p>
            <p className="text-blue-400 font-medium mt-2">+92 300 1234567</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
