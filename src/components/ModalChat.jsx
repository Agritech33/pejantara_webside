import { useState } from "react";

const ModalChat = () => {
  const [messages, setMessages] = useState([]);
  const [userInput, setUserInput] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(false); // State untuk loading

  const handleInputChange = (e) => {
    setUserInput(e.target.value);
  };

  const handleSendMessage = async () => {
    if (!userInput.trim()) return;

    // Add user message to chat
    const newMessages = [...messages, { sender: "user", message: userInput }];
    setMessages(newMessages);
    setUserInput(""); // Clear input field
    setLoading(true); // Set loading to true when sending message

    // Send user message to AI
    try {
      const response = await fetch(
        "https://waste-chatbot.1pilinzxv4dz.us-south.codeengine.appdomain.cloud/chat",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ message: userInput }),
        }
      );
      const data = await response.json();

      // Add AI response to chat
      setMessages([...newMessages, { sender: "ai", message: data.response }]);
    } catch (error) {
      console.error("Error fetching AI response:", error);
    } finally {
      setLoading(false); // Set loading to false after receiving response
    }
  };

  return (
    <div>
      <button
        onClick={() => setIsOpen(true)}
        className="btn btn-primary fixed bottom-4 right-4 z-50"
      >
        Chat AI
      </button>

      {isOpen && (
        <div className="fixed inset-0 flex justify-center items-center z-50">
          <div className="modal modal-open">
            <div className="modal-box max-w-4xl w-full rounded-lg shadow-lg p-6">
              <h2 className="text-center text-xl font-semibold mb-4">
                Chat with AI
              </h2>
              <div className="chat h-96 overflow-auto mb-4 p-2 border border-white rounded-lg flex flex-col">
                {messages.map((msg, index) => (
                  <div
                    key={index}
                    className={`chat ${
                      msg.sender === "ai" ? "chat-start" : "chat-end"
                    }`}
                  >
                    <div className="chat-bubble p-3 bg-indigo-600 text-white rounded-lg shadow-md">
                      {msg.message}
                    </div>
                  </div>
                ))}

                {/* Menampilkan indikator loading jika sedang menunggu response AI */}
                {loading && (
                  <div className="chat chat-start">
                    <div className="chat-bubble p-3 bg-indigo-600 text-white rounded-lg shadow-md">
                      <span className="loading loading-dots loading-sm"></span>
                    </div>
                  </div>
                )}
              </div>

              <div className="flex items-center space-x-2 w-full justify-end">
                <input
                  type="text"
                  placeholder="Type here"
                  className="input input-bordered w-full max-w-xs"
                  value={userInput}
                  onChange={handleInputChange}
                />
                <button className="btn btn-primary" onClick={handleSendMessage}>
                  Send
                </button>
              </div>

              <div className="modal-action mt-4">
                <button
                  className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
                  onClick={() => setIsOpen(false)}
                >
                  ✕
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ModalChat;
