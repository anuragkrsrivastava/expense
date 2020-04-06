import React from 'react';
import {Link} from 'react-router-dom';

function ProfilePage (){
return(
    <div className = "Class">
    <ul><Link to = '/'>Home</Link></ul>
    <ul><Link to = '/settings'>Settings</Link></ul>
    <h2 className = "LogIn">LogIn Page</h2>
    <form className = 'Profile'>
        <ul><label> Name
            <input type = 'string' name = 'Name'/>
         </label>
         <input type = 'submit'></input></ul>
         <ul><label>Email Id
             <input type = 'email' name = 'Email'/>
         </label>
         <input type = 'submit'></input></ul>
         <ul><label>Mobile Number
             <input type = 'number' name = 'Mobile Number'/>
         </label>
         <input type = 'submit'></input></ul>
    </form>
    </div>
);
}
export default ProfilePage;
