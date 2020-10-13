import styled from '@emotion/styled';
import tw from 'twin.macro';

export const BlogPostContainer = styled.div`
  ${tw`text-xl text-gray-800`};

  font-family: 'Inter', sans-serif;

  h1 {
    ${tw`mb-6 text-4xl font-bold text-center underline`};
  }

  h2 {
    ${tw`mb-6 text-3xl font-bold`};
  }

  h3 {
    ${tw`mb-4 text-2xl font-bold`};
  }

  h4 {
    ${tw`mb-4 text-xl font-bold`};
  }

  h5 {
    ${tw`mb-4 text-lg font-bold`};
  }

  h6 {
    ${tw`mb-4 font-bold`};
  }

  p {
    ${tw`my-4 leading-relaxed`};
  }

  ul {
    ${tw`pl-5 mb-4 list-disc`}

    > li {
      ${tw`mb-4`}
    }
  }
`;

export const BlogPostContent = styled.div`
  ${tw`py-4 bg-white bg-opacity-75 rounded shadow`};
`;

export const InnerContent = styled.div`
  ${tw`px-4 mb-2 sm:px-6`}
`;

export const Pre = styled.pre`
  ${tw`p-4 overflow-x-scroll border border-gray-400 shadow-lg`};
`;
