const ParentComponent = ({ children }) => {
  return (
    <div>
      {children}
    </div>
  );
};

const App = () => {
  return (
    <ParentComponent>
      <ChildComponent1 />
      <ChildComponent2 />
    </ParentComponent>
  );
};
