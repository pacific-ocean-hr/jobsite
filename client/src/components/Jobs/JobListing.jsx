/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable object-curly-newline */
/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/button-has-type */
import moment from 'moment';
import React from 'react';
import styled from 'styled-components';

const JobListing = ({
  listing,
  index,
  setCurrentJob,
  currentJobIndex,
  user,
}) => {
  const [hovered, setHovered] = useState(false);
  const [textHovered, setTextHovered] = useState(false);
  const toggleHovered = () => {
    setHovered(!hovered);
  };
  const toggleTextHovered = () => {
    setTextHovered(!textHovered);
  };

  return (
    <Listing
      className="card"
      onClick={() => setCurrentJob(index)}
      onMouseEnter={toggleTextHovered}
      onMouseLeave={toggleTextHovered}
      style={{
        color: `${textHovered || currentJobIndex === index ? 'black' : 'gray'}`,
        border: `${
          currentJobIndex === index ? '3px solid #799496' : 'solid thin #ACC196'
        }`,
      }}
    >
      <h3>
        <img
          src="../assets/Novartis.png"
          style={{ maxHeight: '40px', maxWidth: '40px' }}
        />
        &nbsp;&nbsp;{listing.company_name}: {listing.title}
      </h3>
      <h6>
        Posted {moment(listing.publication_date).fromNow()}
        <a href={listing.url} target="_blank" rel="noreferrer">
          <button
            className="mainButton"
            onMouseEnter={toggleHovered}
            onMouseLeave={toggleHovered}
            style={{
              transform: `${hovered ? 'scale(1.15, 1.15)' : 'scale(1, 1)'}`,
            }}
          >
            Apply
          </button>
        </a>
      </h6>
    </Listing>
  );
};

const Listing = styled.div`
  border: ${(props) => props.borderColor};
  color: ${({ theme }) => theme.color.purple};
  border-radius: 6px;
  display: flex;
  flex-direction: row;
  &:hover {
    color: black;
  }
  P {
    margin: 3px;
  }
  img {
    height: 50px;
  }
`;

const ButtonFooter = styled.div`
  align-items: end;
  display: flex;
`;

const JobTitle = styled.p`
  font-size: 16px;
  font-weight: 600;
`;

const CompanyName = styled.p`

`;

const JobInfo = styled.div`
  align-items: center;
  display: flex;
`;

const DatePosted = styled.p`
  flex: 1;
  margin: 0;
`;

export default JobListing;
