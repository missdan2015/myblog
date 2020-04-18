import React, { Component } from 'react';
import './index.less';

export default class index extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showBackTop: false
        }
    }

    componentDidMount() {
        window.addEventListener('scroll', () => {
            let scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
            if (scrollTop > 100) {
                this.setState({
                    showBackTop: true
                })
            } else {
                this.setState({
                    showBackTop: false
                })
            }
        })
    }

    goTop = () => {
        let scrollToTop = window.setInterval(function () {
            let pos = window.pageYOffset;
            if (pos > 0) {
                window.scrollTo(0, pos - 20); // how far to scroll on each step
            } else {
                window.clearInterval(scrollToTop);
            }
        }, 2);
    }

    render() {
        return (
            <div>
                {this.state.showBackTop && 
                    <div onClick={this.goTop} className='backTop'>
                        <img src={require('../../static/images/bt.png')} alt=''/>
                    </div>      
                }   
            </div>
        )
    }
}
