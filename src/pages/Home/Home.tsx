import Head from "next/head";
import { Text } from "./Home.styles";

export default function Home() {
  return (
    <div className="container">
      <main>
        <h1 className="title">Hello new app</h1>

        <Text as="h1" size="3">
          Styled text
        </Text>
      </main>
    </div>
  );
}
