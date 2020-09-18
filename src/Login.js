import React, { useEffect, useState } from 'react';


const Login = () => {
     
    return (
          <div class="content">
            <form action="action_page.php" method="post">
              <div>
                <label for="uname"><b>Username </b></label>
                <input type="text" placeholder="Enter Username" name="uname" required />
              </div>
              <div>
                <label for="psw"><b>Password </b></label>
                <input type="password" placeholder="Enter Password" name="psw" required />
              </div>
                <button type="submit">Login</button>
            </form>
          </div>
    );
  };
  
  export default Login;