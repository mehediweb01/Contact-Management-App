import AddAccount from "./components/AddAccount";
import ContactManagement from "./components/ContactManagement";

function App() {
  return (
    <>
      <div className="flex justify-around mt-5 gap-3">
        <ContactManagement />
        <AddAccount />     
      </div>
    </>
  );
}

export default App;
