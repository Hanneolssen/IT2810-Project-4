import React, {Component} from 'react';  
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  
} from 'react-native';

//import axios from 'axios';

/* Import Components; These are our dumb components. They are stateless functional components. */
import Button from './Button'
import Input from './Input'; 
import Select from './Select';


class FormContainer extends Component {  
  constructor(props) {
    super(props);

    this.state = {
      newPerson: {
        firstName: '',
        lastName: '',
        profession: '',
        year: '',
        rating: '',
      },
    }
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleClearForm = this.handleClearForm.bind(this);
    this.handleAge = this.handleAge.bind(this);
    this.handleFirstName = this.handleFirstName.bind(this);
    this.handleLastName = this.handleLastName.bind(this);
    this.handleProfession = this.handleProfession.bind(this);
    this.handleInput = this.handleInput.bind(this);
    this.handleRating = this.handleRating.bind(this);
    this.addRatingOptions = this.addRatingOptions.bind(this);
    
  }

  /* This life cycle hook gets executed when the component mounts */

  handleFirstName(e) {
    let value = e.target.value;
    this.setState( prevState => ({ newPerson : 
         {...prevState.newPerson, firstName: value
         }
       }))
   }
   
   addRatingOptions(){
     const ratingOptions = [];
     for(var i=1; i<101; i++){
       ratingOptions.push(i);
     }
     return ratingOptions;
   }

   handleLastName(e) {
    let value = e.target.value;
    this.setState( prevState => ({ newPerson : 
         {...prevState.newPerson, lastName: value
         }
       }))
   }
   
  handleAge(e) {
    let value = e.target.value;
    this.setState( prevState => ({ newPerson : 
        {...prevState.newPerson, year: value
        }
      }))
  }

  handleRating(e) {
    let value = e.target.value;
    this.setState( prevState => ({ newPerson : 
        {...prevState.newPerson, rating: value
        }
      }))
  }

  handleProfession(e) {
    let value = e.target.value;
    this.setState( prevState => ({ newPerson : 
        {...prevState.newPerson, profession: value
        }
      }))
  }

  handleInput(e) {
    let value = e.target.value;
    let name = e.target.name;
    this.setState( prevState => ({ newPerson : 
      {...prevState.newPerson, [name]: value
      }
    }))
  }

  handleFormSubmit = () => {
    let personData = this.state.newPerson;
    console.log(personData)
    //axios.post('http://it2810-09.idi.ntnu.no:8000/api/persons?', personData)
      //.then(response => {
        //response.then(data =>{
        //console.log("Successful" + data);
      //})
     // })
      .catch(err => {
        return console.log(err+'Could not post to db.');
      })
  }

  handleClearForm(e) {
    // Logic for resetting the form
    e.preventDefault(); //prevents the page from being refreshed on form submission, which is the default form behavior.
    this.setState({ 
      newPerson: {
        firstName: '',
        lastName: '',
        profession: '',
        age: '',
        rating: ''
      },
    })
}

render() {
  const { firstName, lastName, profession, year, rating } = this.state.newPerson;
  const isEnabled = (firstName !=="" && lastName !=="" && profession !=="" && year !=="" && rating !=="");
  
  return (
      <View /*className="formContainer"*/>
        <Text /*className='formHeader'*/>ADD NEW PERSON</Text>
        
        <Input 
          inputType={'text'}
          //className={'firstNameInput'}
          title= {'First name '} 
          name= {'firstName'}
          value={this.state.newPerson.firstName} 
          placeholder = {'John'}
          handleChange = {this.handleFirstName}/> {/* First name of the user */}
        
        <Input 
          inputType={'text'}
          //className={'lastNameInput'}
          title= {'Last name '} 
          name= {'lastName'}
          value={this.state.newPerson.lastName} 
          placeholder = {'Smith'}
          handleChange = {this.handleLastName}/> {/* Last name of the user */}

        <Input 
          inputType={'number'} 
          name={'age'}
          //className={'ageInput'}
          title= {'Birth year '} 
          maxLength = {'4'}
          value={this.state.newPerson.age} 
          placeholder = {'1900'}
          handleChange={this.handleAge} /> {/* Age */} 
        
        <Input 
          inputType={'text'} 
          //className={'professionInput'}
          name={'profession'}
          title= {'Profession '} 
          value={this.state.newPerson.profession} 
          placeholder = {'Pimp'}
          handleChange={this.handleProfession} /> {/* Profession */} 
        
        <Select 
          title={'Rating'}
          //className={'ratingInput'}
          name={'rating'}
          options = {this.addRatingOptions()} 
          value = {this.state.newPerson.rating}
          placeholder = {'55'}
          handleChange = {this.handleRating}
          /> {/* Rating selection */}

        <Button 
          action = {this.handleFormSubmit}
          //className = {'submitButton'}
          type = {'primary'}
          title = {'Submit'} 
          disabled = {!isEnabled}/> { /*Submit */ }
      
        <Button 
          action = {this.handleClearForm}
          //className = {'clearButton'}
          type = {'secondary'}
          title = {'Clear'}/> {/* Clear the form */}
        
      </View>
  );
}
}

export default FormContainer;

