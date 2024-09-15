import { ChatContainer } from "./styles";
import { FaArrowRightLong } from "react-icons/fa6";
import { RiMenu5Line } from "react-icons/ri";
import { VscRobot } from "react-icons/vsc";
import { LiaEdit } from "react-icons/lia";

const ChatBox = () => {
  return (
    <ChatContainer>
      <h4 className="bg-primary heading-4">
        Virtual Dermatologist ChatBox🥼‍️
      </h4>
      <div className="chat-item">
        <div className="chats">
          <div className="fx-center robot-box">
            <div>
              <VscRobot size={49} />
            </div>
            <p>
              Hi there! I'm your virtual dermatologist. Feel free to ask me any
              questions about your skin health. Based on the photo and
              description of your symptoms, I'll use your information to provide
              personalized insights and recommendations. Let's get started!"
            </p>
          </div>

          <div className="user-box">
            <div />
            <div className="fx-center user-message">
              <div>
                <LiaEdit size={49} />
              </div>
              <p>
                What are some of the side effects of sylicidic acid on oily skin
                like mine
              </p>
            </div>
          </div>
        </div>
        <div className="chat-actions">
          <FaArrowRightLong className="arrow-icon" size={24} />
          <input
            type="text"
            name="message"
            placeholder="Type your skin concern for personalized advice!"
          />
          <RiMenu5Line className="menu-icon" size={24} />
        </div>
      </div>
    </ChatContainer>
  );
};

export default ChatBox;
