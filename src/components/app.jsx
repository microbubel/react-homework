import 'material-design-lite/dist/material.css';
import 'material-design-lite/dist/material.blue-green.min.css';
import 'material-design-lite';

import Header from './header/header';
import Footer from './footer/footer';
import Body from './body/body';

import './styles/defaults.scss';

class App extends React.Component {

    constructor(props) {
        super(props);
        this.updateShowActive = this.updateShowActive.bind(this);
        this.updateSearch = this.updateSearch.bind(this);
    }

    updateShowActive(isActive) {
        this.body.updateShowActive(isActive);
    }

    updateSearch(search) {
        this.body.updateSearch(search);
    }

    render() {
        return <div className="mdl-layout mdl-js-layout mdl-layout--fixed-header">
                <Header updateShowActive={this.updateShowActive} updateSearch={this.updateSearch} />
                <Body ref={body => this.body = body} />
                <Footer/>
            </div>;
    }
}

export default App;
