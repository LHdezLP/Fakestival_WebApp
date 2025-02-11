/* eslint-disable react/prop-types */
import "./SignIn.css";

function SignIn() {
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
        Sign In
      </h3>
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
      <div className="mb-3">
        <div className="custom-control custom-checkbox">
          <input
            type="checkbox"
            className="custom-control-input"
            id="customCheck1"
          />
          <label
            className="custom-control-label"
            htmlFor="customCheck1"
            style={{
              fontFamily: "Oswald, sans-serif",
              color: "RGB(239, 176, 98)",
            }}
          >
            Remember me
          </label>
        </div>
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
          Submit
        </button>
      </div>
      <p
        className="forgot-password text-right"
        style={{
          fontFamily: "Oswald, sans-serif",
          color: "RGB(239, 176, 98)",
        }}
      >
        <a href="#">Forgot password?</a>
      </p>
      <p
        className="not-registered text-right"
        style={{
          fontFamily: "Oswald, sans-serif",
          color: "RGB(239, 176, 98)",
        }}
      >
         <a href="/sign-up">Not registered?</a>
      </p>
    </form>
  );
}

export default SignIn;
