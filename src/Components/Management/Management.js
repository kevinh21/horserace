import React, { useEffect } from "react";

function Management() {
  useEffect(() => {
    window.location.href = "http://localhost/menu.php";
  }, []);

  return (
    <div>
      <h2>Management</h2>
    </div>
  );
}

export default Management;
