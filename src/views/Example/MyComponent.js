import React from "react";
import ChildComponent from "./ChildComponent";
class MyComponent extends React.Component {
    state = {
        firstName: 'Huynh Nhat',
        lastName: 'Vy',
        arrJobs: [
            {id: 1, title: 'Developer', salary: '500'},
            {id: 2, title: 'Tester', salary: '300'},
            {id: 3, title: 'Data Engineer', salary: '1000'},
        ]
    }

    handleChangeFirstName = (event) => {
        this.setState({
            firstName: event.target.value
        })
    }

    handleChangeLastName = (event) => {
        this.setState({
            lastName: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        console.log('>>> check data input:', this.state)
    }

    render() {
        return (
            <>
                <div className="main">
                    <form className="form">
                        <h3 className="heading">Thực hành form</h3>
                        <p className="desc">Học lập trình tại Hỏi Dân IT </p>
                        <div className="form-group">
                            <label htmlFor="firstName" className="form-label">Họ và tên đệm</label>
                            <input 
                                type="text" placeholder="VD: Huỳnh Nhật" className="form-control" 
                                onChange={(event) => this.handleChangeFirstName(event)}
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="lastName" className="form-label">Tên</label>
                            <input 
                                type="text" placeholder="VD: Vỹ" className="form-control" 
                                onChange={(event) => this.handleChangeLastName(event)}
                            />
                        </div>
                        <input
                            type="submit" value="Submit" className="form-submit"
                            onClick={(event) => this.handleSubmit(event)}
                        />
                    </form>
                </div>

                <ChildComponent
                    arrJobs={this.state.arrJobs}
                />
            </>
        )
    }
}

export default MyComponent