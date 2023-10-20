import ModuleList from "../Modules/ModuleList";

function Home() {
  return (
    <div className="row">
      <div className="col-9">
        <h2>Home</h2>
        <ModuleList />
      </div>
      <div className="col-3">
        <h2>Status</h2>
      </div>
    </div>
    );
  }
  export default Home;