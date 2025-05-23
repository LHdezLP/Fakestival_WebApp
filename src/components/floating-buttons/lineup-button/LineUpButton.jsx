import { PlusCircleOutlined } from "@ant-design/icons";
import "./LineUpButton.css";
import { Link } from "react-router-dom";

function LineUpButton() {
  return (
    <>
      <div className="template">
        <Link to="/custom-lineup" className="button-link">
          <PlusCircleOutlined className="cross" />
        </Link>
      </div>
    </>
  );
}

export default LineUpButton;
