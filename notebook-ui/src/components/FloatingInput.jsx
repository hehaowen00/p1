import { useRef } from "react";

function FloatingInput(props) {
  const ref = useRef(null);

  const focusInput = function (e) {
    ref.current.focus();
  };

  return (
    <label
      for="UserEmail"
      className={`relative block overflow-hidden rounded-md border 
    border-gray-200 px-3 pt-3 shadow-sm focus-within:border-blue-600 
    focus-within:ring-1 focus-within:ring-blue-600 cursor-text
    ${props.className}`}
      onClick={focusInput}
    >
      <input
        ref={ref}
        type={props.type}
        placeholder={props.placeholder}
        className="peer h-8 w-full border-none bg-transparent p-0 placeholder-transparent 
        focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
      />

      <span
        className="absolute left-3 top-3 -translate-y-1/2 text-xs text-gray-500
        transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm
        peer-focus:top-3 peer-focus:text-xs"
      >
        {props.placeholder}
      </span>
    </label>
  );
}

export default FloatingInput;