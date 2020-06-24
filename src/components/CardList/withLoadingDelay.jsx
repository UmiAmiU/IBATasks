import React from "react";
import "./load.css";

const withLoadingDelay = (Component) => (props) => {
  const [isLoading, setLoading] = React.useState(true);
  React.useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
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
