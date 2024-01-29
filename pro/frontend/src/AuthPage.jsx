
import axios from "axios";
import React from "react";
import "C:\\Users\\rewan ahmed\\Desktop\\pro\\frontend\\src\\App.css"; // Import the CSS file
const AuthPage = (props) => {
  const onSubmit = (e) => {
    e.preventDefault();
    const { value } = e.target[0];
    axios
      .post("http://localhost:3001/authenticate", { username: value })
      .then((r) => props.onAuth({ ...r.data, secret: value }))
      .catch((e) => console.log("Auth Error", e));
  };

  return (
    <div className="background">
      <form onSubmit={onSubmit} className="form-card">
        <div className="form-title">Welcome to the workspace👋👋👋</div>
        <div className="form-subtitle">Please set a username  and password to get started</div>
        <div className="auth">
          <div className="auth-label">Username</div>
          <input className="auth-input" name="username" />
          <div>
          <div className="auth-label">password</div>
          <input className="auth-input" name="password" type="password"/>
          </div>
          <button className="auth-button" type="submit">
            Enter
          </button>
        </div>
      </form>
    </div>
  );
};

export default AuthPage;








// true with out css and password 
// import axios from "axios";
// const AuthPage = (props) => {
//   const onSubmit = (e) => {
//     e.preventDefault();
//     const { value } = e.target[0];
//     axios
//       .post("http://localhost:3001/authenticate", { username: value })
//       .then((r) => props.onAuth({ ...r.data, secret: value }))
//       .catch((e) => console.log("Auth Error", e));
//   };
//   return (
//     <div className="background">
//       <form onSubmit={onSubmit} className="form-card">
//         <div className="form-title">Welcome to workspace👋👋👋</div>
//         <div className="form-subtitle">Please Set a username to get started </div>
//         <div className="auth">
//           <div className="auth-label">Username</div>
//           <input className="auth-input" name="username" />
//           <button className="auth-button" type="submit">
//             Enter
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// };
// export default AuthPage;




















// const AuthPage = (props) => {
//   const onSubmit = (e) => {
//     e.preventDefault();
//     const { value } = e.target[0];
//     props.onAuth({ username: value, secret: value });
//   };

//   return (
//     <div className="background">
//       <form onSubmit={onSubmit} className="form-card">
//         <div className="form-title">Welcome 👋</div>

//         <div className="form-subtitle">Set a username to get started</div>

//         <div className="auth">
//           <div className="auth-label">Username</div>
//           <input className="auth-input" name="username" />
//           <button className="auth-button" type="submit">
//             Enter
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default AuthPage;