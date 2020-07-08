import React from "react";
import "./load.css";

const withLoadingDelay = (Component) => (props) => {
  const [isLoading, setLoading] = React.useState(true);
  React.useEffect(() => {
    const id = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(id);
  });
  if (!isLoading) {
    return <Component {...props} />;
  }
  return (
    <div className="block">
      <div className="spinner"></div>
    </div>
  );
};
export default withLoadingDelay;
