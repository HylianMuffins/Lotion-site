function Tab({title, text}) {
    return (
        <div className="tab">
          <h3 className="tab-title">{title}</h3>
          <p className="tab-text">{text}</p>
        </div>
    );
}

export default Tab;