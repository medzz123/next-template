import Button from '@components/Button';
import Text from '@components/Text';
import { useRouter } from 'next/router';
import React from 'react';

export default function Home() {
  const router = useRouter();

  return (
    <div className="container">
      <main>
        <Text variant="h1">Hello new app</Text>

        <Text>Styled text</Text>

        <Button
          onClick={() => {
            router.push('/about');
          }}
        >
          About Page
        </Button>
      </main>
    </div>
  );
}
