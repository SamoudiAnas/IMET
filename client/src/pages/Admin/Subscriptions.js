import React, { useState, useEffect } from "react";
import Message from "../../components/Message";
import axios from "axios";
import styled from "styled-components";

function Subscriptions() {
  const [isLoading, setIsLoading] = useState(true);
  const [subscriptions, setSubscriptions] = useState([]);

  const loadSubscriptions = async () => {
    let result = await axios.post(
      "http://vin-anna.com/server/graphql",
      {
        query: `
      query {
        subscriptions{
          email
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
      setSubscriptions(result.data.data.subscriptions);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    loadSubscriptions();
  }, []);
  return (
    <Wrapper>
      <div className="flex">
        <h3>Subscriptions</h3>
        <button className="reload" onClick={loadSubscriptions}>
          Reload
        </button>
      </div>
      <hr />
      {subscriptions.length !== 0 ? (
        subscriptions.map((subscription) => <div>{subscription.email}</div>)
      ) : (
        <h1>You have 0 subscription!</h1>
      )}
    </Wrapper>
  );
}

export default Subscriptions;

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
