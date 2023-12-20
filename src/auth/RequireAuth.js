import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";
// import { selectUsername } from "../features/userSlice";

function RequireAuth({ children }) {
  const user = useSelector(selectUsername);
  const location = useLocation();

  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
}

export default RequireAuth;

// (참고) RequireAuth 컴포넌트 사용법
{/* <Routes>
  <Route element={<Layout />}>
    <Route path="/" element={<PublicPage />} />
    <Route path="/login" element={<LoginPage />} />
    <Route
      path="/protected"
      element={
        <RequireAuth>
          <ProtectedPage />
        </RequireAuth>
      }
    />
  </Route>
</Routes> */}