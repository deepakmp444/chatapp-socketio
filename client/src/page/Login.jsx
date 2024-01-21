import { useState } from "react"
import { Card, InputGroup, Form, Button } from "react-bootstrap"
import UserNameIcon from "../icon/UserNameIcon"
import EmailIcon from "../icon/EmailIcon"
import KeyIcon from "../icon/keyIcon"

function Login() {
    const [isLogginBtnClicked, setIsLogginBtnClicked] = useState(false)

    const handleLogin = () => {
        setIsLogginBtnClicked(false)
    }
    const handleCreateAccount = () => {
        setIsLogginBtnClicked(true)
    }

    return (
        <div className="container">
            <div className="row" style={{ marginTop: "120px" }}>
                <div className="col-sm-4 offset-sm-4">
                    <Card>
                        <div className="p-4">
                            <h5 className="text-center">Chat with us for Login</h5>
                            <form className="mt-4">
                                {isLogginBtnClicked ? <InputGroup className="mb-3">
                                    <InputGroup.Text><UserNameIcon /></InputGroup.Text>
                                    <Form.Control
                                        placeholder="Username"
                                        aria-label="Username"
                                        aria-describedby="Username"
                                    />
                                </InputGroup> : null}

                                <InputGroup className="mb-3">
                                    <InputGroup.Text><EmailIcon /></InputGroup.Text>
                                    <Form.Control
                                        placeholder="Email"
                                        aria-label="Email"
                                        aria-describedby="Email"
                                    />
                                </InputGroup>
                                <InputGroup className="mb-3">
                                    <InputGroup.Text> <KeyIcon /> </InputGroup.Text>
                                    <Form.Control
                                        placeholder="Password"
                                        aria-label="Password"
                                        aria-describedby="Password"
                                    />
                                </InputGroup>
                                <div className="d-flex justify-content-between">
                                    <Button variant="light" onClick={handleCreateAccount}>Create account</Button>
                                    <Button variant="success" onClick={handleLogin}>Login</Button>
                                </div>
                            </form>
                        </div>

                        <div className="d-flex justify-content-center">
                            <Button variant="link">Forget password</Button>
                        </div>

                    </Card>
                </div>
            </div>
        </div>
    )
}

export default Login