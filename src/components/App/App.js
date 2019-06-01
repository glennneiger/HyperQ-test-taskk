import React, { Component } from 'react';
import axios from 'axios';
import { Container, Row, Col } from 'reactstrap';
import { Header } from '../Header';
import { Loading } from '../Loading';
import { UserList } from '../UserList';

import './App.css';

const App = class extends Component {
  state = {
    users: {},
    search: '',
  };

  componentDidMount(){
        axios.get(`https://jsonplaceholder.typicode.com/users`)
            .then(res => {
                const users = res.data;
                this.setState({users});
            })
    };

  onDelete = id => {
    const { users } = this.state;
    const newusers = users.filter(user => user.id !== id);
    this.setState(
      { users: newusers },

    );
  };

  onUpdata = (id, data) => {
    this.setState(
      state => ({
        users: state.users.map(user =>
          user.id === id ? { ...user, ...data } : user
        )
      }));

  };

  onChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  onSearch = users => {
    const { search } = this.state;
    if (!search.length) {
      return users;
    } else {
      return users.filter(user =>
        user.name.toLowerCase().includes(search.toLowerCase()),
      );
    }
  };

  render() {
    const { users, search } = this.state;
    const { onDelete, onUpdata, onSearch, onChange } = this;
    const visibleUserList = onSearch(users);

    return (
      <>
        <div className="wrapper">
          <Container>
            <Row>
              <Col sm="12" md={{ size: 6, offset: 3 }}>
                <Header search={search} onChange={onChange} />
                <div className="user-list">
                  {!users.length ? (
                    <Loading />
                  ) : (
                    <UserList
                      users={visibleUserList}
                      onDelete={onDelete}
                      onUpdata={onUpdata}
                    />
                  )}
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </>
    );
  }
};

export default App;
