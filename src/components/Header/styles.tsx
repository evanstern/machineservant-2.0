import tw from 'twin.macro';
import styled from '@emotion/styled';

export const Content = styled.header`
  ${tw`p-6 bg-gray-900`};
`;

export const Inner = styled.nav`
  ${tw`container flex flex-wrap items-center justify-between mx-auto`};
`;

export const SiteTitle = styled.h1`
  ${tw`flex items-center flex-shrink-0 mr-10 text-3xl font-bold text-white`};

  > a {
    ${tw`hover:text-white`};
    text-decoration: none;
  }
`;

export const SiteLinks = styled.div`
  ${tw`flex-grow block w-full text-2xl text-white lg:flex lg:items-center lg:w-auto`};

  a {
    ${tw`block mt-4 lg:inline-block hover:text-white lg:mt-0`};
  }
`;
