<h1 align="center">🚀 Task Management API</h1>

<p align="center">A RESTful API for task management with user authentication, built with Node.js, Express, TypeScript, and MongoDB.</p>

<p align="center">
  <img src="https://img.shields.io/badge/Node.js-18%2B-brightgreen" alt="Node.js Version">
  <img src="https://img.shields.io/badge/TypeScript-6.0.3-blue" alt="TypeScript Version">
  <img src="https://img.shields.io/badge/Express.js-4.21.1-lightgrey" alt="Express Version">
  <img src="https://img.shields.io/badge/MongoDB-8.7.3-green" alt="MongoDB Version">
  <img src="https://img.shields.io/badge/License-ISC-yellow" alt="License">
</p>

<hr>

<h2>📋 Overview</h2>

<p>This is a multi-tenant backend boilerplate that provides task management functionality with user authentication and authorization. Users can register, login, and manage their tasks through a secure REST API. The application uses JWT-based authentication and MongoDB for data persistence.</p>

<h2>🚀 Features</h2>

<h3>🔐 User Authentication</h3>
<ul>
  <li>User registration with encrypted passwords</li>
  <li>JWT-based login with secure cookie storage</li>
  <li>Protected routes with middleware authentication</li>
</ul>

<h3>📝 Task Management</h3>
<ul>
  <li>Create, Read, Update, Delete (CRUD) operations</li>
  <li>Task status tracking: <code>pending</code>, <code>in-progress</code>, <code>completed</code></li>
  <li>Due date validation</li>
  <li>User-specific task isolation</li>
</ul>

<h3>🔒 Security</h3>
<ul>
  <li>Helmet.js for HTTP headers security</li>
  <li>Rate limiting to prevent abuse</li>
  <li>HPP (HTTP Parameter Pollution) protection</li>
  <li>CORS configuration</li>
  <li>Password hashing with bcryptjs</li>
</ul>

<h3>📧 Email Integration</h3>
<ul>
  <li>Nodemailer setup for sending emails</li>
  <li>Configurable SMTP settings</li>
</ul>

<h2>🛠️ Tech Stack</h2>

<table>
  <thead>
    <tr>
      <th>Technology</th>
      <th>Version</th>
      <th>Purpose</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Node.js</td>
      <td>18+</td>
      <td>Runtime environment</td>
    </tr>
    <tr>
      <td>Express.js</td>
      <td>4.21.1</td>
      <td>Web framework</td>
    </tr>
    <tr>
      <td>TypeScript</td>
      <td>6.0.3</td>
      <td>Type safety</td>
    </tr>
    <tr>
      <td>MongoDB</td>
      <td>8.7.3</td>
      <td>Database</td>
    </tr>
    <tr>
      <td>Mongoose</td>
      <td>8.7.3</td>
      <td>ODM for MongoDB</td>
    </tr>
    <tr>
      <td>JWT</td>
      <td>9.0.2</td>
      <td>Authentication</td>
    </tr>
    <tr>
      <td>bcryptjs</td>
      <td>3.0.3</td>
      <td>Password hashing</td>
    </tr>
    <tr>
      <td>Nodemailer</td>
      <td>6.9.16</td>
      <td>Email service</td>
    </tr>
  </tbody>
</table>

<h2>📦 Project Structure</h2>

<pre>
project-root/
├── src/
│   ├── config/
│   │   └── config.ts           # Configuration variables
│   ├── controllers/
│   │   ├── taskController.ts   # Task CRUD operations
│   │   └── userController.ts   # User authentication
│   ├── middlewares/
│   │   └── authMiddleware.ts   # JWT authentication middleware
│   ├── models/
│   │   ├── taskModel.ts        # Task schema
│   │   └── userModel.ts        # User schema
│   ├── routes/
│   │   ├── task.route.ts       # Task endpoints
│   │   └── user.route.ts       # User endpoints
│   ├── utility/
│   │   ├── emailUtility.ts     # Email sending utility
│   │   └── tokenUtility.ts     # JWT encode/decode utility
│   ├── index.ts               # Express app setup
│   ├── server.ts              # Server & database connection
│   └── express.d.ts           # Express type augmentation
├── package.json
├── package-lock.json
├── tsconfig.json
└── README.md
</pre>

<h2>📊 Database Schema</h2>

<h3>User Model</h3>
<pre>
{
  name: string;        // Required
  email: string;       // Required, Unique
  password: string;    // Required (hashed)
  createdAt: Date;     // Auto-generated
  updatedAt: Date;     // Auto-generated
}
</pre>

<h3>Task Model</h3>
<pre>
{
  title: string;                              // Required
  description: string;                        // Optional
  status: 'pending' | 'in-progress' | 'completed';  // Default: 'pending'
  dueDate: Date;                              // Required (must be future date)
  user: ObjectId;                             // Reference to Users collection
  createdAt: Date;                            // Auto-generated
  updatedAt: Date;                            // Auto-generated
}
</pre>

<h2>🔌 API Endpoints</h2>

