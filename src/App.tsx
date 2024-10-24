import { Button } from "./Button";

const App = () => {
  return (
    <div className="flex justify-center items-center flex-col gap-3 px-6 w-ful h-96 bg-green-100">
      <h1 className="text-4xl">Listagem de componentes</h1>
      <p className="text-center mb-2">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt
        necessitatibus earum amet in natus ea ipsa cupiditate iusto nisi,
        voluptatem corrupti est corporis omnis. Unde aliquid id maiores quis
        nobis.
      </p>
      <Button onClick={() => (window.location.pathname = "/docs")}>
        Storybook
      </Button>
    </div>
  );
};

export default App;
