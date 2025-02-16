import { useNavigate, useLocation } from "react-router-dom";

export function useNavigateWithLang() {
  const navigate = useNavigate();
  const location = useLocation();

  return (to: string) => {
    const currentParams = new URLSearchParams(location.search);
    const langParam = currentParams.get("lang");

    // If we have a language parameter, add it to the new route
    if (langParam) {
      const hasQueryParams = to.includes("?");
      const separator = hasQueryParams ? "&" : "?";
      navigate(`${to}${separator}lang=${langParam}`);
    } else {
      navigate(to);
    }
  };
}
