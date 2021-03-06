import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as action from '../redux/action/index';

class TaskItem extends Component {

    showStatusElement(){
        return (
            <span
                className={ this.props.task.status ? 'label label-danger' : 'label label-info' }
                onClick={ this.onUpdateStatus }
            >{ this.props.task.status === true ? 'Kích Hoạt' : 'Ẩn' }</span>
        );
    }

    onUpdateStatus = () => {
        this.props.onUpdateStatus(this.props.task.id);
    }

    onDeleteItem = () => {
        this.props.onDeleteTodo(this.props.task.id);
    }

    onSelectedItem = () => {
        this.props.onOpenForm();
        this.props.onUpdateTask(this.props.task)
    }

    render() {
        return (
            <tr>
                <td>{ this.props.index }</td>
                <td>{ this.props.task.name }</td>
                <td className="text-center">
                    { this.showStatusElement() }
                </td>
                <td className="text-center">
                    <button type="button" className="btn btn-warning" onClick={ this.onSelectedItem }>
                        <span className="fa fa-pencil mr-5"></span>Sửa
                    </button>
                    &nbsp;
                    <button type="button" className="btn btn-danger" onClick={ this.onDeleteItem }>
                        <span className="fa fa-trash mr-5"></span>Xóa
                    </button>
                </td>
            </tr>
        );
    }
}

const mapStateToProps = state => {
    return {

    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        onUpdateStatus: (id) => {
            dispatch(action.updateStatus(id))
        },
        onDeleteTodo: (id) => {
            dispatch(action.deleteTodo(id))
        },
        onOpenForm: () => {
            dispatch(action.openForm());
        },
        onUpdateTask: (task) => {
            dispatch(action.updateTask(task))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TaskItem);
