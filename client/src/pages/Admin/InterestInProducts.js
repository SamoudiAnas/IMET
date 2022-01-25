import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";

function InterestInProducts() {
  const [data, setdata] = useState([]);

  const loadData = async () => {
    let result = await axios.post(
      "http://vin-anna.com/server/graphql",
      {
        query: `
      query {
        items{
          _id
          name
          interestedPeople
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
      setdata(result.data.data.items);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <Wrapper>
      <div className="flex">
        <h3>Interest</h3>
        <button className="reload" onClick={loadData}>
          Reload
        </button>
      </div>

      <hr />

      {data.length !== 0 ? (
        data.map((item) => (
          <div className="info">
            <div className="flex">
              <h3>{item.name}</h3>
              <p>{item.interestedPeople.length} interested peoples</p>
            </div>
            {item.interestedPeople.map((email) => (
              <p className="email">{email}</p>
            ))}
            <hr />
          </div>
        ))
      ) : (
        <h1>Try to reload the data!</h1>
      )}
    </Wrapper>
  );
}

export default InterestInProducts;

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
  .info {
    background-color: #eee;
    padding: 1rem;
    margin: 2rem 0;
  }

  .email {
    margin: 1rem;
  }
`;
