import React from 'react'
import axios from 'axios'
import './index.css'

class students extends React.Component {
    constructor() {
        super();
        this.state = {
            apiInfo:'',
            apiCourse:'',
            apiProjects:'',
            information:[],
            courses:[],
            projects:[],
            uniInfo:'',
            uniCourse:'',
            uniProjects:''
        }
    }
    handleFrom = (e) => {
        const {name, value} = e.target
        this.setState({
            [name]: value
        })
    }
    searchInfo = () => {
        const{uniInfo, apiInfo} = this.state
        this.setState({
            apiInfo : 'https://tt992e54o3.execute-api.us-east-1.amazonaws.com/dev/students/' + uniInfo
        },() => {console.log(uniInfo, apiInfo)});
        this.getInfo()
    }
    searchProjects = () => {
        const{uniProjects, apiProjects} = this.state
        this.setState({
            apiProjects : 'https://tt992e54o3.execute-api.us-east-1.amazonaws.com/dev/students/' + uniProjects + '/projects'
        })
        console.log(uniProjects, apiProjects)
        this.getProjects()
    }

    searchCourses = () => {
        const{uniCourse, apiCourse} = this.state
        this.setState({
            apiCourse : 'https://tt992e54o3.execute-api.us-east-1.amazonaws.com/dev/students/' + uniCourse + '/courses'
        })
        console.log(uniCourse, apiCourse)
        this.getCourses()
    }

    getInfo=()=>{
        axios.get(this.state.apiInfo)
            .then((response) =>{
                // handle success
                console.log(response.data.body);
                this.setState({
                    information:response.data.body
                })
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            });
    }
    getProjects=()=>{
        axios.get(this.state.apiProjects)
            .then((response) =>{
                // handle success
                console.log(response.data.body);
                this.setState({
                    projects:response.data.body
                })
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            });
    }

    getCourses=()=>{
        axios.get(this.state.apiCourse)
            .then((response) =>{
                // handle success
                console.log(response.data.body);
                this.setState({
                    courses:response.data.body
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
                <div className="projects">
                    <h2>Search Student Projects</h2>
                    <input value = {this.state.uniProjects} name = "uniProjects" onChange={this.handleFrom}/>
                    <button onClick={this.searchProjects}>search</button>
                    <p>{this.state.projects}</p>
                </div>
                <div className="information">
                    <h2>Search Student Information</h2>
                    <input value = {this.state.uniInfo} name = "uniInfo" onChange={this.handleFrom}/>
                    <button onClick={this.searchInfo}>search</button>
                    <p>{this.state.information}</p>
                </div>
                <div className="courses">
                    <h2>Search Student Courses</h2>
                    <input value = {this.state.uniCourse} name = "uniCourse" onChange={this.handleFrom}/>
                    <button onClick={this.searchCourses}>search</button>
                    <p>{this.state.courses}</p>
                </div>
            </div>
        )
    }
}
export default students;

