import React, { useState, useEffect } from "react";

const Generate = ({ destination }) => {
  const [result, setResult] = useState(null);

  async function generateSuggestions(destination) {
    try {
      const response = await fetch("/api/generate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ destination }),
      });

      const data = await response.json();
      if (response.status !== 200) {
        throw (
          data.error ||
          new Error(`Request failed with status ${response.status}`)
        );
      }
      setResult(data);
    } catch (error) {
      console.error(error);
      alert(error.message);
    }
  }

  useEffect(() => {
    generateSuggestions(destination);
  }, [destination]);

  return (
    <div className="generateComponent">
      {result && result.result && (
        <div>
          <h2>Top Places to Visit</h2>
          <ul>
            {result.result.split(", ").map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Generate;

/** Dummy Data Below */

// import React from "react";

// const Generate = ({ destination }) => {
//   const dummyData = {
//     result: "Place A, Place B, Place C, Place D, Place E",
//   };

//   return (
//     <div className="generateComponent">
//       {dummyData && dummyData.result && (
//         <div>
//           <h2>Top Places to Visit</h2>
//           <ul>
//             {dummyData.result.split(", ").map((item, i) => (
//               <li key={i}>{item}</li>
//             ))}
//           </ul>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Generate;