<h3>Authentication</h3>
<table>
  <thead>
    <tr>
      <th>Method</th>
      <th>Endpoint</th>
      <th>Description</th>
      <th>Auth Required</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>POST</code></td>
      <td><code>/api/register</code></td>
      <td>Register new user</td>
      <td>❌ No</td>
    </tr>
    <tr>
      <td><code>POST</code></td>
      <td><code>/api/login</code></td>
      <td>Login user & get token</td>
      <td>❌ No</td>
    </tr>
  </tbody>
</table>

<h3>Tasks</h3>
<table>
  <thead>
    <tr>
      <th>Method</th>
      <th>Endpoint</th>
      <th>Description</th>
      <th>Auth Required</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>POST</code></td>
      <td><code>/api/create</code></td>
      <td>Create new task</td>
      <td>✅ Yes</td>
    </tr>
    <tr>
      <td><code>GET</code></td>
      <td><code>/api/getById/:id</code></td>
      <td>Get task by ID</td>
      <td>✅ Yes</td>
    </tr>
    <tr>
      <td><code>PUT</code></td>
      <td><code>/api/updateTask/:id</code></td>
      <td>Update task</td>
      <td>✅ Yes</td>
    </tr>
    <tr>
      <td><code>DELETE</code></td>
      <td><code>/api/deleteTask/:id</code></td>
      <td>Delete task</td>
      <td>✅ Yes</td>
    </tr>
  </tbody>
</table>

<h2>🔧 Installation & Setup</h2>

<h3>Prerequisites</h3>
<ul>
  <li>✅ Node.js (v18 or higher)</li>
  <li>✅ npm or yarn package manager</li>
  <li>✅ MongoDB Atlas account or local MongoDB instance</li>
</ul>

<h3>Step 1: Clone the Repository</h3>
<pre>
git clone &lt;repository-url&gt;
cd task-management-api
</pre>

<h3>Step 2: Install Dependencies</h3>
<pre>
npm install
</pre>

<h3>Step 3: Configure Environment</h3>
<p>Update the configuration in <code>src/config/config.ts</code>:</p>
<pre>
export const MONGODB_CONNECTION = "your_mongodb_connection_string";
export const JWT_SECRET = "your_jwt_secret_key";
export const PORT = 5050;
</pre>

<h3>Step 4: Run Development Server</h3>
<pre>
npm run dev
</pre>
<p>Server will start at: <code>http://localhost:5050</code></p>

<h3>Step 5: Build for Production</h3>
<pre>
npm run build
npm start
</pre>

<h2>📝 API Usage Examples</h2>

<h3>Register a User</h3>
<pre>
curl -X POST http://localhost:5050/api/register \
  -H "Content-Type: application/json" \
  -d '{
    "name": "John Doe",
    "email": "john@example.com",
    "password": "password123"
  }'
</pre>

<h4>Response:</h4>
<pre>
{
  "message": "User registered successfully",
  "userId": "507f1f77bcf86cd799439011"
}
</pre>

<h3>Login</h3>
<pre>
curl -X POST http://localhost:5050/api/login \
  -H "Content-Type: application/json" \
  -d '{
    "email": "john@example.com",
    "password": "password123"
  }'
</pre>

<h4>Response:</h4>
<pre>
{
  "success": true,
  "token": "eyJhbGciOiJIUzI1NiIs...",
  "user": { ... },
  "message": "User Login SuccessFully"
}
</pre>

<h3>Create Task</h3>
<pre>
curl -X POST http://localhost:5050/api/create \
  -H "Content-Type: application/json" \
  -H "Cookie: token=&lt;your_jwt_token&gt;" \
  -d '{
    "title": "Complete Project",
    "description": "Finish the backend API development",
    "status": "pending",
    "dueDate": "2025-12-31"
  }'
</pre>

<h3>Get Task by ID</h3>
<pre>
curl -X GET http://localhost:5050/api/getById/&lt;task_id&gt; \
  -H "Cookie: token=&lt;your_jwt_token&gt;"
</pre>

<h3>Update Task</h3>
<pre>
curl -X PUT http://localhost:5050/api/updateTask/&lt;task_id&gt; \
  -H "Content-Type: application/json" \
  -H "Cookie: token=&lt;your_jwt_token&gt;" \
  -d '{
    "status": "in-progress"
  }'
</pre>

<h3>Delete Task</h3>
<pre>
curl -X DELETE http://localhost:5050/api/deleteTask/&lt;task_id&gt; \
  -H "Cookie: token=&lt;your_jwt_token&gt;"
</pre>

<h2>🔒 Security Features</h2>

