import React, { Component } from "react";
import {
  Text,
  View,
  Modal,
  TouchableHighlight,
  StyleSheet,
  Alert,
} from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

import { Button, Searchbar, Divider } from "react-native-paper";
import AddressList from "./AddressList";

const data = [
  {
    id: 1,
    name: "Dhangadhi",
  },
  {
    id: 2,
    name: "Kathmandu",
  },
  {
    id: 3,
    name: "Jhapa",
  },
  {
    id: 4,
    name: "Nepalgunj",
  },
  {
    id: 5,
    name: "Pokhara",
  },
  {
    id: 6,
    name: "Lumbini",
  },
  {
    id: 7,
    name: "Palpa",
  },
  {
    id: 8,
    name: "Doti",
  },
];

export class AddressModal extends Component {
  state = {
    searchQuery: "",
    data: data,
    filteredData: data,
  };

  handleTextChange = (query) => {
    const filteredData = this.state.data.filter((datum) => {
      return datum.name.toLowerCase().includes(query.toLowerCase());
    });
    this.setState({ searchQuery: query, filteredData });
  };

  render() {
    return (
      <Modal
        animationType="slide"
        transparent={true}
        visible={this.props.showModal}
        onRequestClose={() => {
          this.props.handleModalVisibility({
            addressState: this.props.addressState,
          });
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Ionicons
              name="ios-close-circle"
              size={30}
              color="red"
              style={{ ...styles.openButton }}
              onPress={() => {
                this.props.handleModalVisibility({
                  addressState: this.props.addressState,
                });
              }}
            />
            <Searchbar
              placeholder={this.props.addressState}
              onChangeText={this.handleTextChange}
              value={this.state.searchQuery}
              style={{ marginTop: 15, borderWidth: 1 }}
            />
            <AddressList
              data={this.state.filteredData}
              addressState={this.props.addressState}
              handleFromTo={this.props.handleFromTo}
            />
          </View>
        </View>
      </Modal>
    );
  }
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    height: "80%",
    width: "100%",
    margin: 20,
    backgroundColor: "#DCDCDC",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  openButton: {
    // backgroundColor: "#F194FF",
    // borderRadius: 20,
    // padding: 10,
    // elevation: 2,
    position: "absolute",
    right: 15,
    marginTop: 10,
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
});

export default AddressModal;
