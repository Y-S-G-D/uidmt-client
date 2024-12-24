import React from 'react';
import { Calendar } from 'lucide-react';

const deadlines = [
  { title: 'Database Project', date: '2024-03-25', course: 'Database Management' },
  { title: 'UI/UX Assignment', date: '2024-03-28', course: 'Design Principles' },
  { title: 'Final Project', date: '2024-04-01', course: 'Web Development' },
];

const UpcomingDeadlines = () => {
  return (
    <div className="card bg-base-200 shadow-xl">
      <div className="card-body">
        <div className="flex items-center gap-2 mb-4">
          <Calendar className="w-5 h-5 text-primary" />
          <h2 className="card-title">Upcoming Deadlines</h2>
        </div>
        <div className="space-y-4">
          {deadlines.map((deadline, index) => (
            <div key={index} className="flex items-center justify-between p-3 bg-base-300 rounded-lg">
              <div>
                <h3 className="font-semibold">{deadline.title}</h3>
                <p className="text-sm text-base-content/70">{deadline.course}</p>
              </div>
              <div className="badge badge-primary">{deadline.date}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UpcomingDeadlines;