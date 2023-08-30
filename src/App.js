import './App.css';
import { validateEmail } from './utils'
import { useState } from 'react';


const PasswordErrorMessage = () => {
    return (
        <p className='FieldError' >Password must be 8 characters long </p>
    );
};


function App() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState({
        value: '',
        isTouched: false
    });
    const [ role, setRole] = useState('role');

    const isFormValid = () => {
        return (firstName && validateEmail(email) && password.value.length >= 8 && role !== "role");
    };

    const clearForm = () => {
        setFirstName('');
        setLastName('');
        setEmail('');
        setPassword({
            value: '',
            isTouched: false
        });
        setRole('role');
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        clearForm();
        alert('Account Created Life Destroyed');
    }

    return (
        <div className='App'>
            <form onSubmit={handleSubmit}>
                <fieldset>
                    <h2>Sign Up</h2>
                    <div className='Field' >
                        <label>First Name<sup>*</sup>:</label>
                        <input type='text' placeholder='Enter FirstName' value={firstName} onChange={ (e) => { setFirstName(e.target.value) } } />
                        <p> FirstName : {firstName} </p>
                    </div>


                    <div className='Field' >
                        <label>LastName:</label>
                        <input type='text' placeholder='Enter LastName' value={lastName} onChange={ (e) => { setLastName(e.target.value) } } />
                        <p>LastName: {lastName} </p>
                    </div>

                    <div className='Field' >
                        <label>Email<sup>*</sup>:</label>
                        <input type='email' placeholder='Enter Email' value={email} onChange= { (e) => { setEmail(e.target.value) } } />
                        <p>Email: {email} </p>
                    </div>
                        
                    <div className='Field'>
                        <label> Password <sup>*</sup>: </label>
                        <input type='password' placeholder='Enter Password' value={password.value} onChange={ (e) => { setPassword({...password, value: e.target.value}) } } 
                        onBlur={ () => {setPassword({...password, isTouched: true})} } />
                        {password.isTouched && password.value.length < 8 ? (< PasswordErrorMessage />) : null}

                    </div>

                    <div className='Field' >
                        <label>Role<sup>*</sup>:</label>
                        <select value={role} onChange={ (e) => { setRole(e.target.value) } } >
                            <option value='role'>Role</option>
                            <option value='individual'>Individual</option>
                            <option value='organisation'>Organisation</option>
                        </select>
                    </div>
                    <div className='form-btn'>
                    <button type='submit' disabled={!isFormValid()} onClick={ () => console.log("Account Created") } >Create Account</button>
                    </div>
                </fieldset>

            </form>
        </div>
    )
}


export default App;