import React, { Component } from 'react';
import './App.css';
import TaskList from './components/TaskList';
import TaskForm from './components/TaskForm';
import TaskControl from './components/TaskControl';
import { connect } from 'react-redux';
import * as action from './redux/action/index'

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            sortBy: 'name',
            sortValue: 1
        };
    }

    componentWillMount() {
        if (localStorage && localStorage.getItem('tasks')) {
            var tasks = JSON.parse(localStorage.getItem('tasks'));
            this.setState({
                tasks: tasks
            });
        }
    }

    findIndex = (id) => {
        var { tasks } = this.state;
        var result = -1;
        tasks.forEach((task, index) => {
            if (task.id === id) {
                result = index;
            }
        });
        return result;
    }

    // onUpdateStatus = (id) => {
    //     var tasks = this.state.tasks;
    //     var index = this.findIndex(id);
    //     tasks[index].status = !tasks[index].status;
    //     this.setState({
    //         tasks : tasks
    //     });
    //     localStorage.setItem('tasks', JSON.stringify(tasks));
    // }

    // onSave = (data) => {
    //     var tasks = this.state.tasks;
    //     data.status = data.status === 'true' ? true : false;
    //     if(data.id === ''){
    //         data.id = this.guid();
    //         tasks.push(data);
    //     }else{
    //         var index = this.findIndex(data.id);
    //         tasks[index] = data;
    //     }
    //     this.setState({
    //         tasks : tasks
    //     });
    //     localStorage.setItem('tasks', JSON.stringify(tasks));
    // }

    onToggleForm = () => {
        var { itemEditing } = this.props;
        if (itemEditing && itemEditing.id !== '') {
            this.props.onOpenForm();
        } else {
            this.props.onToggleForm();
        }
        this.props.onClearTask({
            id: '',
            name: '',
            status: false
        })
    }

    // onDeleteTask = (id) => {
    //     var { tasks } = this.state;
    //     var index = this.findIndex(id);
    //     tasks.splice(index, 1);
    //     this.setState({
    //         tasks : tasks
    //     });
    //     localStorage.setItem('tasks', JSON.stringify(tasks));
    //     this.onExitForm();
    // }

    onSearch = (keyword) => {
        this.setState({
            keyword: keyword
        });
    }

    onSort = (sortBy, sortValue) => {
        this.setState({
            sortBy: sortBy,
            sortValue: sortValue
        })
    }

    render() {
        var {
            tasks,
            sortBy,
            sortValue
        } = this.state;

        var { isDisplayForm, itemEditing } = this.props;

        if (sortBy === 'name') {
            tasks.sort((a, b) => {
                if (a.name > b.name) return sortValue;
                else if (a.name < b.name) return -sortValue;
                else return 0;
            });
        } else {
            tasks.sort((a, b) => {
                if (a.status > b.status) return -sortValue;
                else if (a.status < b.status) return sortValue;
                else return 0;
            });
        }
        var elmForm = isDisplayForm === true ? <TaskForm
            itemEditing={itemEditing}
        /> : '';
        return (
            <div className="container">
                <div className="text-center">
                    <h1>Quản Lý Công Việc</h1><hr />
                </div>
                <div className="row">
                    <div className={isDisplayForm === true ? 'col-xs-4 col-sm-4 col-md-4 col-lg-4' : ''}>
                        {elmForm}
                    </div>
                    <div className={isDisplayForm === true ? 'col-xs-8 col-sm-8 col-md-8 col-lg-8' : 'col-xs-12 col-sm-12 col-md-12 col-lg-12'}>
                        <button type="button" className="btn btn-primary" onClick={this.onToggleForm} >
                            <span className="fa fa-plus mr-5"></span>Thêm Công Việc
                        </button>
                        <TaskControl
                            onSearch={this.onSearch}
                            onSort={this.onSort}
                            sortBy={sortBy}
                            sortValue={sortValue}
                        />
                        <TaskList />
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        isDisplayForm: state.form,
        itemEditing: state.updateTask
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        onToggleForm: () => {
            dispatch(action.toggleForm());
        },
        onClearTask: (task) => {
            dispatch(action.updateTask(task))
        },
        onOpenForm: () => {
            dispatch(action.openForm());
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
