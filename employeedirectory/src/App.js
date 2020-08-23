import React, { Component } from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import friends from "./friends.json";
import Button from "./components/Button/Button"
import Form from "./components/FilterForm/Form"


class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    friends
  };

  removeFriend = id => {
    // Filter this.state.friends for friends with an id not equal to the id being removed
    const friends = this.state.friends.filter(friend => friend.id !== id);
    // Set this.state.friends equal to the new friends array
    this.setState({ friends });
  };

  sortFunc = (sort, order) => {

      switch(sort){

        case "name":
          this.sortByName(order)
          break

        case "job":
          this.sortByJob(order)
          break

        default:
          return
            
      }
  }

  sortByName = order => {

    let friends
    switch (order){

      case "asc":
        friends = this.state.friends.sort((a, b) => a.name.localeCompare(b.name))
        this.setState({ friends })
        break
      
      case "desc":
        friends = this.state.friends.sort((a, b) => b.name.localeCompare(a.name))
        this.setState({ friends })
        break

      default:
        return

    }

  }

  sortByJob = order => {

    let friends
    switch (order){

      case "asc":
        friends = this.state.friends.sort((a, b) => a.occupation.localeCompare(b.occupation))
        this.setState({ friends })
        break
      
      case "desc":
        friends = this.state.friends.sort((a, b) => b.occupation.localeCompare(a.occupation))
        this.setState({ friends })
        break

      default:
        return

    }

  }

  resetList = () =>{

    this.setState({ friends })

  }

  filterEmploy = filter => {

    const friends = this.state.friends.filter(friend => friend.occupation.toLowerCase().includes(filter.toLowerCase()))
    this.setState({ friends })

  }



  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <Wrapper>

        <Title>Employees </Title>

        <Button  sortFunc = {this.sortFunc} sort = "name" order = "asc">Sort by Name Asc</Button>
        <Button  sortFunc = {this.sortFunc} sort = "name" order = "desc">Sort by Name Desc</Button>
        <Button  sortFunc = {this.sortFunc} sort = "job" order = "asc">Sort by Occupation Asc</Button>
        <Button  sortFunc = {this.sortFunc} sort = "job" order = "desc">Sort by Occupation Desc</Button>
        
        <Form filterEmploy = {this.filterEmploy}></Form>

        <button  onClick ={() => {this.resetList()}}>Reset List</button>

        <Wrapper>

        {this.state.friends.map(friend => (
          <FriendCard
            removeFriend={this.removeFriend}
            id={friend.id}
            key={friend.id}
            name={friend.name}
            image={friend.image}
            occupation={friend.occupation}
            location={friend.location}
          />
        ))}

        </Wrapper>

      </Wrapper>
    );
  }
}

export default App;
