import { UserOutlined } from "@ant-design/icons";
import { Form, Input, Button, Checkbox } from "antd";
import "./NavBar.css";
import React, { useRef, useState, useEffect } from "react";

function NavBar() {
  const [showForm, setShowForm] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false); 
  const [showOptions, setShowOptions] = useState(false);

  
  const formRef = useRef<HTMLDivElement>(null);
  const optionsRef = useRef<HTMLDivElement>(null);
  const iconRef = useRef<HTMLSpanElement>(null); 

  const onFinish = (values: any) => {
    console.log("Success:", values);
    setIsLoggedIn(true); 
    setShowForm(false);
    setShowOptions(true);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      const target = event.target as Node;

      if (
        formRef.current &&
        !formRef.current.contains(target) &&
        iconRef.current &&
        !iconRef.current.contains(target) &&
        showForm
      ) {
        setShowForm(false);
      }
      if (
        optionsRef.current &&
        !optionsRef.current.contains(target) &&
        iconRef.current &&
        !iconRef.current.contains(target) &&
        showOptions
      ) {
        setShowOptions(false);
      }
    }

    if (showForm || showOptions) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showForm, showOptions]);

  return (
    <nav
      className="navbar navbar-expand-lg bg-body-tertiary w-100 bg-dark"
      style={{ position: "fixed", padding: "0" }}
    >
      <div
        className="container-fluid d-flex align-items-center h-100"
        style={{
          backgroundColor: "black",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          padding: "0 10px",
        }}
      >
        <div
          className="logo d-flex align-items-center"
          style={{ textAlign: "center" }}
        >
          <a href="/home">
            <img
              src="/img/skull-logo.png"
              alt="Logo"
              style={{ height: "40px", margin: "2px" }}
            />
          </a>
          <span
            className="navbar-text"
            style={{
              fontSize: "30px",
              fontFamily: "MetalMania, sans-serif",
              lineHeight: "40px",
              color: "RGB(239, 176, 98)",
            }}
          >
            Fakestival
          </span>
        </div>

        <div
          className="d-flex align-items-center"
          style={{ gap: "10px", display: "flex", flexDirection: "row" }}
        >
          {/* Countdown */}
          <div
            className="countdown"
            style={{
              fontSize: "11px",
              fontFamily: "MetalMania, sans-serif",
              display: "flex",
              flexDirection: "row",
              gap: "10px",
              textAlign: "center",
            }}
          >
            <div>
              <span>224</span> days
            </div>
            <div>
              <span>15</span> hrs
            </div>
            <div>
              <span>9</span> mins
            </div>
          </div>

          
          <div className="icono" style={{ display: "flex", position: "relative" }}>
            <UserOutlined
              ref={iconRef} 
              style={{
                fontSize: "35px",
                color: "RGB(239, 176, 98)",
                marginBottom: "0.5rem",
                cursor: "pointer",
              }}
              onClick={() => {
                if (isLoggedIn) {
                  setShowOptions((prev) => !prev);
                  setShowForm(false);
                } else {
                  setShowForm((prev) => !prev);
                  setShowOptions(false);
                }
              }}
            />

            {showForm && !showOptions && (
              <div
                ref={formRef} 
                style={{
                  position: "absolute",
                  top: "45px",
                  right: "0",
                  background: "linear-gradient(to bottom, #3a415f 2%, #191e34 28%)",
                  padding: "20px",
                  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
                  borderRadius: "8px",
                  zIndex: 1000,
                  width: "300px",
                  fontFamily: "Oswald, sans-serif",
                }}
              >
                <Form
                  name="basic"
                  labelCol={{ span: 8 }}
                  wrapperCol={{ span: 16 }}
                  initialValues={{ remember: true }}
                  onFinish={onFinish}
                  onFinishFailed={onFinishFailed}
                  autoComplete="off"
                >
                  <Form.Item
                    label="Username"
                    name="username"
                    rules={[{ required: true, message: "Please input your username!" }]}
                  >
                    <Input />
                  </Form.Item>

                  <Form.Item
                    label="Password"
                    name="password"
                    rules={[{ required: true, message: "Please input your password!" }]}
                  >
                    <Input.Password />
                  </Form.Item>

                  <Form.Item name="remember" valuePropName="checked">
                    <Checkbox>Remember me</Checkbox>
                  </Form.Item>

                  <Form.Item>
                    <Button type="primary" htmlType="submit" style={{ width: "100%" }}>
                      Submit
                    </Button>
                  </Form.Item>
                </Form>
              </div>
            )}

            {showOptions && (
              <div
                ref={optionsRef} 
                style={{
                  position: "absolute",
                  top: "45px",
                  right: "0",
                  background: "#191e34",
                  padding: "20px",
                  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
                  borderRadius: "8px",
                  zIndex: 1000,
                  width: "300px",
                  fontFamily: "Oswald, sans-serif",
                  color: "#fff",
                }}
              >
                <p style={{ marginBottom: "1rem", fontSize: "18px" }}>¿Qué deseas hacer?</p>
                <Button
                  type="default"
                  style={{ width: "100%", marginBottom: "0.5rem" }}
                  onClick={() => {
                    console.log("Logout clicked");
                    setIsLoggedIn(false); 
                    setShowOptions(false);
                  }}
                >
                  Log out
                </Button>
                <Button
                  type="primary"
                  style={{ width: "100%" }}
                  onClick={() => {
                    window.location.href = "/saved-lineup";
                    console.log("Administrar calendario personalizado");
                    setShowOptions(false);
                  }}
                >
                  Administrar calendario personalizado
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;