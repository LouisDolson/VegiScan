import React, { useState } from "react";
import DetailScan from "./DetailScan"; // Import the DetailPage component

const HistoryPage = () => {
  const [output, setOutput] = useState([]);
  const [selectedHistory, setSelectedHistory] = useState(null); // State to hold selected history

  const run = async () => {
    // Fetch history as implemented earlier
    const response3 = await fetch(
      "https://javascript-backend2-623812248472.asia-southeast2.run.app/predict/histories",
      { method: "GET" }
    );
    if (!response3.ok) throw new Error("Failed to fetch history");
    const scanHistory = await response3.json();
    setOutput(scanHistory.data);
  };

  React.useEffect(() => {
    run();
  }, []);

  const handleHistoryClick = (history) => {
    setSelectedHistory(history); // Set the selected history
  };

  if (selectedHistory) {
    return <DetailScan name={selectedHistory.label} image={selectedHistory.link} onBack={() => setSelectedHistory(null)} />;
  }

  if (!output.length) {
    return (
      <div className="text-center">
        <h2>No History Available</h2>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {output.map(({ history }) => (
        <div
          key={history.id}
          className="bg-white p-4 rounded-lg shadow-md cursor-pointer"
          onClick={() => handleHistoryClick(history)}
        >
          <img
            src={history.link}
            alt={history.label}
            className="w-full h-40 object-cover rounded-md mb-4"
          />
          <h3 className="text-lg font-semibold">{history.label}</h3>
        </div>
      ))}
    </div>
  );
};

export default HistoryPage;
