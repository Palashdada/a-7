import React from "react";

const TaskStatus = ({ inProgress }) => {
  return (
    <div>
      <div>
        {inProgress.map((task) => (
          <div className="flex">
            <h1>{task.title}</h1>
          </div>
        ))}
        <button className="items-center text-center max-w-full bg-[#02A53B] text-[#FFFFFF] ma">
          Complete
        </button>
      </div>
      <div></div>
    </div>
  );
};

export default TaskStatus;
