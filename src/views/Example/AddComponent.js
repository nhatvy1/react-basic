import React from "react";

class AddComponent extends React.Component {
    state = {
        title: '',
        salary: '',
    }

    handleChangeTitleJob = (event) => {
        this.setState({
            title: event.target.value
        })
    }

    handleChangeSalary = (event) => {
        this.setState({
            salary: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        console.log('>>> check data input:', this.state)
        if (!this.state.title || !this.state.salary) {
            alert('Missing requied params')
            return
        }
        this.props.addNewJob({
            id: Math.floor(Math.random()*1001),
            title: this.state.title,
            salary: this.state.salary
        })

        this.setState({
            title: '',
            salary: ''
        })
    }

    render() {
        return (
            <div className="main">
                    <form className="form">
                        <h3 className="heading">Thực hành form</h3>
                        <p className="desc">Học lập trình tại Hỏi Dân IT </p>
                        <div className="form-group">
                            <label htmlFor="title" className="form-label">Job title</label>
                            <input 
                                type="text" placeholder="VD:Front end" className="form-control" 
                                onChange={(event) => this.handleChangeTitleJob(event)}
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="salary" className="form-label">Salary</label>
                            <input 
                                type="text" placeholder="VD: 1000" className="form-control" 
                                onChange={(event) => this.handleChangeSalary(event)}
                            />
                        </div>
                        <input
                            type="submit" value="Submit" className="form-submit"
                            onClick={(event) => this.handleSubmit(event)}
                        />
                    </form>
                </div>
        )
    }
}

export default AddComponent