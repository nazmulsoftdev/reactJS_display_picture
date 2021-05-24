import React from 'react';
import {Form,FormGroup,Input,Button} from 'reactstrap';

const Searchbox = ({passInputAction,passSubmitAction}) => {


    return (
        <div className="container">
            <div className="row mt-4">
                <div className="col-6 m-auto ">
                    <Form>
                        <FormGroup className="d-flex">
                            <Input className="m-1" placeholder="Past your image link" onChange={passInputAction} required/>
                            <Button onClick={passSubmitAction} className="m-1" outline color="success">Submit</Button>
                        </FormGroup>
                    </Form>
              </div>
            </div>
        </div>
    );

    
}



export default Searchbox