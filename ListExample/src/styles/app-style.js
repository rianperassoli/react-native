import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5FCFF'
    },
    header: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#1194f6',
        fontSize: 20
    },
    textHeader: {
        color: '#FFF'
    },
    list: {
        flexDirection: 'column',
        flex: 1
    },
    footer: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        backgroundColor: '#1194f6'
    },
    textFooter: {
        color: '#e5e5e5',
        padding: 5     
    },
    row: {
        fontSize: 18,
        marginBottom: 2,
        paddingTop: 10,
        paddingBottom: 10
    },
    listRow: {
        backgroundColor: '#DDD',
        paddingLeft: 20,
        marginLeft: 10,
        marginRight: 10,
    },
    inputView: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 5
    },
    inputItem: {
        backgroundColor: '#FFF',
        borderColor: '#DDD',
        borderWidth: 3,
        flex: 1,
        margin: 5
    },
    buttonAdd: {
        margin: 10,
        padding: 10,
        margin: 5
    }
});

export default styles; 