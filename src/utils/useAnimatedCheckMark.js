const UseAnimatedCheckmark = () => (
  <svg className="w-24 h-24 text-pink-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
    <style>{`
      .checkmark__circle {
        stroke-dasharray: 166;
        stroke-dashoffset: 166;
        animation: stroke 0.6s cubic-bezier(0.65, 0, 0.45, 1) forwards;
      }
      .checkmark__check {
        transform-origin: 50% 50%;
        stroke-dasharray: 48;
        stroke-dashoffset: 48;
        animation: stroke 0.3s cubic-bezier(0.65, 0, 0.45, 1) 0.8s forwards;
      }
      @keyframes stroke {
        100% {
          stroke-dashoffset: 0;
        }
      }
    `}</style>
    <circle className="checkmark__circle" cx="12" cy="12" r="10" stroke="currentColor" />
    <path className="checkmark__check" d="M9 12l2 2 4-4" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);


export default UseAnimatedCheckmark;