const primaryBtn = 'bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 text-sm minlg:text-lg py-2 px-6 minlg:py-4 minlg:px-8 font-poppins font-semibold text-white';
const outlineBtn = 'border border-nft-red-violet bg-transparent font-poppins font-semibold text-sm minlg:text-lg py-2 px-6 minlg:py-4 minlg:px-8';

const Button = ({ btnName, classStyles, btnType, handleClick }) => (
  <button
    type="button"
    className={
        btnType === 'primary' ? `${primaryBtn} ${classStyles}` : `${outlineBtn} ${classStyles}`
    }
    onClick={handleClick}
  >
    {btnName}
  </button>
);

export default Button;

