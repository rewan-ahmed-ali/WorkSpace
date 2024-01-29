// true 
const express = require("express");
const cors = require("cors");
const axios = require("axios"); 
// http request
const app = express();
app.use(express.json());
app.use(cors({ origin: true }));
// Sign-up endpoint
app.post("/signup", async (req, res) => {
  // Your sign-up logic here
  return res.json({ message: "Sign-up successful" });
});
// Login endpoint
app.post("/login", async (req, res) => {
  // Your login logic here
  return res.json({ message: "Login successful" });
});
// User authentication endpoint using ChatEngine
app.post("/authenticate", async (req, res) => {
  const { username,NewSecret } = req.body;
  try {
    const response = await axios.put(
      "https://api.chatengine.io/users/",
      { username: username, secret: NewSecret, first_name: username },
      {
        headers: { "Private-Key": "96970696-f033-47a4-835c-97881fac2d0f" },
      }
    );
    return res.status(response.status).json(response.data);
  } catch (error) {
    return res
      .status(error.response.status || 500)
      .json(error.response.data || { message: "Authentication failed" });
  }
});
app.listen(3001, () => {
  console.log("know ->Server is running on port 3001");
});































// // const express = require("express");
// // const cors = require("cors");
// // const axios = require("axios");

// // const app = express();
// // app.use(express.json());
// // app.use(cors({ origin: true }));

// // app.post("/signup", async (req, res) => {
// //   return {};
// // });

// // app.post("/login", async (req, res) => {
// //   return {};
// // });

// // app.listen(3001);
// const express = require("express");
// const cors = require("cors");

// const app = express();
// app.use(express.json());
// app.use(cors({ origin: true }));

// app.post("/authenticate", async (req, res) => {
//   const { username } = req.body;
//   try {
//     const r = await axios.put(
//       "https://api.chatengine.io/users/",
//       { username: username, secret: username, first_name: username },
//       { headers: { "Private-Key": "eb896e19-a9f4-4467-a7d3-1909a2f3d534" } }
//     );
//     return res.status(r.status).json(r.data);
//   } catch (e) {
//     return res.status(e.response.status).json(e.response.data);
//   }




//   return res.json({ username: username, secret: "sha256..." });
// });

// app.listen(3001);







// // error
// const express = require("express");
// const cors = require("cors");
// const axios = require("axios"); 

// const app = express();
// app.use(express.json());
// app.use(cors({ origin: true }));

// app.post("/authenticate", async (req, res) => {
//   const { username, password } = req.body;

//   try {
//     const response = await axios.put(
//       "https://api.chatengine.io/users/",
//       { username, secret: password, first_name: username },
//       {
//         headers: { "Private-Key": "eb896e19-a9f4-4467-a7d3-1909a2f3d534" },
//       }
//     );

//     // Assuming ChatEngine returns a user object in the response
//     const chatEngineUser = response.data;

//     // Here you can add your own logic for additional authentication checks if needed

//     return res.status(response.status).json(chatEngineUser);
//   } catch (error) {
//     return res
//       .status(error.response.status || 500)
//       .json(error.response.data || { message: "Authentication failed" });
//   }
// });

// const PORT = 3001;
// app.listen(PORT, () => {
//   console.log("know ->Server is running on port 3001");
// });





