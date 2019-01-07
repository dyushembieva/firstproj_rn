import ChartItem from './chart-item';
import ChartLabel from './chart-label';

class Chart extends Component {
  constructor(props) {
    super(props);
    let data = props.data || [];

    this.state = {
      data: data,
      maxValue: this.countMaxValue(data)
    }
  }
/* Функция для подсчета максимального значения из переданных данных.*/
  countMaxValue(data) {
    return data.reduce((prev, curn) => (curn.value >= prev) ? curn.value : prev, 0);
  }
  componentWillReceiveProps(newProps) {
    let data = newProps.data || [];
    this.setState({
      data: data,
      maxValue: this.countMaxValue(data)
    });
  }
/* Функция для получения массива компонент столбцов */
  renderBars() {
    return this.state.data.map((value, index) => (
        <ChartItem
          value={value.value}
          color={value.color}
          key={index}
          barInterval={this.props.barInterval}
          maxValue={this.state.maxValue}/>
    ));
  }
/* Функция для получения массива компонент подписей столбцов */
  renderLabels() {
    return this.state.data.map((value, index) => (
        <ChartLabel
          label={value.label}
          barInterval={this.props.barInterval}
          key={index}
          labelFontSize={this.props.labelFontSize}
          labelColor={this.props.labelFontColor}/>
    ));
  }
  render() {
    let labelStyles = {
      fontSize: this.props.labelFontSize,
      color: this.props.labelFontColor
    };

    return(
      <View style={[styles.container, {backgroundColor: this.props.backgroundColor}]}>
        <View style={styles.labelContainer}>
          <Text style={labelStyles}>
            {this.state.maxValue}
          </Text>
        </View>
        <View style={styles.itemsContainer}>
          <View style={[styles.polygonContainer, {borderColor: this.props.borderColor}]}>
            {this.renderBars()}
          </View>
          <View style={styles.itemsLabelContainer}>
            {this.renderLabels()}
          </View>
        </View>
      </View>
    );
  }
}
/* производим валидацию переданных данных */
Chart.propTypes = {
  data: PropTypes.arrayOf(React.PropTypes.shape({
    value: PropTypes.number,
    label: PropTypes.string,
    color: PropTypes.string
  })), // массив отображаемых данных
  barInterval: PropTypes.number, // расстояние между столбцами
  labelFontSize: PropTypes.number, // размер шрифта для подписи данных
  labelFontColor: PropTypes.string, // цвет шрифта для подписи данных
  borderColor: PropTypes.string, // цвет оси
  backgroundColor: PropTypes.string // цвет фона диаграммы
}

export default Chart;