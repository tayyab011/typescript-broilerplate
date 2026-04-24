<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Task Management API - Documentation</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Helvetica Neue', sans-serif;
            line-height: 1.6;
            color: #24292e;
            background-color: #f6f8fa;
            padding: 20px;
        }

        .container {
            max-width: 1012px;
            margin: 0 auto;
            background: #ffffff;
            padding: 45px;
            border-radius: 8px;
            box-shadow: 0 1px 3px rgba(0,0,0,0.12);
        }

        h1 {
            font-size: 2.5em;
            font-weight: 700;
            margin-bottom: 16px;
            padding-bottom: 10px;
            border-bottom: 2px solid #e1e4e8;
            color: #1a1a1a;
        }

        h2 {
            font-size: 1.8em;
            margin-top: 35px;
            margin-bottom: 16px;
            padding-bottom: 8px;
            border-bottom: 1px solid #e1e4e8;
            color: #2c3e50;
        }

        h3 {
            font-size: 1.3em;
            margin-top: 24px;
            margin-bottom: 12px;
            color: #34495e;
        }

        p {
            margin-bottom: 16px;
            font-size: 16px;
        }

        ul, ol {
            margin: 0 0 16px 24px;
        }

        li {
            margin-bottom: 8px;
        }

        code {
            background-color: #f6f8fa;
            padding: 2px 6px;
            border-radius: 3px;
            font-family: 'Fira Code', 'Courier New', monospace;
            font-size: 0.9em;
            color: #e83e8c;
        }

        pre {
            background-color: #1e1e1e;
            color: #d4d4d4;
            padding: 16px;
            border-radius: 6px;
            overflow-x: auto;
            margin: 16px 0;
            font-family: 'Fira Code', 'Courier New', monospace;
            font-size: 14px;
            line-height: 1.5;
        }

        pre code {
            background: none;
            color: inherit;
            padding: 0;
            font-size: inherit;
        }

        table {
            width: 100%;
            border-collapse: collapse;
            margin: 20px 0;
            background: #fff;
            box-shadow: 0 1px 3px rgba(0,0,0,0.08);
        }

        table thead {
            background-color: #f6f8fa;
        }

        table th {
            padding: 12px 15px;
            text-align: left;
            font-weight: 600;
            border: 1px solid #e1e4e8;
            background-color: #f1f3f5;
        }

        table td {
            padding: 10px 15px;
            border: 1px solid #e1e4e8;
        }

        table tbody tr:hover {
            background-color: #f8f9fa;
        }

        a {
            color: #0366d6;
            text-decoration: none;
        }

        a:hover {
            text-decoration: underline;
        }

        strong {
            font-weight: 600;
            color: #1a1a1a;
        }

        .warning-box {
            background-color: #fff8e1;
            border-left: 4px solid #ffa000;
            padding: 15px 20px;
            margin: 20px 0;
            border-radius: 4px;
        }

        .warning-box strong {
            color: #e65100;
        }

        .feature-list {
            background-color: #f8f9fa;
            padding: 20px;
            border-radius: 6px;
            margin: 15px 0;
        }

        .badge {
            display: inline-block;
            padding: 4px 12px;
            background-color: #e1e4e8;
            border-radius: 20px;
            font-size: 0.85em;
            font-weight: 500;
            margin-right: 8px;
        }

        .badge.green {
            background-color: #d4edda;
            color: #155724;
        }

        .badge.red {
            background-color: #f8d7da;
            color: #721c24;
        }

        .badge.blue {
            background-color: #d1ecf1;
            color: #0c5460;
        }

        @media screen and (max-width: 768px) {
            .container {
                padding: 20px;
            }

            h1 {
                font-size: 2em;
            }

            table {
                font-size: 14px;
            }

            pre {
                font-size: 12px;
            }
        }
    </style>
