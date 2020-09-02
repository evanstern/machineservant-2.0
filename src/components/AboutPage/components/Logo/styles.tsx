import styled from '@emotion/styled';
import tw from 'twin.macro';

export const BigIcon = styled.div`
  ${tw`p-4`};
  width: 100%;
  height: 8rem;
`;

export const IconWrapper = styled.div`
  ${tw`relative`}
  height: 100%;

  > svg {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
  }
`;
