import React from 'react'
import axios from 'axios'
import './index.css'

class deleteInfo extends React.Component {
    constructor() {
        super();
        this.state = {
            apiInfo:'',
            apiCourse:'',
            apiProjects:'',
            information:'',
            coursesKey: '',
            coursesValue: '',
            projects:'',
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
    delInfo = () => {
        const{uniInfo, apiInfo} = this.state
        this.setState({
            apiInfo : 'https://tt992e54o3.execute-api.us-east-1.amazonaws.com/dev/students/' + uniInfo
        },() => {console.log(uniInfo, apiInfo)});
        this.deleteInfo()
    }
    delProjects = () => {
        const{uniProjects, apiProjects} = this.state
        this.setState({
            apiProjects : 'https://tt992e54o3.execute-api.us-east-1.amazonaws.com/dev/students/' + uniProjects + '/projects'
        })
        console.log(uniProjects, apiProjects)
        this.deleteProjects()
    }

    delCourses = () => {
        //const{uniCourse, apiCourse, coursesKey, coursesValue} = this.state
        const{uniCourse, apiCourse, coursesValue} = this.state
        this.setState({
            apiCourse : 'https://tt992e54o3.execute-api.us-east-1.amazonaws.com/dev/students/' + uniCourse + '/courses?crn=' + coursesValue
            //apiCourse : 'https://tt992e54o3.execute-api.us-east-1.amazonaws.com/dev/students/sj1234/courses?crn=4111'
        })
        console.log(uniCourse, apiCourse)
        this.deleteCourses()
    }

    deleteInfo=()=>{
        axios.delete(this.state.apiInfo)
            .then((response) =>{
                // handle success
                console.log(response.data.body);
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            });
    }
    deleteProjects=()=>{
        axios.delete(this.state.apiProjects)
            .then((response) =>{
                // handle success
                console.log(response.data.body);
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            });
    }

    deleteCourses=()=>{
        axios.delete(this.state.apiCourse)
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
                    <h2>Delete Student Projects</h2>
                    <input value = {this.state.uniProjects} name = "uniProjects" onChange={this.handleFrom}/>
                    <button onClick={this.delProjects}>delete</button>
                </div>
                <div className="information">
                    <h2>Delete Student Information</h2>
                    <input value = {this.state.uniInfo} name = "uniInfo" onChange={this.handleFrom}/>
                    <button onClick={this.delInfo}>delete</button>
                </div>
                <div className="courses">
                    <h2>Delete Student Courses</h2>
                    <input value = {this.state.uniCourse} name = "uniCourse" onChange={this.handleFrom}/>
                    <input value = {this.state.coursesValue} name = "coursesValue" onChange={this.handleFrom}/>
                    <button onClick={this.delCourses}>delete</button>
                    i</div>
            </div>
        )
    }
}
export default deleteInfo;
