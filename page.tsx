'use client';

import { useEffect, useState } from 'react';

export default function DashboardPage() {
  const [duesStats, setDuesStats] = useState({ totalResidents: 100, paid: 72, pending: 28 });
  const [staffAttendance, setStaffAttendance] = useState([
    { name: 'Ravi', role: 'Cleaner', present: true },
    { name: 'Anita', role: 'Security', present: false },
  ]);
  const [visitorTrends, setVisitorTrends] = useState([
    { date: '2025-04-06', count: 45 },
    { date: '2025-04-07', count: 50 },
    { date: '2025-04-08', count: 38 },
  ]);

  return (
    <div className="max-w-5xl mx-auto px-6 py-10">
      <h1 className="text-3xl font-bold text-blue-800 mb-8">📈 Society Dashboard & Analytics</h1>

      {/* 📊 Dues Collection Stats */}
      <div className="bg-white p-6 rounded-lg shadow mb-8">
        <h2 className="text-xl font-semibold text-green-700 mb-3">📊 Dues Collection Stats</h2>
        <p><strong>Total Residents:</strong> {duesStats.totalResidents}</p>
        <p><strong>Paid:</strong> {duesStats.paid}</p>
        <p><strong>Pending:</strong> {duesStats.pending}</p>
        <div className="w-full bg-gray-200 rounded h-4 mt-2">
          <div
            className="bg-green-500 h-4 rounded"
            style={{ width: `${(duesStats.paid / duesStats.totalResidents) * 100}%` }}
          ></div>
        </div>
      </div>

      {/* 🧑‍💼 Staff Attendance */}
      <div className="bg-white p-6 rounded-lg shadow mb-8">
        <h2 className="text-xl font-semibold text-purple-700 mb-3">🧑‍💼 Staff Attendance</h2>
        <ul className="space-y-2">
          {staffAttendance.map((staff, index) => (
            <li key={index} className="flex justify-between items-center">
              <span>{staff.name} ({staff.role})</span>
              <span
                className={`px-3 py-1 rounded text-sm ${
                  staff.present ? 'bg-green-200 text-green-700' : 'bg-red-200 text-red-700'
                }`}
              >
                {staff.present ? 'Present' : 'Absent'}
              </span>
            </li>
          ))}
        </ul>
      </div>

      {/* 🚶 Visitor Trends */}
      <div className="bg-white p-6 rounded-lg shadow">
        <h2 className="text-xl font-semibold text-indigo-700 mb-3">🚶 Visitor Trends</h2>
        <ul className="space-y-2">
          {visitorTrends.map((trend, index) => (
            <li key={index} className="flex justify-between">
              <span>{trend.date}</span>
              <span className="font-semibold">{trend.count} visitors</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