</head>
<body>
    <div class="container">
        
        <!-- Header -->
        <h1>🚀 Task Management API</h1>
        
        <p>A RESTful API for task management with user authentication, built with Node.js, Express, TypeScript, and MongoDB.</p>

        <p>
            <span class="badge blue">Node.js 18+</span>
            <span class="badge green">TypeScript</span>
            <span class="badge blue">Express.js</span>
            <span class="badge green">MongoDB</span>
        </p>

        <!-- Overview Section -->
        <h2>📋 Overview</h2>
        
        <p>This is a multi-tenant backend boilerplate that provides task management functionality with user authentication and authorization. Users can register, login, and manage their tasks through a secure REST API. The application uses JWT-based authentication and MongoDB for data persistence.</p>

        <!-- Features Section -->
        <h2>🚀 Features</h2>

        <div class="feature-list">
            <h3>User Authentication</h3>
            <ul>
                <li>User registration with encrypted passwords</li>
                <li>JWT-based login with secure cookie storage</li>
                <li>Protected routes with middleware authentication</li>
            </ul>
        </div>

        <div class="feature-list">
            <h3>Task Management</h3>
            <ul>
                <li>Create, Read, Update, Delete (CRUD) operations</li>
                <li>Task status tracking (pending, in-progress, completed)</li>
                <li>Due date validation</li>
                <li>User-specific task isolation</li>
            </ul>
        </div>

        <div class="feature-list">
            <h3>Security</h3>
            <ul>
                <li>Helmet.js for HTTP headers security</li>
                <li>Rate limiting to prevent abuse</li>
                <li>HPP (HTTP Parameter Pollution) protection</li>
                <li>CORS configuration</li>
                <li>Password hashing with bcryptjs</li>
            </ul>
        </div>

        <div class="feature-list">
            <h3>Email Integration</h3>
            <ul>
                <li>Nodemailer setup for sending emails</li>
                <li>Configurable SMTP settings</li>
            </ul>
        </div>

        <!-- Tech Stack Section -->
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

        <!-- Project Structure Section -->
        <h2>📦 Project Structure</h2>

        <pre><code>project-root/
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
├── tsconfig.json
└── README.md</code></pre>

        <!-- Database Schema Section -->
        <h2>📊 Database Schema</h2>

        <h3>User Model</h3>
        <pre><code>{
  name: string;        // Required
  email: string;       // Required, Unique
  password: string;    // Required (hashed)
  createdAt: Date;     // Auto-generated
  updatedAt: Date;     // Auto-generated
}</code></pre>

        <h3>Task Model</h3>
        <pre><code>{
  title: string;                              // Required
  description: string;                        // Optional
  status: 'pending' | 'in-progress' | 'completed';  // Default: 'pending'
  dueDate: Date;                              // Required
  user: ObjectId;                             // Reference to Users collection
  createdAt: Date;                            // Auto-generated
  updatedAt: Date;                            // Auto-generated
}</code></pre>

        <!-- API Endpoints Section -->
        <h2>🔌 API Endpoints</h2>

        <h3>Authentication</h3>
        <table>
            <thead>
                <tr>
                    <th>Method</th>
                    <th>Endpoint</th>
                    <th>Description</th>
                    <th>Auth</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td><span class="badge green">POST</span></td>
                    <td><code>/api/register</code></td>
                    <td>Register new user</td>
                    <td><span class="badge red">No</span></td>
                </tr>
                <tr>
                    <td><span class="badge green">POST</span></td>
                    <td><code>/api/login</code></td>
                    <td>Login user</td>
                    <td><span class="badge red">No</span></td>
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
                    <th>Auth</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td><span class="badge green">POST</span></td>
                    <td><code>/api/create</code></td>
                    <td>Create new task</td>
                    <td><span class="badge green">Yes</span></td>
                </tr>
                <tr>
                    <td><span class="badge blue">GET</span></td>
                    <td><code>/api/getById/:id</code></td>
                    <td>Get task by ID</td>
                    <td><span class="badge green">Yes</span></td>
                </tr>
                <tr>
                    <td><span class="badge blue">PUT</span></td>
                    <td><code>/api/updateTask/:id</code></td>
                    <td>Update task</td>
                    <td><span class="badge green">Yes</span></td>
                </tr>
                <tr>
                    <td><span class="badge red">DELETE</span></td>
                    <td><code>/api/deleteTask/:id</code></td>
                    <td>Delete task</td>
                    <td><span class="badge green">Yes</span></td>
                </tr>
            </tbody>
        </table>

        <!-- Installation Section -->
        <h2>🔧 Installation & Setup</h2>

        <h3>Prerequisites</h3>
        <ul>
            <li>Node.js (v18 or higher)</li>
            <li>npm or yarn</li>
            <li>MongoDB Atlas account or local MongoDB instance</li>
        </ul>

        <h3>Step 1: Clone the Repository</h3>
        <pre><code>git clone &lt;repository-url&gt;
cd task-management-api</code></pre>

        <h3>Step 2: Install Dependencies</h3>
        <pre><code>npm install</code></pre>

        <h3>Step 3: Configure Environment</h3>
        <p>The configuration is already set in <code>src/config/config.ts</code>. Make sure to update the following variables for production:</p>
        <pre><code>export const MONGODB_CONNECTION = "your_mongodb_connection_string";
export const JWT_SECRET = "your_jwt_secret";
export const PORT = 5050;</code></pre>

        <h3>Step 4: Run Development Server</h3>
        <pre><code>npm run dev</code></pre>

        <h3>Step 5: Build for Production</h3>
        <pre><code>npm run build
