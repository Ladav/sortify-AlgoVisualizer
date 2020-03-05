import React, { Component } from 'react';
import ReactDOM from 'react-dom'
import { connect } from 'react-redux';

import classes from './AlgoVisualizer.css';
import Bar from '../../UI/Bar/Bar';
import DetailsBox from './DetailsBox/DetailsBox';

const COLOR = {
    pending: '#777',
    active: '#eb3b5a',
    sorted: '#20bf6b'
};

class AlgoVisualizer extends Component {
    state = {
        detailsBox: {
            pos: {
                top: 15,
                left: 15,
            },
            rel: null,  // position relate to the mouse cursor
            dragging: false
        },
    };

    componentDidUpdate(prevProps, prevState) {
        console.log('[AlgoVisualizer.js] componentDidUpdate')
        console.log(prevState)
        if (this.state.detailsBox.dragging && !prevState.detailsBox.dragging) {
            document.addEventListener('mousemove', this.onMouseMove);
            document.addEventListener('mouseup', this.onMouseUp);
        }
        else if (!this.state.detailsBox.dragging && prevState.detailsBox.dragging) {
            document.removeEventListener('mousemove', this.onMouseMove);
            document.removeEventListener('mouseup', this.onMouseUp);
        }
    };

    onMouseDown = (e) => {
        if (e.button !== 0) return; // only left mouse button
        let top = e.target.offsetTop;
        let left = e.target.offsetLeft;
        this.setState({
            detailsBox: {
                ...this.state.detailsBox,
                rel: {
                    top: e.pageY - top,
                    left: e.pageX - left
                },
                dragging: true
            }
        });

        e.stopPropagation(); // to preventing any parent event handlers from being executed
        e.preventDefault();
    };
    onMouseUp = (e) => {
        this.setState({
            detailsBox: {
                ...this.state.detailsBox,
                dragging: false
            }
        });
        e.stopPropagation();
        e.preventDefault();
    };
    onMouseMove = (e) => {
        if (this.state.dragging === false) return;
        this.setState({
            detailsBox: {
                ...this.state.detailsBox,
                pos: {
                    top: e.pageY - this.state.detailsBox.rel.top,
                    left: e.pageX - this.state.detailsBox.rel.left
                }
            }
        });
    };

    render() {
        let bars = this.props.arr.map((el, i) => {
            let color = COLOR.pending;
            if (this.props.activeBar.includes(i)) color = COLOR.active;
            if (this.props.sortedBar.includes(i)) color = COLOR.sorted;
            return (
                <Bar key={Math.random() * Math.random()}
                    length={el}
                    bar={this.props.bar}
                    color={color} />
            );
        });

        return (
            <div className={classes.AlgoVisualizer}>
                {bars}
                <DetailsBox
                    details={this.props.details}
                    pos={this.state.detailsBox.pos}
                    mouseDown={this.onMouseDown} />
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        arr: state.inputArray,
        bar: state.bar,
        activeBar: state.activeBar,
        sortedBar: state.sortedBar,
        details: state.details
    };
};

export default connect(mapStateToProps)(AlgoVisualizer);