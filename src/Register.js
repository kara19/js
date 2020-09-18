import React, { useEffect, useState } from 'react';

const Register = () => {
     
    return (
          <div class="content">
            <form action="action_page.php" method="post">
              <div>
                <p>To be able to register you in our system we need 
                  some information about you.</p>
                <label for="uname"><b>Username </b></label>
                <input type="text" placeholder="Enter username" name="uname" required />
              </div>
              <div>
                <label for="psw"><b>Email </b></label>
                <input type="password" placeholder="Enter email" name="psw" required />
              </div>
                <button type="submit">Register</button>
            </form>
          </div>
    );
  };
  
  export default Register;