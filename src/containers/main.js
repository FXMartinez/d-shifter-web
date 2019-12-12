import React, { Component } from 'react';
import Navigation from '../components/navigation';

class Main extends Component {
    
    state = {  }
    
    render() { 
        return ( 
            <div className="main-wrapper">
                <div className='top-bar'>
                    <div className="nav-section left">
                        <img src="https://www.mtsac.edu/asac/images/temp_logo_testing.png" class="ui mini image" />
                        {/* <div class="ui hidden divider"></div> */}
                        {/* <div class="ui banner test ad" data-text="Banner"></div> */}
                    </div>
                    <div className="nav-section right">
                       <span>hi there</span>
                       <span>hi links</span>
                    </div>
                </div>
                <Navigation />
            </div>
         );
    }
}
 
export default Main;