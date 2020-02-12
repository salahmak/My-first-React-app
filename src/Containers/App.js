import React, {Component} from 'react';
import Cardlist from '../Components/cardlist.js';
import SearchBox from '../Components/SearchBox.js';
import Scroll from '../Components/scroll.js'
import './app.css';


class app extends Component {

    constructor() {
        super();
        this.state = {
            robots: [],
            searchField: ''
        }
    }


    componentDidMount() {
        var proxyUrl = 'https://cors-anywhere.herokuapp.com/',
        targetUrl = 'https://luxuriant-football-juqyhav2re.glitch.me/'
        fetch(proxyUrl + targetUrl)
        .then(response => response.json())
        .then(users => {this.setState({robots: users})})
    }



    onSearchChange = (e) => {
        this.setState({searchField: e.target.value})
        
    }


    render() {

        let filteredRobots = this.state.robots.filter(robot => {
            return robot.name.toLowerCase().includes(this.state.searchField.toLowerCase());
        })

        if (this.state.robots.length === 0) {
            return (
                <div className='flex justify-center flex-column' style={{height:100 + 'vh'}}>
                    <div className="lds-dual-ring tc"></div>
                    <h2 className='white tc'>Loading</h2>
                </div>
                
            )
        }else {
            return (
                <div className='tc'>
                    <div className='header'>
                        <h1>Robot Friends</h1>
                        <SearchBox searchChange={this.onSearchChange}/>
                    </div>
                    
                    <Scroll>
                        <Cardlist robots={filteredRobots}/> 
                    </Scroll>
                     
                </div>
            
            ) 
        }

          
    }
}

export default app;





