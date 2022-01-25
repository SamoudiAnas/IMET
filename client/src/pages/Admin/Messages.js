import React, { useState, useEffect } from "react";
import Message from "../../components/Message";
import axios from "axios";
import styled from "styled-components";

function Messages() {
  const [isLoading, setIsLoading] = useState(true);
  const [messages, setMessages] = useState([]);

  const loadMessage = async () => {
    let result = await axios.post(
      "http://vin-anna.com/server/graphql",
      {
        query: `
      query {
        messages{
          _id
          fullName
          email
          message
          createdAt
        }
      }
    `,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    if (result.status === 200) {
      setMessages(result.data.data.messages);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    loadMessage();
  }, []);
  return (
    <Wrapper>
      <div className="flex">
        <h3>Messages</h3>
        <button className="reload" onClick={loadMessage}>
          Reload
        </button>
      </div>
      <hr />
      {messages.length !== 0 ? (
        messages.map((message) => <Message message={message} />)
      ) : (
        <h1>You have 0 message!</h1>
      )}
    </Wrapper>
  );
}

export default Messages;

const Wrapper = styled.div`
  padding: 2rem;
  hr {
    opacity: 0.5;
    margin: 1rem 0 3rem;
  }

  .flex {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;
