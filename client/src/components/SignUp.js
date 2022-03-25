import React,{useRef} from "react";
import {Form ,Button ,Card } from 'react-bootstrap'
export default function SignUp() {
    const emailRef= useRef()
    const passwordRef= useRef()
    const passwordconfirmRef= useRef()

return (
    <div>
        <Card>
           <Card.Body>
<h2 className="text-center mb-4">

   Sign Up 
</h2>
<Form>
<Form.Group id='email'>
<Form.Label type='email' required >
    Email
</Form.Label>

<Form.Control type="email" ref={emailRef} required/>


</Form.Group>
<Form.Group id='password'>
<Form.Label type='password' required >
    Password
</Form.Label>
<Form.Control type='password' ref={passwordRef} required />
</Form.Group>
<Form.Group id='confirm-password'>
<Form.Label type='confirmpassword' required >
    Confirm Password
</Form.Label>
<Form.Control type='password' ref={passwordconfirmRef} required />
</Form.Group>
<Button className="w-100" type="submit"> Sign Up</Button>
</Form>
           </Card.Body>
        </Card>
        <div className="w-100 text-center mt2">
Already have an account ? log In
            </div>
    </div>
)
}