import React, { useState } from "react";

function Suscriptions() {
  const [isLoading, setIsLoading] = useState(true);
  const [messages, setMessages] = useState([]);

  const loadMessage = async () => {
    let result = await axios.post(
      "https://samoudianas.xyz/node_api/graphql",
      {
        query: `
      query {
        messages{
          _id
          fullName
          email
          phone
          message
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
      <h3>Messages</h3>
      <hr />
      {messages.map((message) => (
        <Message message={message} />
      ))}
    </Wrapper>
  );
}

export default Suscriptions;

const Wrapper = styled.div`
  padding: 2rem;
  hr {
    opacity: 0.5;
    margin: 1rem 0 3rem;
  }
`;
