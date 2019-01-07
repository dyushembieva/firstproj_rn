export default ChartLabel = (props) => {
    const { label, barInterval, labelFontSize, labelColor } = props;
  
    return(
      <View style={[{marginHorizontal: barInterval}, styles.label]}>
        <View style={styles.labelWrapper}>
          <Text style={[styles.labelText, {fontSize: labelFontSize, color: labelColor}]}>
            {label}
          </Text>
        </View>
      </View>
    );
  }