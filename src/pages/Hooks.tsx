import { Link } from "react-router-dom";
import Button from "../components/layout/Button";
import TextHeading from "../components/layout/TextHeading";
import UseContextComponent from "../components/UseContextComponent";
import UseEffectComponent from "../components/UseEffectComponent";
import UseReducerComponent from "../components/UseReducerComponent";
import UseStateComponent from "../components/useStateComponent";

export default function Hooks() {
  return (
    <main className="max-w-sm mx-auto pt-10">
      <section>
        <Link to="/">
          <Button text={"Home ←"} />
        </Link>

        <TextHeading text="useState" />
        <UseStateComponent />
        <TextHeading text="useEffect" />
        <UseEffectComponent />
        <TextHeading text="useContext" />
        <UseContextComponent />
        <TextHeading text="useReducer" />
        <UseReducerComponent />
      </section>
    </main>
  );
}
