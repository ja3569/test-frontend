import React from 'react'
import axios from 'axios'
import './index.css'

class addProject extends React.Component {
    constructor() {
        super();
        this.state = {
            apiLink:'',
            apiName:'',
            apiUni:'',
            apiProject:'',
            nameProject:'',
            descriptionProject:'',
            unisProject:'',
            linkProject:'',
            projectName:'',
            nameName:'',
            descriptionName:'',
            unisName:'',
            linkName:'',
            projectUni:'',
            nameUni:'',
            descriptionUni:'',
            unisUni:'',
            linkUni:'',
            projectLink:'',
            nameLink:'',
            descriptionLink:'',
            unisLink:'',
            linkLink:''
        }
    }
    handleFrom = (e) => {
        const {name, value} = e.target
        this.setState({
            [name]: value
        })
    }
    addProject = () => {
        //const{uniInfo, apiInfo, firstName, lastName, email, phone, major, interests} = this.state
        const{apiProject} = this.state
        this.setState({
            apiProject: 'https://tt992e54o3.execute-api.us-east-1.amazonaws.com/dev/projects'
        },() => {console.log(apiProject)});
        this.postProject()
    }
    updateName = () => {
        const{projectName, apiName} = this.state
        this.setState({
            apiName : 'https://tt992e54o3.execute-api.us-east-1.amazonaws.com/dev/projects/' + projectName
        })
        console.log(projectName, apiName)
        this.putName()
    }

    updateUni = () => {
        const{projectUni, apiUni} = this.state
        this.setState({
            apiUni : 'https://tt992e54o3.execute-api.us-east-1.amazonaws.com/dev/projects/members/' + projectUni
        })
        console.log(projectUni, apiUni)
        this.putUni()
    }

    updateLink = () => {
        const{projectLink, apiLink} = this.state
        this.setState({
            apiLink : 'https://tt992e54o3.execute-api.us-east-1.amazonaws.com/dev/projects/link/' + projectLink
        })
        console.log(projectLink, apiLink)
        this.putLink()
    }

    postProject=()=>{
        axios.post(this.state.apiProject, {
            name: this.state.nameProject,
            description: this.state.descriptionProject,
            unis: this.state.unisProject,
            link: this.state.linkProject,
        })
            .then((response) =>{
                console.log(response);
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            });
    }
    putName=()=>{
        axios.put(this.state.apiName,{
            name: this.state.nameName,
            description: this.state.descriptionName,
            unis: this.state.unisName,
            link: this.state.linkName,
        })
            .then((response) =>{
                console.log(response);
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            });
    }

    putUni=()=>{
        axios.put(this.state.apiUni,{
            name: this.state.nameUni,
            description: this.state.descriptionUni,
            unis: this.state.unisUni,
            link: this.state.linkUni,
        })
            .then((response) =>{
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    putLink=()=>{
        axios.put(this.state.apiLink,{
            name: this.state.nameLink,
            description: this.state.descriptionLink,
            unis: this.state.unisLink,
            link: this.state.linkLink,
        })
            .then((response) =>{
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
    }
    render() {
        return (
            <div>
                <div className="projects">
                    <h2>Update Project By Uni</h2>
                    <input value = {this.state.projectUni} name = "projectUni" onChange={this.handleFrom}/>
                    <input value = {this.state.nameUni} name = "nameUni" onChange={this.handleFrom}/>
                    <input value = {this.state.descriptionUni} name = "descriptionUni" onChange={this.handleFrom}/>
                    <input value = {this.state.unisUni} name = "unisUni" onChange={this.handleFrom}/>
                    <input value = {this.state.linkUni} name = "linkUni" onChange={this.handleFrom}/>
                    <button onClick={this.updateUni}>update</button>
                </div>
                <div className="project">
                    <h2>Add Projects</h2>
                    <input value = {this.state.nameProject} name = "nameProject" onChange={this.handleFrom}/>
                    <input value = {this.state.descriptionProject} name = "descriptionProject" onChange={this.handleFrom}/>
                    <input value = {this.state.unisProject} name = "unisProject" onChange={this.handleFrom}/>
                    <input value = {this.state.linkProject} name = "linkProject" onChange={this.handleFrom}/>
                    <button onClick={this.addProject}>add</button>
                </div>
                <div className="Name">
                    <h2>Update Project By Name</h2>
                    <input value = {this.state.projectName} name = "projectName" onChange={this.handleFrom}/>
                    <input value = {this.state.nameName} name = "nameName" onChange={this.handleFrom}/>
                    <input value = {this.state.descriptionName} name = "descriptionName" onChange={this.handleFrom}/>
                    <input value = {this.state.unisName} name = "unisName" onChange={this.handleFrom}/>
                    <input value = {this.state.linkName} name = "linkName" onChange={this.handleFrom}/>
                    <button onClick={this.updateName}>update</button>
                </div>

                <div className="Link">
                    <h2>Update Project By Link</h2>
                    <input value = {this.state.projectLink} name = "projectLink" onChange={this.handleFrom}/>
                    <input value = {this.state.nameLink} name = "nameLink" onChange={this.handleFrom}/>
                    <input value = {this.state.descriptionLink} name = "descriptionLink" onChange={this.handleFrom}/>
                    <input value = {this.state.unisLink} name = "unisLink" onChange={this.handleFrom}/>
                    <input value = {this.state.linkLink} name = "linkLink" onChange={this.handleFrom}/>
                    <button onClick={this.updateLink}>update</button>
                </div>
            </div>
        )
    }
}
export default addProject;
