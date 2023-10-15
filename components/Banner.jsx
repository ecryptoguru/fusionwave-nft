const Banner = ({ name, childStyles, parentStyle, handleClick }) => (

  <div onClick={handleClick}>
    <div className={`relative w-full flex items-center z-0 overflow-hidden bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 ${parentStyle}`}>
      <p className={`font-bold text-5xl text-white font-poppins leading-70 ${childStyles}`}>{name}</p>
      <div className="absolute w-48 h-48 sm:w-32 sm:h-32 rounded-full -top-9 -left-16 -z-5 white-bg" />
      <div className="absolute w-72 h-72 sm:w-56 sm:h-56 rounded-full -bottom-24 -right-14 -z-5 white-bg" />
    </div>
  </div>
);

export default Banner;