<table>
  <thead>
    <tr>
      <th>Feature</th>
      <th>Configuration</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>Rate Limiting</strong></td>
      <td>3600 req / 15 min</td>
      <td>Prevents brute force & DDoS attacks</td>
    </tr>
    <tr>
      <td><strong>CORS</strong></td>
      <td>All origins (*)</td>
      <td>Cross-Origin Resource Sharing configured</td>
    </tr>
    <tr>
      <td><strong>Helmet</strong></td>
      <td>Enabled</td>
      <td>Secure HTTP headers</td>
    </tr>
    <tr>
      <td><strong>HPP</strong></td>
      <td>Enabled</td>
      <td>HTTP Parameter Pollution protection</td>
    </tr>
    <tr>
      <td><strong>Cookie Security</strong></td>
      <td>HTTP-only, Secure, SameSite=None</td>
      <td>Secure cookie configuration</td>
    </tr>
    <tr>
      <td><strong>Password Hashing</strong></td>
      <td>bcryptjs (10 salt rounds)</td>
      <td>Secure password storage</td>
    </tr>
    <tr>
      <td><strong>JWT</strong></td>
      <td>30 days expiration</td>
      <td>Token-based authentication</td>
    </tr>
  </tbody>
</table>

<h2>📦 Available Scripts</h2>

<table>
  <thead>
    <tr>
      <th>Script</th>
      <th>Command</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Development</td>
      <td><code>npm run dev</code></td>
      <td>Start development server with hot-reload</td>
    </tr>
    <tr>
      <td>Build</td>
      <td><code>npm run build</code></td>
      <td>Compile TypeScript to JavaScript</td>
    </tr>
    <tr>
      <td>Production</td>
      <td><code>npm start</code></td>
      <td>Run compiled JavaScript</td>
    </tr>
  </tbody>
</table>

<h2>🛡️ Environment Variables</h2>

<table>
  <thead>
    <tr>
      <th>Variable</th>
      <th>Default Value</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>MONGODB_CONNECTION</code></td>
      <td>-</td>
      <td>MongoDB Atlas connection string</td>
    </tr>
    <tr>
      <td><code>JWT_SECRET</code></td>
      <td>-</td>
      <td>Secret key for JWT signing</td>
    </tr>
    <tr>
      <td><code>JWT_EXPIRATION_TIME</code></td>
      <td>2592000 (30 days)</td>
      <td>Token expiration in seconds</td>
    </tr>
    <tr>
      <td><code>PORT</code></td>
      <td>5050</td>
      <td>Server port number</td>
    </tr>
    <tr>
      <td><code>MAX_JSON_SIZE</code></td>
      <td>80mb</td>
      <td>Maximum JSON body size</td>
    </tr>
    <tr>
      <td><code>URL_ENCODED</code></td>
      <td>true</td>
      <td>URL encoded extended mode</td>
    </tr>
    <tr>
      <td><code>REQUEST_LIMIT_TIME</code></td>
      <td>900000 (15 min)</td>
      <td>Rate limit time window (ms)</td>
    </tr>
    <tr>
      <td><code>REQUEST_LIMIT_NUMBER</code></td>
      <td>3600</td>
      <td>Max requests per time window</td>
    </tr>
    <tr>
      <td><code>WEB_CACHE</code></td>
      <td>false</td>
      <td>ETag cache control</td>
    </tr>
  </tbody>
</table>

<h2>⚠️ Important Security Notes</h2>

<blockquote>
  <p><strong>⚠️ Warning:</strong> The following configurations contain default/example values and MUST be changed before deploying to production!</p>
</blockquote>

<ol>
  <li><strong>🔴 MongoDB Credentials:</strong> Update <code>MONGODB_CONNECTION</code> in <code>config.ts</code> with your own secure connection string</li>
  <li><strong>🔴 JWT Secret:</strong> Change <code>JWT_SECRET</code> to a strong, unique secret key</li>
  <li><strong>🔴 Email Credentials:</strong> Update SMTP credentials in <code>emailUtility.ts</code> with your own email service credentials</li>
  <li><strong>🔴 CORS Configuration:</strong> Update <code>origin</code> in CORS settings to your specific domain instead of <code>*</code></li>
  <li><strong>🟡 Environment Variables:</strong> Move all sensitive data to <code>.env</code> file and never commit it to version control</li>
  <li><strong>🟡 MongoDB Network Access:</strong> Configure IP whitelist in MongoDB Atlas</li>
  <li><strong>🟢 HTTPS:</strong> Enable HTTPS in production environment</li>
</ol>

<h2>🤝 Contributing</h2>

<p>Contributions are welcome! Please follow these steps:</p>

<ol>
  <li>Fork the repository</li>
  <li>Create your feature branch: <code>git checkout -b feature/AmazingFeature</code></li>
  <li>Commit your changes: <code>git commit -m 'Add some AmazingFeature'</code></li>
  <li>Push to the branch: <code>git push origin feature/AmazingFeature</code></li>
  <li>Open a Pull Request</li>
</ol>

<h2>📄 License</h2>

<p>This project is licensed under the <strong>ISC License</strong>.</p>

<h2>👤 Author</h2>

<p><strong>SaamTech</strong></p>

<h2>📞 Support</h2>

<p>For support, please open an issue in the repository or contact the development team.</p>

<hr>

<p align="center">
  <strong>⭐ Don't forget to star this repository if you found it useful! ⭐</strong>
</p>

<p align="center">
  <sub>Built with ❤️ using Node.js, Express, TypeScript & MongoDB</sub>
</p>