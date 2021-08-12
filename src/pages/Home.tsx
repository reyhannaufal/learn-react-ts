/* eslint-disable @typescript-eslint/no-unused-vars */

import { Link } from "react-router-dom";
import Button from "../components/layout/Button";

//conventional props
function Heading({ title }: { title: string }) {
  return <h1>{title}</h1>;
}

//container class
function HeadingWithContent({
  children,
}: {
  children: React.ReactNode;
}): React.ReactElement | null {
  return <div>{children}</div>;
}

const defaultContainerProps = {
  heading: <strong>My Heading</strong>,
};
//default props
type ContainerProps = {
  children: React.ReactNode;
} & typeof defaultContainerProps;
function Container({ children, heading }: ContainerProps): React.ReactElement {
  return (
    <section className="bg-yellow-200 text-center rounded-3xl mt-10 py-10">
      <h1>{heading}</h1>
      {children}
    </section>
  );
}
Container.defaultProps = defaultContainerProps;

export default function Home() {
  return (
    <main
      className="max-w-sm mx-auto pt-10
    "
    >
      <Link to="/hooks">
        <Button text={"Hooks →"} />
      </Link>
      <Container>
        <p>My content</p>
      </Container>
    </main>
  );
}
