const { counter, increment, decrement } = this.props;

<Text>{counter}</Text>

function newFunction() {
    return <TouchableOpacity onPress={increment} style={styles.button}>
        <Text>up</Text>
    </TouchableOpacity>
        ,
        <TouchableOpacity onPress={decrement} style={styles.button}>
            <Text>down</Text>
        </TouchableOpacity>;
}
