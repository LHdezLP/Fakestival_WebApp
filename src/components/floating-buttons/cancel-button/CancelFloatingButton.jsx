import { CloseCircleOutlined } from "@ant-design/icons";
import "./CancelFloatingButton.css";

function CancelFloatingButtonton() {
  return (
    <>
      <div className="cancelbutton-container">
        <div className="icon" id="cancel-icon">
          <CloseCircleOutlined className="cancel" />
        </div>
      </div>
    </>
  );
}

export default CancelFloatingButtonton;
