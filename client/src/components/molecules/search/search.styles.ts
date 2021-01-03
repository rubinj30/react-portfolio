import styled from 'styled-components';

export const SearchStyled = styled.div`
  width: 90%;
  display: flex;
  justify-content: center;
  padding-top: 50px;
  .innerWrapper {
    border-radius: 24px;
    max-width: 484px;
    width: 100%;
  }

  .results-not-showing:not(:hover) {
    border: 1px solid #dfe1e5;
    box-shadow: none;
  }
  .results-not-showing:hover,
  .results-not-showing:focus,
  .results-not-showing:active {
    border: 1px solid #dfe1e5;
    box-shadow: 0 1px 6px 0 rgba(32, 33, 36, 0.28);
  }

  .results-showing {
    border: 0;
    box-shadow: none;
  }
`;
