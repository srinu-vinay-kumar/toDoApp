// import React, from "react";
// function ModalBox1(){
// const [taskName, setTaskName] = useState("");
// const [startDate, setStartDate] = useState("");
// const [deadline, setDeadline] = useState("");
// const [status, setStatus] = useState("To Do");

// const handleCancelClick = () => {
//   // Add logic to handle cancel button click
//   console.log("Cancel button clicked");
// };

// const handleAddClick = () => {
//   // Add logic to handle add button click
//   console.log("Add button clicked");
//   console.log("Task Name:", taskName);
//   console.log("Start Date:", startDate);
//   console.log("Deadline:", deadline);
//   console.log("Status:", status);
// };
//     return(
// <div className="w-96 h-96 rounded-lg flex-col justify-start items-start inline-flex" style={{ boxShadow: "0px 0px 8px 0px rgba(54, 89, 226, 0.16)" }}
//     >
//   <div className="w-96 h-12 px-6 py-2.5 bg-white border-b border-blue-100 justify-between items-center inline-flex">
//     <div className="text-blue-800 text-base font-normal font-['Nunito Sans'] leading-normal">Add new task
//     <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
// <g id="X">
// <path id="Vector" d="M4.25176 4.25176C4.33137 4.17196 4.42593 4.10864 4.53004 4.06544C4.63416 4.02224 4.74577 4 4.85849 4C4.97121 4 5.08282 4.02224 5.18693 4.06544C5.29104 4.10864 5.38561 4.17196 5.46521 4.25176L10.0002 8.78849L14.5352 4.25176C14.6149 4.17209 14.7095 4.10888 14.8136 4.06576C14.9177 4.02264 15.0293 4.00045 15.142 4.00045C15.2546 4.00045 15.3662 4.02264 15.4703 4.06576C15.5744 4.10888 15.669 4.17209 15.7487 4.25176C15.8284 4.33144 15.8916 4.42603 15.9347 4.53013C15.9778 4.63423 16 4.74581 16 4.85849C16 4.97117 15.9778 5.08274 15.9347 5.18685C15.8916 5.29095 15.8284 5.38554 15.7487 5.46521L11.212 10.0002L15.7487 14.5352C15.8284 14.6149 15.8916 14.7095 15.9347 14.8136C15.9778 14.9177 16 15.0293 16 15.142C16 15.2546 15.9778 15.3662 15.9347 15.4703C15.8916 15.5744 15.8284 15.669 15.7487 15.7487C15.669 15.8284 15.5744 15.8916 15.4703 15.9347C15.3662 15.9778 15.2546 16 15.142 16C15.0293 16 14.9177 15.9778 14.8136 15.9347C14.7095 15.8916 14.6149 15.8284 14.5352 15.7487L10.0002 11.212L5.46521 15.7487C5.38554 15.8284 5.29095 15.8916 5.18685 15.9347C5.08274 15.9778 4.97117 16 4.85849 16C4.74581 16 4.63423 15.9778 4.53013 15.9347C4.42603 15.8916 4.33144 15.8284 4.25176 15.7487C4.17209 15.669 4.10888 15.5744 4.06576 15.4703C4.02264 15.3662 4.00045 15.2546 4.00045 15.142C4.00045 15.0293 4.02264 14.9177 4.06576 14.8136C4.10888 14.7095 4.17209 14.6149 4.25176 14.5352L8.78849 10.0002L4.25176 5.46521C4.17196 5.38561 4.10864 5.29104 4.06544 5.18693C4.02224 5.08282 4 4.97121 4 4.85849C4 4.74577 4.02224 4.63416 4.06544 4.53004C4.10864 4.42593 4.17196 4.33137 4.25176 4.25176Z" fill="#97A1B2"/>
// </g>
// </svg>
//     </div>
//     <div className="w-5 h-5 relative" />
//   </div>
//   <div className="h-72 px-6 py-4 bg-white flex-col justify-start items-start gap-6 flex">
//     <div className="self-stretch h-16 flex-col justify-start items-start gap-1 flex">
//       <div className="text-neutral-800 text-xs font-normal font-['Nunito Sans'] leading-tight">Name of the Task

