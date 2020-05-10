import React,{ Component } from 'react'
import BilletController from './BilletController'
import {
    Container
}from 'reactstrap';

class Billet extends Component {


    constructor(){

        super();
        // this.handleFormSubmit = this.handleFormSubmit.bind(this);
        this.BilletController = new BilletController();

        this.state ={
            title: null,
            content : null,
            userLogin : false,
        }
    }

    sendBillet(e) {

        e.preventDefault();

            let title = this.refs.title.value;
            let content = this.refs.content.value;
            let owner ="5eb86a58b1146eafe5c38ba7"; 


        this.BilletController.send(title,content,owner)
 
    }

    render(){

        return(
            
            <Container>
            
            {/* { this.Auth.getProfile()} */}
                
            <form className='form' onSubmit={this.sendBillet.bind(this)}>

            <div className="form-group">
                <label>Title</label>
                <input type="test" className="form-control" ref="title" placeholder="Enter title" />
            </div>

            <div className="form-group">
                <label>Content</label>
                {/* <input type="test" className="" ref="content" placeholder="Enter password" /> */}
                <textarea ref="content" placeholder="enter content" className="form-control">

                </textarea>
            </div>

            <button type="submit" className="btn btn-primary btn-block">Submit</button>
            <p className="forgot-password text-right">
                Forgot <a href="#">password?</a>
            </p>
        </form>
       
         </Container>


        )
    }




}


export default Billet