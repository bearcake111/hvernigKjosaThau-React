import { Link, useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export function NavButton({ id, text, to }) {
  const currLocation = useLocation().pathname === to;

  const navigate = useNavigate();
  const goToPage = () => {
    navigate(to);
  };

  return (
    <div
      id={id}
      className={`site-button ${currLocation ? "curr-tab" : ""}`}
      onClick={goToPage}
    >
      <h2>{text}</h2>
    </div>
  );
}
