import React from "react";
import ChildComponent from "./ChildComponent";
import AddComponent from "./AddComponent";
class MyComponent extends React.Component {
    state = {
        arrJobs: [
            {id: 1, title: 'Developer', salary: '500'},
            {id: 2, title: 'Tester', salary: '300'},
            {id: 3, title: 'Data Engineer', salary: '1000'},
        ]
    }

    addNewJob = (job) => {
        console.log('Check job from parent:', job)  
        this.setState({
            arrJobs: [...this.state.arrJobs, job]
        })  
    }
    
    deleteJob = (job) => {
        let currentJob = this.state.arrJobs
        currentJob = currentJob.filter(item => item.id !== job.id)
        this.setState({
            arrJobs: currentJob
        })
    }

    componentDidUpdate(prevProps, prevState) {
        console.log('Run did update:', 'prev state:', prevState, 'current state:', this.state )
    }

    componentDidMount() {
        console.log('Run component did mount')
    }

    render() {
        return (
            <>
                <AddComponent 
                    addNewJob={this.addNewJob}
                />

                <ChildComponent
                    arrJobs={this.state.arrJobs}
                    deleteJob={this.deleteJob}
                />
            </>
        )
    }
}

export default MyComponent