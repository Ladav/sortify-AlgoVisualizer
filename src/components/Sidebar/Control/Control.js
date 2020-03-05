import React from 'react';
import { connect } from 'react-redux';

import Slider from '../../../UI/Slider/Slider';
import Snippet from './Snippet/Snippet';
import PlayBtn from './PlayBtn/PlayBtn';
import * as actionCreater from '../../../store/action/index';

const algo = (props) => {
    const slideChangeHandler = (event) => {
        console.log(event.target.name, event.target.value);
        props.slideChanged(event.target.name, event.target.value);
    };

    return (
        <div style={{ height: 'calc(100% - 260px)', display: 'flex', flexFlow: 'column' }}>
            <Slider
                leftValue="fast"
                rightValue="slow"
                minValue={props.slider.speed.min}
                maxValue={props.slider.speed.max}
                currentValue={props.slider.speed.value}
                name="speed"
                disabled={props.slider.speed.disabled}
                changed={(event) => slideChangeHandler(event)} />
            <Slider
                leftValue="less"
                rightValue="more"
                minValue={props.slider.size.min}
                maxValue={props.slider.size.max}
                currentValue={props.slider.size.value}
                name="size"
                disabled={props.slider.size.disabled}
                changed={(event) => slideChangeHandler(event)} />
            <Snippet algoName={props.algo}/>
            <PlayBtn sort={props.runSort} sorting={props.sorting} />
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        algo: state.algorithm.value,
        slider: state.slider,
        sorting:  state.sorting
    };
};
const mapDispatchToProps = (dispatch) => {
    return { 
        slideChanged: (name, value) => dispatch(actionCreater.slideChanged(name, value)),
        runSort: () => dispatch(actionCreater.runSort())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(algo);