npm start</code></pre>

        <!-- API Usage Examples Section -->
        <h2>📝 API Usage Examples</h2>

        <h3>Register a User</h3>
        <pre><code>curl -X POST http://localhost:5050/api/register \
  -H "Content-Type: application/json" \
  -d '{"name": "John Doe", "email": "john@example.com", "password": "password123"}'</code></pre>

        <h3>Login</h3>
        <pre><code>curl -X POST http://localhost:5050/api/login \
  -H "Content-Type: application/json" \
  -d '{"email": "john@example.com", "password": "password123"}'</code></pre>

        <h3>Create Task</h3>
        <pre><code>curl -X POST http://localhost:5050/api/create \
  -H "Content-Type: application/json" \
  -H "Cookie: token=&lt;your_jwt_token&gt;" \
  -d '{
    "title": "Complete Project",
    "description": "Finish the backend API",
    "status": "pending",
    "dueDate": "2025-12-31"
  }'</code></pre>

        <!-- Security Features Section -->
        <h2>🔒 Security Features</h2>
        <ul>
            <li><strong>Rate Limiting:</strong> 3600 requests per 15 minutes</li>
            <li><strong>CORS:</strong> Configured with specific methods</li>
            <li><strong>Helmet:</strong> Secure HTTP headers</li>
            <li><strong>HPP:</strong> Protection against HTTP parameter pollution</li>
            <li><strong>Cookie Security:</strong> HTTP-only, secure, same-site cookies</li>
            <li><strong>Input Validation:</strong> Server-side validation for required fields</li>
            <li><strong>Password Hashing:</strong> bcrypt with salt rounds of 10</li>
        </ul>

        <!-- Available Scripts Section -->
        <h2>📦 Available Scripts</h2>
        <table>
            <thead>
                <tr>
                    <th>Script</th>
                    <th>Description</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td><code>npm run dev</code></td>
                    <td>Start development server with hot-reload</td>
                </tr>
                <tr>
                    <td><code>npm run build</code></td>
                    <td>Build TypeScript to JavaScript</td>
                </tr>
                <tr>
                    <td><code>npm start</code></td>
                    <td>Run production build</td>
                </tr>
            </tbody>
        </table>

        <!-- Environment Variables Section -->
        <h2>🛡️ Environment Variables</h2>
        <table>
            <thead>
                <tr>
                    <th>Variable</th>
                    <th>Default</th>
                    <th>Description</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td><code>MONGODB_CONNECTION</code></td>
                    <td>-</td>
                    <td>MongoDB connection string</td>
                </tr>
                <tr>
                    <td><code>JWT_SECRET</code></td>
                    <td>-</td>
                    <td>Secret key for JWT</td>
                </tr>
                <tr>
                    <td><code>JWT_EXPIRATION_TIME</code></td>
                    <td>30 days</td>
                    <td>Token expiration in seconds</td>
                </tr>
                <tr>
                    <td><code>PORT</code></td>
                    <td>5050</td>
                    <td>Server port</td>
                </tr>
                <tr>
                    <td><code>MAX_JSON_SIZE</code></td>
                    <td>80mb</td>
                    <td>Maximum JSON body size</td>
                </tr>
                <tr>
                    <td><code>REQUEST_LIMIT_TIME</code></td>
                    <td>15 min</td>
                    <td>Rate limit window</td>
                </tr>
                <tr>
                    <td><code>REQUEST_LIMIT_NUMBER</code></td>
                    <td>3600</td>
                    <td>Max requests per window</td>
                </tr>
            </tbody>
        </table>

        <!-- Important Security Notes Section -->
        <div class="warning-box">
            <h2>⚠️ Important Security Notes</h2>
            <ol>
                <li><strong>Change Default Credentials:</strong> The MongoDB connection string and JWT secret in the config file are defaults. Change them immediately for production use.</li>
                <li><strong>Email Credentials:</strong> Update the email credentials in <code>emailUtility.ts</code> with your own SMTP settings.</li>
                <li><strong>CORS Configuration:</strong> Update CORS origin settings for production deployment.</li>
                <li><strong>Environment Variables:</strong> Move sensitive data to environment variables instead of hardcoding.</li>
            </ol>
        </div>

        <!-- Contributing Section -->
        <h2>🤝 Contributing</h2>
        <ol>
            <li>Fork the repository</li>
            <li>Create your feature branch (<code>git checkout -b feature/AmazingFeature</code>)</li>
            <li>Commit your changes (<code>git commit -m 'Add some AmazingFeature'</code>)</li>
            <li>Push to the branch (<code>git push origin feature/AmazingFeature</code>)</li>
            <li>Open a Pull Request</li>
        </ol>

        <!-- License Section -->
        <h2>📄 License</h2>
        <p>This project is licensed under the ISC License.</p>

        <!-- Author Section -->
        <h2>👤 Author</h2>
        <p><strong>SaamTech</strong></p>

        <hr style="margin: 30px 0; border: 0; border-top: 1px solid #e1e4e8;">
        
        <p><strong>Note:</strong> This is a boilerplate project. Make sure to review and update security configurations before deploying to production.</p>

    </div>
</body>
</html>