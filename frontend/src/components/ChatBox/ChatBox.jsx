import { useState, useEffect } from 'react';
import { ChatContainer } from './styles';
import { FaArrowRightLong } from 'react-icons/fa6';
import { VscRobot } from 'react-icons/vsc';
import { LiaEdit } from 'react-icons/lia';
import { MdSend } from 'react-icons/md';
import { BiLoaderCircle } from 'react-icons/bi';
import httpClient from '@/api/axios';
import { toast } from 'react-toastify';
import { DefaultChatHistory } from '@/constants/gemini';
import Markdown from 'react-markdown';

const scrollToBottomChat = () => {
  const chatMessages = document.querySelector('.chats');
  const scrollHeight = chatMessages.scrollHeight;
  chatMessages.scrollTop = scrollHeight;
};

const ChatBox = () => {
  const [text, setText] = useState('');
  const [loading, setLoading] = useState(false);
  const [history, setHistory] = useState([]);

  useEffect(() => {
    const storedChatHistory = JSON.parse(localStorage.getItem('chatHistory'));
    if (storedChatHistory) {
      setHistory(storedChatHistory);
    }
  }, []);

  useEffect(() => {
    scrollToBottomChat();
  }, [history]);

  const handleChatSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    // Validate user input
    if (!text.trim()) {
      setLoading(false);
      return;
    }

    // Add user message to chat history
    let updatedHistory = [
      ...history,
      {
        id: history.length + 1,
        role: 'user',
        parts: [{ text }],
      },
    ];
    setHistory(updatedHistory);
    setText(''); // Clear input field

    // Get stored user data
    const storedUserData = JSON.parse(localStorage.getItem('userData'));
    const storedReportData = JSON.parse(localStorage.getItem('reportData'));
    // Remove imagePreview from storedUserData
    delete storedUserData.imagePreview;

    const payload = {
      message: text,
      history: history,
      userData: storedUserData,
      reportData: storedReportData,
    };

    try {
      const response = await httpClient.post('/chat', payload);
      const { data, status } = response;

      if (status === 200) {
        const newAIChat = {
          id: history.length + 2,
          role: 'model',
          parts: [{ text: data.result }],
        };
        updatedHistory = [...updatedHistory, newAIChat];
        setHistory(updatedHistory);
        localStorage.setItem('chatHistory', JSON.stringify(updatedHistory));
      }
    } catch (error) {
      console.log(error);
      toast.error('An error occurred. Please try again.');
      // Remove last user message & restore text
      updatedHistory.pop();
      setHistory(updatedHistory);
      setText(text);
    } finally {
      setLoading(false);
    }
  };

  return (
    <ChatContainer>
      <h4 className='bg-primary heading-4'>
        Virtual Dermatologist ChatBox🥼‍️
      </h4>

      <div className='chat-item'>
        <div className='chats'>
          {DefaultChatHistory.map((item) => (
            <MessageCard
              key={item.id}
              message={item.parts[0].text}
              role={item.role}
            />
          ))}

          {history.map((item) => (
            <MessageCard
              key={item.id}
              message={item.parts[0].text}
              role={item.role}
            />
          ))}
        </div>

        <form onSubmit={handleChatSubmit} className='chat-actions'>
          <FaArrowRightLong className='arrow-icon' size={24} />
          <input
            type='text'
            name='message'
            value={text}
            onChange={(e) => setText(e.target.value)}
            required
            placeholder='Type your skin concern for personalized advice!'
          />
          <button>
            {loading ? (
              <BiLoaderCircle
                color='#9c9c9c'
                className='menu-icon animate-spin'
                size={26}
              />
            ) : (
              <MdSend className='menu-icon' size={24} />
            )}
          </button>
        </form>
      </div>
    </ChatContainer>
  );
};

const MessageCard = ({ message, role }) => {
  const isBot = role === 'model';
  return (
    <div className={`fx-center ${role === 'model' ? 'robot-box' : 'user-box'}`}>
      {isBot && <VscRobot className='hidden md:block' size={28} />}
      <div className='message'>
        {isBot ? <Markdown>{message}</Markdown> : message}
      </div>
    </div>
  );
};

export default ChatBox;
