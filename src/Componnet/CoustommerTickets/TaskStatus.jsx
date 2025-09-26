import React from "react";
import { toast } from "react-toastify";

const TaskStatus = ({
  inProgress,
  setResolved,
  setInProgress,
  resolved,
  setTicket,
}) => {
  let resolvedHandel = (task) => {
    setInProgress((prev) => prev.filter((t) => t.id !== task.id));
    setTicket((prev) => prev.filter((t) => t.id !== task.id));
    if (!resolved.find((t) => t.id === task.id)) {
      setResolved((prev) => [...prev, task]);
    }
    toast("Resolved Done");
  };
  return (
    <div className="w-[400px]">
      <div>
        <h1 className="text-[#34485A] text-2xl font-semibold">Task Status</h1>
        {inProgress.length === 0 && <p className="text-gray-500">No Data</p>}
        {inProgress.map((task) => (
          <div className="bg-white rounded-2xl shadow w-[300px]">
            <h1>{task.title}</h1>
            <button
              onClick={() => resolvedHandel(task)}
              className="items-center text-center md:w-full w-auto bg-[#02A53B] text-[#FFFFFF] ma"
            >
              Complete
            </button>
          </div>
        ))}
      </div>
      <div>
        <h1 className="text-[#34485A] text-2xl font-semibold">Resolved Task</h1>
        {resolved.length === 0 && <p className="text-gray-500">No Data</p>}
        <div className="bg-[#E0E7FF] rounded-2xl shadow w-[300px] text-center">
          {resolved.map((task) => (
            <div className="p-5">
              <h1>{task.title}</h1>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TaskStatus;
