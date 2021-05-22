import Button from '@components/Button';
import Text from '@components/Text';
import { NextPage } from 'next';
import { useRouter } from 'next/router';
import React from 'react';

import { HomeContainer, HomeContent } from './Home.styles';

const Home: NextPage = () => {
  const router = useRouter();

  return (
    <HomeContainer>
      <HomeContent>
        <Text variant="h1">Home Page</Text>

        <Button
          onClick={() => {
            router.push('/about');
          }}
        >
          About
        </Button>
      </HomeContent>
    </HomeContainer>
  );
};

export default Home;
