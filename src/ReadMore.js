import React from 'react';
import './readmore.css';

const ReadMore = React.createClass({
    defaultStyles:{
        "overflow": "hidden",
        "position":"relative",
        "text-align":"left",
        "margin":"20px 20px 20px 20px"

    },
    getDefaultProps() {
        return {
            collapseText:'Read Less',
            expandText:'Read More',
            minHeight:'50px',
            animation:'1s ease',
            className:'react-openclose'
        }
    },
    getInitialState() {
        return {
            initialHeight: 0,
            isOpen:false
        };
    },
    componentDidMount() {
        window.addEventListener('resize', this.handleResize);

        console.log(this);

        if(!this.state.clientHeight){
            let clientHeight = this.collapseWrapper.clientHeight;
            this.setState({clientHeight});
        }
    },
    componentWillUnmount(){
        window.removeEventListener('resize', this.handleResize);
    },
    handleResize(){
        this.forceUpdate();
    },
    toggleHeight(){
        this.setState({isOpen:!this.state.isOpen});
    },
    render: function() {
        let {minHeight, animation, className} = this.props;
        let {isOpen, clientHeight} = this.state;
        let inlineStyle = this.defaultStyles;
        if(clientHeight){
            inlineStyle = Object.assign({},inlineStyle,{
                'height':isOpen ? clientHeight : minHeight,
                'transition':'height ' + animation
            });
        }
        let baseClass = className + ' ' + className + '--' + (isOpen ? 'open' : 'closed');
        return (
            <div className={className + '__wrapper'}>
                <div className={baseClass}
                     ref={(collapseWrapper) => { this.collapseWrapper = collapseWrapper; }}
                     style={inlineStyle}
                >
                    {this.props.children}
                </div>
                <button
                    className= 'readmore-button'
                    onClick={()=>{this.toggleHeight()}}>
                    {this.state.isOpen ? this.props.collapseText : this.props.expandText}
                </button>
            </div>
        );
    }
});

export default ReadMore;