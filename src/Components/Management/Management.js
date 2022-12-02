import React, { useEffect } from "react";

function Management() {
  useEffect(() => {
    window.location.href = "http://bidsite.net/horserace/";
  }, []);

  return (
    <div>
      <h2>Management</h2>
    </div>
  );
}

export default Management;
