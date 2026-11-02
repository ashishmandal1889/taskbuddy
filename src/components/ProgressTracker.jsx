import { Award, CheckCircle2 } from 'lucide-react';

export default function ProgressTracker({ tasks }) {
  const totalTasks = tasks.length;
  const completedTasks = tasks.filter((t) => t.completed).length;
  const percentage = totalTasks === 0 ? 0 : Math.round((completedTasks / totalTasks) * 100);
  const isAllComplete = totalTasks > 0 && completedTasks === totalTasks;

  if (totalTasks === 0) return null;

  return (
    <div className="progress-tracker">
      <div className="progress-header">
        <span className="progress-title">
          <CheckCircle2 size={18} color="#fbbf24" />
          Progress Tracker
        </span>
        <span className="progress-stats">
          {completedTasks} of {totalTasks} completed ({percentage}%)
        </span>
      </div>

      <div className="progress-bar">
        <div
          className="progress"
          style={{ width: `${percentage}%` }}
          role="progressbar"
          aria-valuenow={percentage}
          aria-valuemin="0"
          aria-valuemax="100"
        />
      </div>

      {isAllComplete && (
        <div className="all-complete-banner">
          <Award size={16} />
          <span>All tasks completed! You&apos;re crushing it today! 🚀</span>
        </div>
      )}
    </div>
  );
}
