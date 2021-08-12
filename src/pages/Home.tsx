import TextHeading from "../components/layout/TextHeading";
import UseContextComponent from "../components/UseContextComponent";
import UseEffectComponent from "../components/UseEffectComponent";
import UseReducerComponent from "../components/UseReducerComponent";
import UseStateComponent from "../components/useStateComponent";

export default function Home() {
  return (
    <main className="max-w-sm mx-auto">
      <section>
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
