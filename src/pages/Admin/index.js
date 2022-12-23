import React, { Component } from 'react'
import Layout from '../../component/Layout'
import Header from '../../component/Header'
import Menu from '../../component/Menu'
import Welcome from '../../pages/Welcome'
import student from '../../pages/Student'
import Students from '../../pages/Students'
import TransitionRoute from '../../component/TransitionRoute'
import projectList from '../../pages/Projects'
import Courses from '../../pages/Courses'
import addInfo from "../AddInfo"
import deleteInfo from "../DeleteInfo";
import projects from "../Project";
import addProject from "../addProject";
import deleteProject from "../deleteProject";


export default class Admin extends Component {
    render() {
        return (
            <Layout header={<Header/>}
                    aside={<Menu />}>
                <TransitionRoute path="/" exact component={Welcome}></TransitionRoute>
                <TransitionRoute path='/Students' exact component={Students}/>
                <TransitionRoute path='/student' exact component={student}/>
                <TransitionRoute path='/projectList' exact component={projectList}/>
                <TransitionRoute path='/courses' exact component={Courses}/>
                <TransitionRoute path='/addInfo' exact component={addInfo}/>
                <TransitionRoute path='/deleteInfo' exact component={deleteInfo}/>
                <TransitionRoute path='/projects' exact component={projects}/>
                <TransitionRoute path='/addProject' exact component={addProject}/>
                <TransitionRoute path='/deleteProject' exact component={deleteProject}/>
            </Layout>
        )
    }
}