//</div>
//       <div className="self-stretch h-11 px-3 py-1 bg-white rounded-lg border border-neutral-300 justify-between items-center inline-flex">
//         <div className="grow shrink basis-0 h-6 justify-start items-center gap-1.5 flex">
//           <div className="justify-start items-center gap-px flex">
//             <div className="text-zinc-400 text-base font-normal font-['Nunito Sans'] leading-normal">Text</div>
//           </div>
//         </div>
//       </div>
//     </div>
//     <div className="self-stretch justify-start items-start gap-2.5 inline-flex">
//       <div className="grow shrink basis-0 flex-col justify-start items-start gap-1 inline-flex">
//         <div className="text-neutral-800 text-xs font-normal font-['Nunito Sans'] leading-tight">Start date

//         </div>
//         <div className="self-stretch h-11 px-3 py-1 bg-white rounded-lg border border-neutral-300 justify-between items-center inline-flex">
//           <div className="grow shrink basis-0 h-6 justify-start items-center gap-1.5 flex">
//             <div className="justify-start items-center gap-px flex">
//               <div className="text-zinc-400 text-base font-normal font-['Nunito Sans'] leading-normal">DD/MM/YYYY
//               <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
// <g id="calendar">
// <path id="Vector" d="M16.4 8.39999V6.79999C16.4 6.58781 16.3157 6.38433 16.1657 6.2343C16.0157 6.08427 15.8122 5.99999 15.6 5.99999H14.8V6.79999C14.8 7.01216 14.7157 7.21564 14.5657 7.36567C14.4157 7.5157 14.2122 7.59999 14 7.59999C13.7878 7.59999 13.5843 7.5157 13.4343 7.36567C13.2843 7.21564 13.2 7.01216 13.2 6.79999V5.99999H6.8V6.79999C6.8 7.01216 6.71571 7.21564 6.56569 7.36567C6.41566 7.5157 6.21217 7.59999 6 7.59999C5.78783 7.59999 5.58434 7.5157 5.43431 7.36567C5.28429 7.21564 5.2 7.01216 5.2 6.79999V5.99999H4.4C4.18783 5.99999 3.98434 6.08427 3.83431 6.2343C3.68429 6.38433 3.6 6.58781 3.6 6.79999V8.39999H16.4ZM16.4 9.99999H3.6V14.8C3.6 15.0122 3.68429 15.2156 3.83431 15.3657C3.98434 15.5157 4.18783 15.6 4.4 15.6H15.6C15.8122 15.6 16.0157 15.5157 16.1657 15.3657C16.3157 15.2156 16.4 15.0122 16.4 14.8V9.99999ZM14.8 4.39999H15.6C16.2365 4.39999 16.847 4.65284 17.2971 5.10293C17.7471 5.55302 18 6.16347 18 6.79999V14.8C18 15.4365 17.7471 16.047 17.2971 16.497C16.847 16.9471 16.2365 17.2 15.6 17.2H4.4C3.76348 17.2 3.15303 16.9471 2.70294 16.497C2.25286 16.047 2 15.4365 2 14.8V6.79999C2 6.16347 2.25286 5.55302 2.70294 5.10293C3.15303 4.65284 3.76348 4.39999 4.4 4.39999H5.2V3.59999C5.2 3.38781 5.28429 3.18433 5.43431 3.0343C5.58434 2.88427 5.78783 2.79999 6 2.79999C6.21217 2.79999 6.41566 2.88427 6.56569 3.0343C6.71571 3.18433 6.8 3.38781 6.8 3.59999V4.39999H13.2V3.59999C13.2 3.38781 13.2843 3.18433 13.4343 3.0343C13.5843 2.88427 13.7878 2.79999 14 2.79999C14.2122 2.79999 14.4157 2.88427 14.5657 3.0343C14.7157 3.18433 14.8 3.38781 14.8 3.59999V4.39999Z" fill="#97A1B2"/>
// </g>
// </svg>
//               </div>
//             </div>
//           </div>
//           <div className="w-5 h-5 relative" />
//         </div>
//       </div>
//       <div className="grow shrink basis-0 flex-col justify-start items-start gap-1 inline-flex">
//         <div className="text-neutral-800 text-xs font-normal font-['Nunito Sans'] leading-tight">Deadline

