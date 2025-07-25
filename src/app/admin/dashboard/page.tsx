'use client';

import { useState } from 'react';

export default function Dashboard() {
  const [showPopup, setShowPopup] = useState(false);

  const confirmAction = () => {
    alert('Action confirmed!');
    setShowPopup(false);
  };

  return (
    <div>
      <button
        onClick={() => setShowPopup(true)}
        className="bg-blue-600 text-white px-4 py-2 rounded"
      >
        Show Confirmation
      </button>
  
      {showPopup && (
        <div className="fixed inset-0 flex items-center justify-center border bg-opacity-40 z-50">
          <div className="bg-white border rounded-lg p-6 shadow-lg w-80">
            <h1 className="text-xl font-semibold mb-4">Are you sure?</h1>
            <div className="flex justify-between">
              <button
                onClick={confirmAction}
                className="bg-green-500 text-white px-4 py-2 rounded"
              >
                Yes
              </button>
              <button
                onClick={() => setShowPopup(false)}
                className="bg-red-500 text-white px-4 py-2 rounded"
              >
                No
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};