const Button = ({ children }) => {
   return <button
      className="bg-dark text-white px-6 py-4 text-lg rounded-xl"
   >
      {children}
   </button>;
};

export default Button;