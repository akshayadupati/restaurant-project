import { useState } from "react";

const User = () => {
  const [count] = useState(0);
  const [count1] = useState(1);
  return (
    <div className="usercard-container">
      <h2>
        Count = {count} & {count1}
      </h2>
      <h2>Name: Akshaya</h2>
      <h3>Location: Canada</h3>
      <h4>Social Media: @akshayadupati</h4>
    </div>
  );
};

export default User;
