import logo from './logo.svg';
import './App.css';
import React from 'react';
import Question from './Components/question';
import Article from './Components/article';
import { Form, Checkbox } from 'semantic-ui-react'


function App() {
  const [value, setValue] = React.useState('Question')
  return (
    <>
      <div className='post'>
        <h2>New Post</h2>
      </div>
      <br></br>
      <br></br>
      <Form>
        <Form.Field>
          Select Post Type:
        </Form.Field>
        <Form.Field>
          <Checkbox className="Q"
            radio
            label='Question'
            name='checkboxRadioGroup'
            value='Question'
            checked={value === 'Question'}
            onChange={(e, data) => setValue(data.value)}
          />
        </Form.Field>
        <Form.Field>
          <Checkbox className="A"
            radio
            label='Article'
            name='checkboxRadioGroup'
            value='Article'
            checked={value === 'Article'}
            onChange={(e, data) => setValue(data.value)}
          />
        </Form.Field>
      </Form>


      <div className="data">
        <h3>What do you want to share or ask</h3>
      </div>
      <div>
        <h3>Please elaborate the details in the given box</h3>
      </div>
      {value === "Question" ? (<Question />) : (<Article />)}
    </>
  );
}

export default App;
