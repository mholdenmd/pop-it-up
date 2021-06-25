import React, { useState } from  'react';
	
	
const UserForm = (props) => {
	const [firstname, setFirstname] = useState("")
	const [lastname, setLastname] = useState("")
	const [username, setUsername] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [confirmpassword, setComfirmPassword] = useState(""); 
	const [hasBeenSubmitted, setHasBeenSubmitted] = useState(false); 
	
	const createUser = (e) => {
		e.preventDefault();
		const newUser = { firstname, lastname, username, email, password, confirmpassword };
		console.log("Welcome", newUser);
		setHasBeenSubmitted( true );
	};

	
	
	return(
		
		// <form onSubmit={ createUser }>
		<form className="col-6 mx-auto">
			<div>

				<label>First Name: </label> 
				<input type="text" onChange={ (e) => setFirstname(e.target.value)} />
			</div>
			<span className="text-danger">
				{firstname.length < 2 && firstname.length > 0? "First Name is tooo Short": ""}
			</span>
			<div>
				<label>Last Name: </label> 
				<input type="text" onChange={ (e) => setLastname(e.target.value)} />
			</div>
			<span className="text-danger">
				{lastname.length < 2 && lastname.length > 0? "Last Name is tooo Short": ""}
			</span>
			<div>
				<label>Username: </label> 
				<input type="text" onChange={ (e) => setUsername(e.target.value) } />
			</div>
			<span className="text-danger">
				{username.length < 2 && username.length > 0? "Username is tooo Short": ""}
			</span>
			<div>
				<label>Email Address: </label> 
				<input type="text" onChange={ (e) => setEmail(e.target.value) } />
			</div>
			<span className="text-danger">
				{email.length < 5 && email.length > 0? "Email is tooo Short": ""}
			</span>
			<div>
				<label>Password: </label>
				<input type="text" onChange={ (e) => setPassword(e.target.value) } />
			</div>
			<span className="text-danger">
				{password.length < 8 && password.length > 0? "Password is tooo Short": ""}
			</span>
			<div>
				<label>Comfirm Password: </label>
				<input type="text" onChange={ (e) => setComfirmPassword(e.target.value) } />
			<span className="text-danger">
				{confirmpassword !== password? "Password must match": ""}
			</span>
			</div>

			<input type="submit" value="Create User" />
			<p>{firstname}</p>
			<p>{lastname}</p>
			<p>{username}</p>
			<p>{email}</p>
			


		</form>
		
			
		
		
		// <p>Your Form Data</p>
	);
};
	
export default UserForm;