import React from 'react'
import axios from 'axios'
import './index.css'

class projects extends React.Component {
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
    searchUni = () => {
        const{uni, apiUni} = this.state
        this.setState({
            apiUni : 'https://tt992e54o3.execute-api.us-east-1.amazonaws.com/dev/projects/members/' + uni
        },() => {console.log(uni, apiUni)});
        this.getUni()
    }
    searchName = () => {
        const{name, apiName} = this.state
        this.setState({
            apiName : 'https://tt992e54o3.execute-api.us-east-1.amazonaws.com/dev/projects/' + name
        })
        console.log(name, apiName)
        this.getName()
    }

    searchLink = () => {
        const{link, apiLink} = this.state
        this.setState({
            apiLink : 'https://tt992e54o3.execute-api.us-east-1.amazonaws.com/dev/projects/link/' + link
        })
        console.log(link, apiLink)
        this.getLink()
    }

    getUni=()=>{
        axios.get(this.state.apiUni)
            .then((response) =>{
                // handle success
                console.log(response.data);
                this.setState({
                    uniProject:response.data
                })
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            });
    }
    getName=()=>{
        axios.get(this.state.apiName)
            .then((response) =>{
                // handle success
                console.log(response.data);
                this.setState({
                    nameProject:response.data
                })
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            });
    }

    getLink=()=>{
        axios.get(this.state.apiLink)
            .then((response) =>{
                // handle success
                console.log(response.data);
                this.setState({
                    linkProject:response.data
                })
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
                    <h2>Search Projects By Link</h2>
                    <input value = {this.state.link} name = "link" onChange={this.handleFrom}/>
                    <button onClick={this.searchLink}>search</button>
                    <p>{this.state.linkProject.name}</p>
                    <p>{this.state.linkProject.description}</p>
                    <p>{this.state.linkProject.members}</p>
                    <p>{this.state.linkProject.link}</p>
                </div>
                <div className="uni">
                    <h2>Search Projects By Uni</h2>
                    <input value = {this.state.uni} name = "uni" onChange={this.handleFrom}/>
                    <button onClick={this.searchUni}>search</button>
                    <p>{this.state.uniProject.name}</p>
                    <p>{this.state.uniProject.description}</p>
                    <p>{this.state.uniProject.members}</p>
                    <p>{this.state.uniProject.link}</p>
                </div>
                <div className="name">
                    <h2>Search Projects By Name</h2>
                    <input value = {this.state.name} name = "name" onChange={this.handleFrom}/>
                    <button onClick={this.searchName}>search</button>
                    <p>{this.state.nameProject.name}</p>
                    <p>{this.state.nameProject.description}</p>
                    <p>{this.state.nameProject.members}</p>
                    <p>{this.state.nameProject.link}</p>
                </div>
            </div>
        )
    }
}
export default projects;

