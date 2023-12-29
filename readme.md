# User Management API

This API provides functionality for user management, including signup, login, and basic role-based access control.



API Endpoints
<h2>user api</h2>
1. <h3> Signup</h3>
Endpoint:
`POST /user/signup`

2. <h3>Login</h3>
Endpoint:
 `POST /user/login`
3. <h3>User profile</h3>
 Endpoint:
  `GET /user/profile`

5. <h3>Modify User Details</h3>
   Endpoint:
   `PUT /user/update`

6. <h3>Delete User</h3>
   Endpoint:
   `DELETE /user/delete`

7. <h3>Admin Access: 
8. <h3>View All Users</h3>
   Endpoint:
      `GET /admin/user`

9. <h3>Update User by Admin</h3>
   Endpoint:
   `PUT /admin/user/update/:userId`
10. <h3>Delete User by Admin</h3>
    Endpoint:
    `DELETE /api/admin/user/delete/:userEmail`


<h3>Authentication and Security</h3>
1. Authentication is implemented using JSON Web Tokens (JWT).
2. Passwords are securely encrypted using bcrypt.