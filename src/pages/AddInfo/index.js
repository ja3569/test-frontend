import React from 'react'
import axios from 'axios'
import './index.css'

class addInfo extends React.Component {
    constructor() {
        super();
        this.state = {
            apiInfo:'',
            apiCourse:'',
            apiProjects:'',
            firstName:'',
            lastName:'',
            email:'',
            phone:'',
            major:'',
            interests:'',
            coursesKey: '',
            coursesValue: '',
            projectsKey:'',
            projectsValue:'',
            projectsCoursesKey:'',
            projectsCoursesValue:'',
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
    addInfo = () => {
        //const{uniInfo, apiInfo, firstName, lastName, email, phone, major, interests} = this.state
        const{uniInfo, apiInfo} = this.state
        this.setState({
            /*
            apiInfo : 'https://tt992e54o3.execute-api.us-east-1.amazonaws.com/dev/students/' + uniInfo
                + '?' + 'FirstName=' + firstName + '&LastName=' + lastName
                + '&email=' + email + '&phone=' + phone + '&major=' + major
                + '&interests=' + interests

             */
            apiInfo : 'https://tt992e54o3.execute-api.us-east-1.amazonaws.com/dev/students/' + uniInfo
        },() => {console.log(uniInfo, apiInfo)});
        this.postInfo()
    }
    addProjects = () => {
        const{uniProjects, apiProjects, projectsCoursesKey, projectsCoursesValue, projectsKey, projectsValue} = this.state
        this.setState({
            apiProjects : 'https://tt992e54o3.execute-api.us-east-1.amazonaws.com/dev/students/' + uniProjects
                + '/projects?' + projectsCoursesKey + '=' + projectsCoursesValue + '&' + projectsKey + '='
                + projectsValue
        })
        console.log(uniProjects, apiProjects)
        this.postProjects()
    }

    addCourses = () => {
        const{uniCourse, apiCourse, coursesKey, coursesValue} = this.state
        this.setState({
            apiCourse : 'https://tt992e54o3.execute-api.us-east-1.amazonaws.com/dev/students/' + uniCourse + '/courses?'
                + coursesKey + "=" + coursesValue
            //apiCourse : 'https://tt992e54o3.execute-api.us-east-1.amazonaws.com/dev/students/sj1234/courses?crn=4111'
        })
        console.log(uniCourse, apiCourse)
        this.postCourses()
    }

    postInfo=()=>{
        axios.post(this.state.apiInfo, {
            FirstName: this.state.firstName,
            LastName: this.state.lastName,
            email: this.state.email,
            phone: this.state.phone,
            major: this.state.major,
            interests: this.state.interests
        },{
            headers: {'Content-Type': 'multipart/form-data'}
        })
            .then((response) =>{
                console.log(response);
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            });
    }
    postProjects=()=>{
        axios.post(this.state.apiProjects)
            .then((response) =>{
                console.log(response);
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            });
    }

    postCourses=()=>{
        axios.post(this.state.apiCourse)
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
                    <h2>Add Student Projects</h2>
                    <input value = {this.state.uniProjects} name = "uniProjects" onChange={this.handleFrom}/>
                    <input value = {this.state.projectsCoursesKey} name = "projectsCoursesKey" onChange={this.handleFrom}/>
                    <input value = {this.state.projectsCoursesValue} name = "projectsCoursesValue" onChange={this.handleFrom}/>
                    <input value = {this.state.projectsKey} name = "projectsKey" onChange={this.handleFrom}/>
                    <input value = {this.state.projectsValue} name = "projectsValue" onChange={this.handleFrom}/>
                    <button onClick={this.addProjects}>add</button>
                </div>
                <div className="information">
                    <h2>Add Student Information</h2>
                    <input value = {this.state.uniInfo} name = "uniInfo" onChange={this.handleFrom}/>
                    <input value = {this.state.firstName} name = "firstName" onChange={this.handleFrom}/>
                    <input value = {this.state.lastName} name = "lastName" onChange={this.handleFrom}/>
                    <input value = {this.state.email} name = "email" onChange={this.handleFrom}/><br/>
                    <input value = {this.state.phone} name = "phone" onChange={this.handleFrom}/>
                    <input value = {this.state.major} name = "major" onChange={this.handleFrom}/>
                    <input value = {this.state.interests} name = "interests" onChange={this.handleFrom}/>
                    <button onClick={this.addInfo}>add</button>
                </div>
                <div className="courses">
                    <h2>Add Student Courses</h2>
                    <input value = {this.state.uniCourse} name = "uniCourse" onChange={this.handleFrom}/>
                    <input value = {this.state.coursesKey} name = "coursesKey" onChange={this.handleFrom}/>
                    <input value = {this.state.coursesValue} name = "coursesValue" onChange={this.handleFrom}/>
                    <button onClick={this.addCourses}>add</button>
                </div>
            </div>
        )
    }
}
export default addInfo;
