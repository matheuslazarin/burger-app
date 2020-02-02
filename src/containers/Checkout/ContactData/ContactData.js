import React, {Component} from 'react';
import Button from '../../../components/UI/Button/Button';
import Spinner from '../../../components/UI/Spinner/Spinner';
import Input from '../../../components/UI/Input/Input';
import classes from './ContactData.module.css';
import axios from '../../../axios-orders';

class ContactData extends Component {
  state = {
    name: '',
    email: '',
    address: {
      street: '',
      postalCode: '',
    },
    loading: false,
  };

  orderHandler = (event) => {
    event.preventDefault();
    this.setState({loading: true});
    const order = {
      ingredients: this.props.ingredients,
      price: this.props.price,
      customer: {
        name: 'Matheus Lazarin',
        address: {
          street: 'Test!',
          zipCode: '00000000',
          country: 'Brazil',
        },
        email: 'lazarin.matheus@gmail.com',
      },
      deliveryMethod: 'fastest',
    };
    axios.post('/orders.json', order)
      .then(() => {
        this.setState({loading: false});
        this.props.history.push('/');
      })
      .catch(() => {
        this.setState({loading: false});
      });
  };

  render() {
    let form = (
      <form>
        <Input inputtype="input" type="text" name="name" placeholder="Name"/>
        <Input inputtype="input" type="email" name="email" placeholder="Email"/>
        <Input inputtype="input" type="text" name="street" placeholder="Street"/>
        <Input inputtype="input" type="text" name="postal" placeholder="Postal Code"/>
        <Button btnType="Success" clicked={this.orderHandler}>ORDER</Button>
      </form>
    );
    if (this.state.loading) {
      form = <Spinner/>;
    }
    return (
      <div className={classes.ContactData}>
        <h4>Enter your contact data!</h4>
        {form}
      </div>
    );
  }
}

export default ContactData;