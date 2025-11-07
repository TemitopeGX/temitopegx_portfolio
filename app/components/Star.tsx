const Star = ({ className = "w-4 h-4" }: { className?: string }) => {
  return (
    <svg 
      className={className} 
      viewBox="0 0 117 112" 
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path 
        d="M74.118,1.25l31.558,22.928l-15.779,21.718l25.531,8.295l-12.054,37.099l-25.531,-8.295l0,26.845l-39.008,0l0,-26.845l-25.531,8.295l-12.054,-37.099l25.531,-8.295l-15.779,-21.718l31.558,-22.928l15.779,21.718l15.779,-21.718Z" 
        fill="currentColor"
        stroke="currentColor"
        strokeWidth="2.5"
      />
    </svg>
  );
};

export default Star;