//         </div>
//         <div className="self-stretch h-11 px-3 py-1 bg-white rounded-lg border border-neutral-300 justify-between items-center inline-flex">
//           <div className="grow shrink basis-0 h-6 justify-start items-center gap-1.5 flex">
//             <div className="justify-start items-center gap-px flex">
//               <div className="text-zinc-400 text-base font-normal font-['Nunito Sans'] leading-normal">DD/MM/YYYY
//               <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
// <g id="calendar">
// <path id="Vector" d="M16.4 8.39999V6.79999C16.4 6.58781 16.3157 6.38433 16.1657 6.2343C16.0157 6.08427 15.8122 5.99999 15.6 5.99999H14.8V6.79999C14.8 7.01216 14.7157 7.21564 14.5657 7.36567C14.4157 7.5157 14.2122 7.59999 14 7.59999C13.7878 7.59999 13.5843 7.5157 13.4343 7.36567C13.2843 7.21564 13.2 7.01216 13.2 6.79999V5.99999H6.8V6.79999C6.8 7.01216 6.71571 7.21564 6.56569 7.36567C6.41566 7.5157 6.21217 7.59999 6 7.59999C5.78783 7.59999 5.58434 7.5157 5.43431 7.36567C5.28429 7.21564 5.2 7.01216 5.2 6.79999V5.99999H4.4C4.18783 5.99999 3.98434 6.08427 3.83431 6.2343C3.68429 6.38433 3.6 6.58781 3.6 6.79999V8.39999H16.4ZM16.4 9.99999H3.6V14.8C3.6 15.0122 3.68429 15.2156 3.83431 15.3657C3.98434 15.5157 4.18783 15.6 4.4 15.6H15.6C15.8122 15.6 16.0157 15.5157 16.1657 15.3657C16.3157 15.2156 16.4 15.0122 16.4 14.8V9.99999ZM14.8 4.39999H15.6C16.2365 4.39999 16.847 4.65284 17.2971 5.10293C17.7471 5.55302 18 6.16347 18 6.79999V14.8C18 15.4365 17.7471 16.047 17.2971 16.497C16.847 16.9471 16.2365 17.2 15.6 17.2H4.4C3.76348 17.2 3.15303 16.9471 2.70294 16.497C2.25286 16.047 2 15.4365 2 14.8V6.79999C2 6.16347 2.25286 5.55302 2.70294 5.10293C3.15303 4.65284 3.76348 4.39999 4.4 4.39999H5.2V3.59999C5.2 3.38781 5.28429 3.18433 5.43431 3.0343C5.58434 2.88427 5.78783 2.79999 6 2.79999C6.21217 2.79999 6.41566 2.88427 6.56569 3.0343C6.71571 3.18433 6.8 3.38781 6.8 3.59999V4.39999H13.2V3.59999C13.2 3.38781 13.2843 3.18433 13.4343 3.0343C13.5843 2.88427 13.7878 2.79999 14 2.79999C14.2122 2.79999 14.4157 2.88427 14.5657 3.0343C14.7157 3.18433 14.8 3.38781 14.8 3.59999V4.39999Z" fill="#97A1B2"/>
// </g>
// </svg>
//               </div>
//             </div>
//           </div>
//           <div className="w-5 h-5 relative" />
//         </div>
//       </div>
//     </div>
//     <div className="self-stretch h-16 flex-col justify-start items-start gap-1 flex">
//       <div className="text-neutral-800 text-xs font-normal font-['Nunito Sans'] leading-tight">Status</div>
//       <div className="self-stretch h-11 px-3 py-1 bg-white rounded-lg border border-neutral-300 justify-between items-center inline-flex">
//         <div className="grow shrink basis-0 h-6 justify-start items-center gap-1.5 flex">
//           <div className="justify-start items-center gap-px flex">
//             <div className="text-neutral-800 text-base font-normal font-['Nunito Sans'] leading-normal">To Do
//             <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
// <g id="chevron-down">
// <path id="Vector" d="M10 11.7043L15.9377 5.76659C16.0483 5.65203 16.1807 5.56064 16.327 5.49778C16.4734 5.43491 16.6308 5.40182 16.79 5.40044C16.9493 5.39905 17.1073 5.4294 17.2547 5.48972C17.4021 5.55003 17.536 5.6391 17.6487 5.75172C17.7613 5.86435 17.8504 5.99828 17.9107 6.1457C17.971 6.29312 18.0013 6.45107 18 6.61034C17.9986 6.76961 17.9655 6.92702 17.9026 7.07336C17.8397 7.21971 17.7484 7.35207 17.6338 7.46273L10.8481 14.2485C10.6231 14.4733 10.3181 14.5997 10 14.5997C9.68193 14.5997 9.37688 14.4733 9.15193 14.2485L2.3662 7.46273C2.25163 7.35207 2.16025 7.21971 2.09739 7.07336C2.03452 6.92702 2.00143 6.76961 2.00005 6.61034C1.99866 6.45107 2.02901 6.29312 2.08932 6.1457C2.14964 5.99828 2.23871 5.86435 2.35133 5.75172C2.46396 5.6391 2.59789 5.55003 2.74531 5.48972C2.89273 5.4294 3.05068 5.39905 3.20995 5.40044C3.36922 5.40182 3.52663 5.43491 3.67297 5.49778C3.81932 5.56064 3.95168 5.65203 4.06234 5.76659L10 11.7043Z" fill="#97A1B2"/>
// </g>
// </svg>

