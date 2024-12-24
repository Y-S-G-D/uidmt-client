import React from 'react';
import { BookOpen, FileText, MessageSquare, Video } from 'lucide-react';

const QuickActions = () => {
  return (
    <div className="card bg-base-200 shadow-xl">
      <div className="card-body">
        <h2 className="card-title mb-4">Quick Actions</h2>
        <div className="grid grid-cols-2 gap-4">
          <button className="btn btn-primary gap-2">
            <Video className="w-4 h-4" />
            Join Class
          </button>
          <button className="btn btn-primary gap-2">
            <FileText className="w-4 h-4" />
            Submit Work
          </button>
          <button className="btn btn-primary gap-2">
            <MessageSquare className="w-4 h-4" />
            Discussion
          </button>
          <button className="btn btn-primary gap-2">
            <BookOpen className="w-4 h-4" />
            Resources
          </button>
        </div>
      </div>
    </div>
  );
};

export default QuickActions;