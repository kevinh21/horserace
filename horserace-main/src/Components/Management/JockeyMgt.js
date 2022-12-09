import React, { useEffect } from "react";

function Jockey() {
  useEffect(() => {
    window.location.href = "http://localhost/jockeys_list.php";
  }, []);

  return (
    <div>
      <h2>Jockey</h2>
    </div>
  );
}

export default Jockey;
