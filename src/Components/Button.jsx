const Button = ({ children, type }) => {
   return <button type={type}
      className="bg-transparent text-dark hover:text-white px-5 py-2 rounded-lg border border-green hover:bg-green duration-300 shadow-xl hover:shadow-green/20"
   >
      {children}
   </button>;
};

export default Button;