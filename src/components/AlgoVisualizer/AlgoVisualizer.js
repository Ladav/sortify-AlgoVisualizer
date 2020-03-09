import React, { Component } from 'react';
import { connect } from 'react-redux';

import classes from './AlgoVisualizer.css';
import Bar from '../../UI/Bar/Bar';
import DetailsBox from './DetailsBox/DetailsBox';

const COLOR = {
    pending: '#777',
    active: '#ff224b',
    sorted: '#20bf6b'
};

class AlgoVisualizer extends Component {
    render() {
        let bars = this.props.arr.map((el, i) => {
            let color = COLOR.pending;
            let active = false;
            const sorted = this.props.sortedBar.includes(i);
            if (sorted) color = COLOR.sorted;
            else if (this.props.activeBar.includes(i)){
                color = COLOR.active;
                active = true;
            }
            return (
                <Bar key={Math.random() * Math.random()}
                    length={el}
                    bar={this.props.bar}
                    color={color}
                    active={active} />
            );
        });

        return (
            <div className={classes.AlgoVisualizer}>
                {bars}
                <DetailsBox />
            </div>
        );
    };
}

const mapStateToProps = (state) => {
    return {
        arr: state.inputArray,
        bar: state.bar,
        activeBar: state.activeBar,
        sortedBar: state.sortedBar,
    };
};

export default connect(mapStateToProps)(AlgoVisualizer);