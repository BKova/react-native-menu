module.exports = (React, ReactNative) => {
  const { Animated } = ReactNative;
  const TimerMixin = require('react-timer-mixin');

  // A component that scales in when mounted.
  const AnimatedOptionsContainer = React.createClass({
    mixins: [TimerMixin],
    getInitialState() {
      return { scaleAnim: new Animated.Value(1) };
    },
    /*componentDidMount() {
      this.setTimeout(() => {
        Animated.timing(this.state.scaleAnim, {
          duration: 120,
          toValue: 1
        }).start();
      }, 16);
    },*/
    render() {
      return (
        <Animated.View style={[this.props.style, { transform: [ { scale: this.state.scaleAnim } ] }]}>
          { this.props.children }
        </Animated.View>
      );
    }
  });

  return AnimatedOptionsContainer;
};

//This file was modified to disable animations of poor quality
