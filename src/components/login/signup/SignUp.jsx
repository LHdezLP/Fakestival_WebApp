/* eslint-disable react/prop-types */
import "./SignUp.css";

function SignUp() {
  return (
    <form>
      <h3
        style={{
          textAlign: "center",
          fontFamily: "Metal-Mania, sans-serif",
          fontWeight: "bold",
          fontSize: "28px",
          color: "RGB(239, 176, 98)",
        }}
      >
        Sign Up
      </h3>
      <div className="mb-3">
        <label
          style={{
            fontFamily: "Oswald, sans-serif",
            fontWeight: "bold",
            color: "RGB(239, 176, 98)",
          }}
        >
          First name
        </label>
        <input
          type="text"
          className="form-control"
          placeholder="First name"
          style={{
            border: "4px solid RGB(239, 176, 98)",
            padding: "5px",
            borderRadius: "5px",
          }}
        />
      </div>
      <div className="mb-3">
        <label
          style={{
            fontFamily: "Oswald, sans-serif",
            fontWeight: "bold",
            color: "RGB(239, 176, 98)",
          }}
        >
          Last name
        </label>
        <input
          type="text"
          className="form-control"
          placeholder="Last name"
          style={{
            border: "4px solid RGB(239, 176, 98)",
            padding: "5px",
            borderRadius: "5px",
          }}
        />
      </div>
      <div className="mb-3">
        <label
          style={{
            fontFamily: "Oswald, sans-serif",
            fontWeight: "bold",
            color: "RGB(239, 176, 98)",
          }}
        >
          Email address
        </label>
        <input
          type="email"
          className="form-control"
          placeholder="Enter email"
          style={{
            border: "4px solid RGB(239, 176, 98)",
            padding: "5px",
            borderRadius: "5px",
          }}
        />
      </div>
      <div className="mb-3">
        <label
          style={{
            fontFamily: "Oswald, sans-serif",
            fontWeight: "bold",
            color: "RGB(239, 176, 98)",
          }}
        >
          Password
        </label>
        <input
          type="password"
          className="form-control"
          placeholder="Enter password"
          style={{
            border: "4px solid RGB(239, 176, 98)",
            padding: "5px",
            borderRadius: "5px",
          }}
        />
      </div>
      <div className="d-grid">
        <button
          type="submit"
          className="btn btn-primary"
          style={{
            backgroundColor: "RGB(239, 176, 98)",
            borderColor: "RGB(239, 176, 98)",
            color: "white",
            fontWeight: "bold",
          }}
        >
          Sign Up
        </button>
      </div>
      <p
        className="forgot-password text-right"
        style={{
          fontFamily: "Oswald, sans-serif",
          color: "RGB(239, 176, 98)",
        }}
      >
        Already registered <a href="/sign-in">sign in?</a>
      </p>
    </form>
  );
}

export default SignUp;
