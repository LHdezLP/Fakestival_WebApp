import { PlusCircleOutlined } from "@ant-design/icons";
import "./AddFloatingButton.css";

function AddFloatingButtonton() {
  return (
    <>
      <div className="addbutton-container">
        <div className="icon" id="add-icon">
          <PlusCircleOutlined className="add" />
        </div>
      </div>
    </>
  );
}

export default AddFloatingButtonton;
