import React from 'react'
import axios from 'axios'
import './index.css'

class deleteProject extends React.Component {
    constructor() {
        super();
        this.state = {
            apiName:'',
            apiUni:'',
            apiLink:'',
            nameProject:[],
            uniProject:[],
            linkProject:[],
            name:'',
            uni:'',
            link:''
        }
    }
    handleFrom = (e) => {
        const {name, value} = e.target
        this.setState({
            [name]: value
        })
    }
    delUni = () => {
        const{uni, apiUni} = this.state
        this.setState({
            apiUni : 'https://tt992e54o3.execute-api.us-east-1.amazonaws.com/dev/projects/members/' + uni
        },() => {console.log(uni, apiUni)});
        this.deleteUni()
    }
    delName = () => {
        const{name, apiName} = this.state
        this.setState({
            apiName : 'https://tt992e54o3.execute-api.us-east-1.amazonaws.com/dev/projects/' + name
        })
        console.log(name, apiName)
        this.deleteName()
    }

    delLink = () => {
        const{link, apiLink} = this.state
        this.setState({
            apiLink : 'https://tt992e54o3.execute-api.us-east-1.amazonaws.com/dev/projects/link/' + link
        })
        console.log(link, apiLink)
        this.deleteLink()
    }

    deleteUni=()=>{
        axios.delete(this.state.apiUni)
            .then((response) =>{
                // handle success
                console.log(response);
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            });
    }
    deleteName=()=>{
        axios.delete(this.state.apiName)
            .then((response) =>{
                console.log(response.data);
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            });
    }

    deleteLink=()=>{
        axios.delete(this.state.apiLink)
            .then((response) =>{
                console.log(response.data);
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            });
    }
    render() {
        return (
            <div>
                <div className="link">
                    <h2>Delete Projects By Link</h2>
                    <input value = {this.state.link} name = "link" onChange={this.handleFrom}/>
                    <button onClick={this.delLink}>delete</button>
                </div>
                <div className="uni">
                    <h2>Delete Projects By Uni</h2>
                    <input value = {this.state.uni} name = "uni" onChange={this.handleFrom}/>
                    <button onClick={this.delUni}>delete</button>
                </div>
                <div className="name">
                    <h2>Delete Projects By Name</h2>
                    <input value = {this.state.name} name = "name" onChange={this.handleFrom}/>
                    <button onClick={this.delName}>delete</button>
                </div>
            </div>
        )
    }
}
export default deleteProject;