//             </div>
//           </div>
//         </div>
//         <div className="w-5 h-5 relative" />
//       </div>
//     </div>
//   </div>
//   <div className="w-96 px-6 py-2.5 bg-white border-t border-blue-100 justify-end items-center gap-2.5 inline-flex">
//     <div className="w-16 px-2 py-2.5 bg-violet-100 rounded-lg justify-center items-center gap-1 flex">
//       <div className="px-2 justify-center items-center gap-2.5 flex">
//         <div className="text-sky-600 text-xs font-normal font-['Nunito Sans'] leading-tight">Cancel

// </div>
//       </div>
//     </div>
//     <div className="w-14 px-2 py-2.5 bg-blue-600 rounded-lg justify-center items-center gap-1 flex">
//       <div className="px-2 justify-center items-center gap-2.5 flex">
//         <div className="text-white text-xs font-normal font-['Nunito Sans'] leading-tight">Add</div>
//       </div>
//     </div>
//   </div>
// </div>
//     );
// };
// export default ModalBox1
import React, { useState } from "react";

function ModalBox1() {
  const [taskName, setTaskName] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [status, setStatus] = useState("To Do");

  const handleAddTask = () => {
    console.log("Task Name:", taskName);
    console.log("Start Date:", startDate);
    console.log("End Date:", endDate);
    console.log("Status:", status);
  };

  return (
    <div
      className="w-96 h-96 rounded-lg flex-col justify-start items-start inline-flex"
      style={{ boxShadow: "0px 0px 8px 0px rgba(54, 89, 226, 0.16)" }}
    >
      <div className="w-96 h-12 px-6 py-2.5 bg-white border-b border-blue-100 justify-between items-center inline-flex">
        <div className="text-blue-800 text-base font-normal font-['Nunito Sans'] leading-normal">
          Add new task
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="X">
              <path
                id="Vector"
                d="M4.25176 4.25176C4.33137 4.17196 4.42593 4.10864 4.53004 4.06544C4.63416 4.02224 4.74577 4 4.85849 4C4.97121 4 5.08282 4.02224 5.18693 4.06544C5.29104 4.10864 5.38561 4.17196 5.46521 4.25176L10.0002 8.78849L14.5352 4.25176C14.6149 4.17209 14.7095 4.10888 14.8136 4.06576C14.9177 4.02264 15.0293 4.00045 15.142 4.00045C15.2546 4.00045 15.3662 4.02264 15.4703 4.06576C15.5744 4.10888 15.669 4.17209 15.7487 4.25176C15.8284 4.33144 15.8916 4.42603 15.9347 4.53013C15.9778 4.63423 16 4.74581 16 4.85849C16 4.97117 15.9778 5.08274 15.9347 5.18685C15.8916 5.29095 15.8284 5.38554 15.7487 5.46521L11.212 10.0002L15.7487 14.5352C15.8284 14.6149 15.8916 14.7095 15.9347 14.8136C15.9778 14.9177 16 15.0293 16 15.142C16 15.2546 15.9778 15.3662 15.9347 15.4703C15.8916 15.5744 15.8284 15.669 15.7487 15.7487C15.669 15.8284 15.5744 15.8916 15.4703 15.9347C15.3662 15.9778 15.2546 16 15.142 16C15.0293 16 14.9177 15.9778 14.8136 15.9347C14.7095 15.8916 14.6149 15.8284 14.5352 15.7487L10.0002 11.212L5.46521 15.7487C5.38554 15.8284 5.29095 15.8916 5.18685 15.9347C5.08274 15.9778 4.97117 16 4.85849 16C4.74581 16 4.63423 15.9778 4.53013 15.9347C4.42603 15.8916 4.33144 15.8284 4.25176 15.7487C4.17209 15.669 4.10888 15.5744 4.06576 15.4703C4.02264 15.3662 4.00045 15.2546 4.00045 15.142C4.00045 15.0293 4.02264 14.9177 4.06576 14.8136C4.10888 14.7095 4.17209 14.6149 4.25176 14.5352L8.78849 10.0002L4.25176 5.46521C4.17196 5.38561 4.10864 5.29104 4.06544 5.18693C4.02224 5.08282 4 4.97121 4 4.85849C4 4.74577 4.02224 4.63416 4.06544 4.53004C4.10864 4.42593 4.17196 4.33137 4.25176 4.25176Z"
                fill="#97A1B2"
              />
            </g>
          </svg>
        </div>
        <div className="w-5 h-5 relative" />
      </div>
      <div className="h-72 px-6 py-4 bg-white flex-col justify-start items-start gap-6 flex"></div>
      <div className="self-stretch h-16 flex-col justify-start items-start gap-1 flex">
        <div className="text-neutral-800 text-xs font-normal font-['Nunito Sans'] leading-tight">
          Name of the Task
        </div>
        <div className="self-stretch h-11 px-3 py-1 bg-white rounded-lg border border-neutral-300 justify-between items-center inline-flex">
          <input
            type="text"
            className="w-full h-full outline-none border-none text-zinc-400 text-base font-normal font-['Nunito Sans'] leading-normal"
            value={taskName}
            onChange={(e) => setTaskName(e.target.value)}
          />
        </div>
      </div>
      {/* ... (other unchanged content) */}
      <div className="self-stretch h-16 flex-col justify-start items-start gap-1 flex">
        <div className="text-neutral-800 text-xs font-normal font-['Nunito Sans'] leading-tight">
          Start date
        </div>
        <div className="self-stretch h-11 px-3 py-1 bg-white rounded-lg border border-neutral-300 justify-between items-center inline-flex">
          <input
            type="text"
            className="w-full h-full outline-none border-none text-zinc-400 text-base font-normal font-['Nunito Sans'] leading-normal"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
          />
        </div>
      </div>
      {/* ... (other unchanged content) */}
      <div className="self-stretch h-16 flex-col justify-start items-start gap-1 flex">
        <div className="text-neutral-800 text-xs font-normal font-['Nunito Sans'] leading-tight">
          Deadline
        </div>
        <div className="self-stretch h-11 px-3 py-1 bg-white rounded-lg border border-neutral-300 justify-between items-center inline-flex">
          <input
            type="text"
            className="w-full h-full outline-none border-none text-zinc-400 text-base font-normal font-['Nunito Sans'] leading-normal"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
          />
          {/* ... (calendar icon, similar to the previous ones) */}
        </div>
      </div>
      {/* ... (other unchanged content) */}
      <div className="self-stretch h-16 flex-col justify-start items-start gap-1 flex">
        <div className="text-neutral-800 text-xs font-normal font-['Nunito Sans'] leading-tight">
          Status
        </div>
        <div className="self-stretch h-11 px-3 py-1 bg-white rounded-lg border border-neutral-300 justify-between items-center inline-flex">
          <select
            className="w-full h-full outline-none border-none text-zinc-400 text-base font-normal font-['Nunito Sans'] leading-normal"
            value={status}
            onChange={(e) => setStatus(e.target.value)}
          >
            <option value="To Do">To Do</option>
            <option value="In Progress">In Progress</option>
            <option value="Done">Done</option>
          </select>
        </div>
      </div>
      {/* ... (other unchanged content) */}
      <div className="w-96 px-6 py-2.5 bg-white border-t border-blue-100 justify-end items-center gap-2.5 inline-flex">
        {/* ... (other unchanged content) */}
        <div
          className="w-14 px-2 py-2.5 bg-blue-600 rounded-lg justify-center items-center gap-1 flex"
          onClick={handleAddTask}
        >
          <div className="px-2 justify-center items-center gap-2.5 flex">
            <div className="text-white text-xs font-normal font-['Nunito Sans'] leading-tight">
              Add
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ModalBox1;
