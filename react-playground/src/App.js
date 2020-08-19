import React from "react";
import Tabs from "./Tabs";

const tabsProp = [
  {
    name: "First tab",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam exercitationem quos consectetur expedita consequatur. Fugit, sapiente aspernatur corporis velit, dolor eum reprehenderit provident ipsam, maiores incidunt repellat! Facilis, neque doloremque."
  },
  {
    name: "Second tab",
    content:
      "Laboriosam exercitationem quos consectetur expedita consequatur. Fugit, sapiente aspernatur corporis velit, dolor eum reprehenderit provident ipsam, maiores incidunt repellat! Facilis, neque doloremque. Lorem ipsum dolor sit amet consectetur adipisicing elit."
  },
  {
    name: "Third tab",
    content:
      "Fugit, sapiente aspernatur corporis velit, dolor eum reprehenderit provident ipsam, maiores incidunt repellat! Facilis, neque doloremque. Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam exercitationem quos consectetur expedita consequatur."
  }
];

class App extends React.Component {
  static defaultProps = { tabs: tabsProp };
  state = {
    currentTabIndex: 0
  };
  handleButtonClick(index) {
    this.setState({ currentTabIndex: index });
  }
  renderButtons() {
    const tabs = this.props.tabs.map((tab, index) => (
      <button key={index} onClick={() => this.handleButtonClick(index)}>
        {tab.name}
      </button>
    ));
    return <div className="tabs">{tabs}</div>;
  }
  renderContent() {
    const currentTab = this.props.tabs[this.state.currentTabIndex];
    return (
      <div className="content">
        <Tabs content={currentTab.content} />
      </div>
    );
  }
  render() {
    return (
      <div>
        {this.renderButtons()}
        {!!this.props.tabs.length > 0 && this.renderContent()}
      </div>
    );
  }
}

export default App;
