import React from 'react';
import { Text, View, Button, Image, FlatList, StyleSheet, Platform, TouchableHighlight, Alert } from 'react-native';
import FlatlistData from './data/FlatListData';
import Icon from 'react-native-vector-icons/Ionicons';
import Swipeout from 'react-native-swipeout';
import ModalBox from './modal/ModalBox';
import EditModalBox from './modal/EditModalBox';
import { connect } from 'react-redux';
import { actFetchFood } from './../actions/actions';


class FlastListItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeRowKey: null,
    }
  }

  render() {
    // console.log(this.props.id);
    const deleteKey = this.state.activeRowKey;

    const swipeSetting = {
      autoClose: true,
      onOpen: (sectionID, rowId, direction) => {
        this.setState({
          activeRowKey: this.props.item.key
        })

      },
      onClose: (sectionID, rowId, direction) => {
        if (this.state.activeRowKey === !null) {
          activeRowKey: null
        }
      },
      right: [
        {
          onPress: () => {
            this.props.parentFlatlist.refs.updateModal.showEditModal(FlatlistData[this.props.index], this);
          },
          text: 'Update',
          type: 'primary'  //kieu delete: mau do, kieu primary: xanh
        },
        {
          onPress: () => {
            Alert.alert(
              'alert',
              'You wan to delete',
              [
                { text: 'no', onPress: () => console.log('cncel'), style: 'cancel' },
                {
                  text: 'yes', onPress: () => {
                    FlatlistData.splice(this.props.index, 1);
                    this.props.parentFlatlist.refresh(deleteKey);
                  }
                },

              ],
              { cancelable: true },
            );
          },
          text: 'Delete',
          type: 'Delete'  //kieu delete: mau do, kieu primary: xanh
        },

      ],

      // rowId: this.props.index,
      // sectionID: 1,
    }

    return (
      <Swipeout
        {...swipeSetting}
      >
        <View style={{ flex: 1, flexDirection: 'column' }}>
          <View style={{ flex: 1, flexDirection: 'row', backgroundColor: 'green' }}>
            {/* <Text>{this.props.children}</Text> */}
            <Image source={{ uri: this.props.item.imgUrl }}
              style={{ width: 100, height: 100, margin: 2, borderWidth: 1, borderColor: '#000' }}
            />
            <View style={{ flex: 1, flexDirection: 'column' }}>
              <Text style={styles.flitem} >{this.props.item.name}</Text>
              <Text style={styles.flitem} >{this.props.item.foodDescription}</Text>
            </View>
          </View>
          <View style={{ flex: 1, height: 1, backgroundColor: '#fff', }}></View>
        </View>
      </Swipeout>

    );
  }
}

class FlatlistBasic extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      dltRowKey: null,
      refreshEdit: 0,
    }
  }

  componentDidMount() {
    this.props.onFectchFood();
  }

  refresh = (activekey) => {
    this.setState((prevState) => {
      return {
        dltRowKey: activekey,

      }
    }
    );
    this.refs.scrollendsuccess.scrollToEnd();
  }

  refreshUpdate = () => {
    this.setState(
      (prevState) => {
        return {
          refreshEdit: this.state.refreshEdit + 1,
        }
      }
    )
  }


  _onPressAdd = () => {
    this.refs.addModal.showModal();
  }

  render() {
    console.log(this.props.food);
    var { food } = this.props
    return (
      <View style={{ flex: 1, marginTop: Platform.OS === 'ios' ? 34 : 23 }}>

        <View style={{ backgroundColor: 'tomato', height: 60, flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'center', }}>
          <TouchableHighlight
            underlayColor='tomato'
            style={{ marginRight: 10 }}
            onPress={this._onPressAdd}
          >
            <Icon name='ios-add-circle-outline' size={30} color='#ffff00' />
          </TouchableHighlight>
        </View>
        <FlatList
          ref={'scrollendsuccess'}
          //lay du lieu tu database
          data={FlatlistData}
          // data = {this.state.dataSource}
          renderItem={({ item, index }) =>
            <FlastListItem
              parentFlatlist={this}
              item={item}
              index={index}
            >
            </FlastListItem>
          }

          renderSectionHeader={({ section, index }) => <FlastListItem>{section.key}</FlastListItem>}
        >
        </FlatList>
        {/* this cua FlatlistBasic goi den cac ham */}
        <ModalBox ref={'addModal'} parentFlatlist={this} ></ModalBox>
        <EditModalBox ref={'updateModal'} parentFlatlist={this} ></EditModalBox>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  flitem: {
    padding: 5,
    color: '#fff'
  }
})

const mapStateToProps = state => {
  return {
    //state_name:state.reducer_name
    food: state.food
  }
}


const mapDispatchToProps = (dispatch, props) => {
  return {
    onFectchFood: () => {
      dispatch(actFetchFood());
    },

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(FlatlistBasic);
