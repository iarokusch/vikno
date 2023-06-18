// import React, { useState } from 'react';

// const ChangeArtistData = ({ artist, onSave }) => {
//     const [workingName, setWorkingName] = useState(artist?.workingName);
//     const [title, setTitle] = useState(artist?.title);
//     const [skills, setSkills] = useState(artist?.skills);
//     const [medium, setMedium] = useState(artist?.medium);
//     const [projectRoles, setProjectRoles] = useState(artist?.projectRoles);

//     const handleSave = () => {
//         const updatedArtist = {
//             ...artist,
//             workingName,
//             title,
//             skills,
//             medium,
//             projectRoles,
//         };
//         onSave(updatedArtist);
//     };

//     return (
//         <div className=''>
//             <h2>Edit Artist Data</h2>
//             <form>
//                 <div>
//                     <label>Working Name:</label>
//                     <input
//                         type='text'
//                         value={workingName}
//                         onChange={(e) => setWorkingName(e.target.value)}
//                     />
//                 </div>
//                 <div>
//                     <label>Title:</label>
//                     <input
//                         type='text'
//                         value={title}
//                         onChange={(e) => setTitle(e.target.value)}
//                     />
//                 </div>
//                 <div>
//                     <label>Skills:</label>
//                     <input
//                         type='text'
//                         value={skills}
//                         onChange={(e) => setSkills(e.target.value)}
//                     />
//                 </div>
//                 <div>
//                     <label>Medium:</label>
//                     <input
//                         type='text'
//                         value={medium}
//                         onChange={(e) => setMedium(e.target.value)}
//                     />
//                 </div>
//                 <div>
//                     <label>Project Roles:</label>
//                     <input
//                         type='text'
//                         value={projectRoles}
//                         onChange={(e) => setProjectRoles(e.target.value)}
//                     />
//                 </div>
//             </form>
//             <button onClick={handleSave}>Save</button>
//         </div>
//     );
// };

// export default ChangeArtistData;
