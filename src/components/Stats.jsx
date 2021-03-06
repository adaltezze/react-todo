import React from 'react';

export default function Stats(props) {
    let total = props.todos.length;
    let completed = props.todos.filter(todo => todo.completed).length;
    let notCompleted = total - completed;

    return (
        <table className="table table-borderless col-auto w-auto mb-0">
            <tbody>
                <tr>
                    <th>Всего задач:</th>
                    <td>{total}</td>
                </tr>
                <tr>
                    <th>Выполнено задач:</th>
                    <td>{completed}</td>
                </tr>
                <tr>
                    <th>Осталось задач:</th>
                    <td>{notCompleted}</td>
                </tr>
            </tbody>
        </table>
    );
}

Stats.propTypes = {
    todos: React.PropTypes.array.isRequired,
};