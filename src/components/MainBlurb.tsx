import React from 'react';
import styled from 'styled-components';

const Main = styled.div`
  display: flex;
  background-color: rgb(190, 190, 193, 0.5);
  width: 100vw;
  margin-left: calc(-50vw + 50%);
  margin-bottom: 1.45rem;

  .inner-blurb {
    margin: 0 auto;
    padding: 1.45rem 1.0875rem;
    width: 100%;
    max-width: 960px;
  }

  .header {
    color: rgb(70, 70, 70, 0.87);
  }
`;

interface IProps {
  className?: string;
  children: React.ReactNode;
}

export const MainBlurb: React.FC<IProps> = ({ className, children }) => {
  return (
    <Main className={className}>
      <div className="inner-blurb">{children}</div>
    </Main>
  );
};
