
import React, { Component } from 'react-native';
import {bindActionCreators} from 'redux';
import Counter from '../components/counter';
import * as counterActions from '../actions/counterActions';
import { connect } from 'react-redux';
class CounterApp extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { state, actions } = this.props;
    return (
      <Counter
        counter={state.count}
        {...actions} />
    );
  }
}
/* Подписываем компонент на событие изменения хранилища. Теперь в props.state
 будет текущее состояние счетчика */
export default connect(state => ({
    state: state.counter
  }),
/* Привязываем действия к компоненту. Теперь доступны события манипуляции счетчиком props.actions.increment() и props.actions.decrement() */
  (dispatch) => ({
    actions: bindActionCreators(counterActions, dispatch)
  })
)(CounterApp);