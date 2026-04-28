import { useNavigate } from "react-router-dom";

export function ProfileWrapperClick({ children, id }) {
  const navigate = useNavigate();
  const link = id ? `/thingmadur/${id}` : ``;
  return (
    <>
      <div className="profile-container" onClick={() => navigate(link)}>
        <>{children}</>
      </div>
    </>
  );
}
