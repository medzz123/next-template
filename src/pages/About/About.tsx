import { Text } from './About.styles';

export default function About() {
  return (
    <div className="container">
      <main>
        <h1 className="title">About Page</h1>

        <Text as="h1" size="3">
          Styled text
        </Text>
      </main>
    </div>
  );
}
