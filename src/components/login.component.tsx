import { useState } from 'react'
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import AuthService from "../services/auth.service";
import { useNavigate } from "react-router-dom";

const Login = (props: any) => {
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState("");
    let navigate = useNavigate();

    function validationSchema() {
        return Yup.object().shape({
            email: Yup.string().required("This field is required!"),
            password: Yup.string().required("This field is required!"),
        });
    }  
    
    function handleLogin(formValue: { email: string; password: string }) {
        const { email, password } = formValue;
    
        setMessage("");
        setLoading(true);

        setTimeout(() => {
            AuthService.login(email, password).then(
                () => {
                    navigate("/profile", { replace: true });
                    window.location.reload();
                },
                error => {
                    const resMessage =
                    (error.response &&
                        error.response.data &&
                        error.response.data.message) ||
                    error.message ||
                    error.toString();
            
                    setLoading(false);
                    setMessage(resMessage);
                }
            );
        }, 1000)
    }

    const initialValues = {
        email: "",
        password: "",
    };

    return (
        <div className="col-md-12">
            <div className="card card-container">
            <img
                src="//ssl.gstatic.com/accounts/ui/avatar_2x.png"
                alt="profile-img"
                className="profile-img-card"
            />

            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={handleLogin}
            >
                <Form>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <Field name="email" type="text" className="form-control" />
                    <ErrorMessage
                    name="email"
                    component="div"
                    className="alert alert-danger"
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <Field name="password" type="password" className="form-control" />
                    <ErrorMessage
                    name="password"
                    component="div"
                    className="alert alert-danger"
                    />
                </div>

                <div className="d-grid gap-2">
                    <button type="submit" className="btn btn-primary mt-2" disabled={loading}>
                    {loading && (
                        <span className="spinner-border spinner-border-sm me-2"></span>
                    )}
                    <span>Login</span>
                    </button>
                </div>

                {message && (
                    <div className="form-group">
                    <div className="alert alert-danger" role="alert">
                        {message}
                    </div>
                    </div>
                )}
                </Form>
            </Formik>
            </div>
        </div>
    );
}
export default Login;
// import { Component } from "react";
// import { Formik, Field, Form, ErrorMessage } from "formik";
// import * as Yup from "yup";
// // import { useNavigate } from "react-router-dom";

// import AuthService from "../services/auth.service";

// type Props = {};

// type State = {
//     email: string,
//     password: string,
//     loading: boolean,
//     message: string
// };

// export default class Login extends Component<Props, State> {
//     constructor(props: Props) {
//         super(props);
//         this.handleLogin = this.handleLogin.bind(this);
    
//         this.state = {
//             email: "",
//           password: "",
//           loading: false,
//           message: ""
//         };
//     }

//     validationSchema() {
//         return Yup.object().shape({
//             email: Yup.string().required("This field is required!"),
//             password: Yup.string().required("This field is required!"),
//         });
//     }      

//     handleLogin(formValue: { email: string; password: string }) {
//         const { email, password } = formValue;

//         this.setState({
//           message: "",
//           loading: true
//         });

//         setTimeout(() => {
//             AuthService.login(email, password).then(
//                 () => {
//                 //   this.props.history.push("/profile");
//                 //   window.location.reload();
//                 },
//                 error => {
//                   const resMessage =
//                     (error.response &&
//                       error.response.data &&
//                       error.response.data.message) ||
//                     error.message ||
//                     error.toString();
          
//                   this.setState({
//                     loading: false,
//                     message: resMessage
//                   });
//                 }
//             );
//           }, 1000)
//     }

//     render() {
//         const { loading, message } = this.state;

//         const initialValues = {
//             email: "",
//             password: "",
//         };

//         return (
//         <div className="col-md-12">
//             <div className="card card-container">
//             <img
//                 src="//ssl.gstatic.com/accounts/ui/avatar_2x.png"
//                 alt="profile-img"
//                 className="profile-img-card"
//             />

//             <Formik
//                 initialValues={initialValues}
//                 validationSchema={this.validationSchema}
//                 onSubmit={this.handleLogin}
//             >
//                 <Form>
//                 <div className="form-group">
//                     <label htmlFor="email">Email</label>
//                     <Field name="email" type="text" className="form-control" />
//                     <ErrorMessage
//                     name="email"
//                     component="div"
//                     className="alert alert-danger"
//                     />
//                 </div>

//                 <div className="form-group">
//                     <label htmlFor="password">Password</label>
//                     <Field name="password" type="password" className="form-control" />
//                     <ErrorMessage
//                     name="password"
//                     component="div"
//                     className="alert alert-danger"
//                     />
//                 </div>

//                 <div className="d-grid gap-2">
//                     <button type="submit" className="btn btn-primary mt-2" disabled={loading}>
//                     {loading && (
//                         <span className="spinner-border spinner-border-sm"></span>
//                     )}
//                     <span>Login</span>
//                     </button>
//                 </div>

//                 {message && (
//                     <div className="form-group">
//                     <div className="alert alert-danger" role="alert">
//                         {message}
//                     </div>
//                     </div>
//                 )}
//                 </Form>
//             </Formik>
//             </div>
//         </div>
//         );
//     }
// }