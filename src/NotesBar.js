import Tab from "./Tab";

function NotesBar() {
    return (
      <div id="notes">
        <div id="notes-header">
            <h2 id="notes-title">Notes</h2>
            <h2 id="add-note">+</h2>
        </div>
        <Tab title="test" text="foo" />
        <Tab title="test2" text="bar" />
      </div>
    );
  }
  
  export default NotesBar;