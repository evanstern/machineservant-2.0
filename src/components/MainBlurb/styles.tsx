import styled from '@emotion/styled';
import tw from 'twin.macro';

export const Content = styled.div`
  ${tw`flex w-screen mb-10 bg-gray-500 bg-opacity-50`};

  margin-left: calc(-50vw + 50%);

  .header {
    ${tw`text-gray-700 text-opacity-75`};
  }
`;

export const Inner = styled.div`
  ${tw`container w-full px-4 py-5 m-auto`};
`;

export const Grid = styled.div`
  ${tw`grid grid-cols-1 gap-4 lg:grid-cols-3`};
`;

export const ImageCell = styled.div`
  ${tw`lg:col-span-1`};
`;

export const ContentCell = styled.div`
  ${tw`flex items-center justify-center lg:col-span-2`};
`;
