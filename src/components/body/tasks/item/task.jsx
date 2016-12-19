import './task.scss';
import InlineEdit from 'src/components/custom/inline-edit/inline-edit';
import Collapse from 'src/components/custom/collapse/collapse';

class Task extends React.Component {
    constructor(props) {
        super(props);
    }

    openAddNestedTaskForm() {
        this.inlineAddNested.activate();
    }

    openEditTaskForm() {
        this.inlineEdit.activate();
    }

    selectTask(event, taskId) {
        event.preventDefault();
        this.props.onSelectTask(taskId);
    }

    addNestedTask(parentId, name) {
        this.props.onAddTask(name, parentId);
    }

    getCollapse() {
        if (this.props.hasChildren) {
            return <Collapse block={`[data-expandable-for="${this.props.item.id}"]`} expanded={false} />
        }
    }

    render() {
        let item = this.props.item;

        return <li className="list-item">

            <InlineEdit ref={inlineEdit => this.inlineEdit = inlineEdit}
                        onSubmit={this.props.onEditTask}
                        id={item.id} value={item.name} />

            <InlineEdit ref={inlineEdit => this.inlineAddNested = inlineEdit}
                        onSubmit={() => this.addNestedTask(item.id)}
                        value={`${item.name}_sub`} />

            <div>
                {this.getCollapse()}
                <a href="#" onClick={event => this.selectTask(event, item.id)}>{item.name}</a>
                <button type="button"
                        className="edit-task mdl-button mdl-js-button mdl-button--icon"
                        onClick={() => this.openEditTaskForm(item.id)}>
                    <i className="material-icons">mode_edit</i>
                </button>
            </div>
            <div>
                <button type="button"
                        className="mdl-button mdl-js-button mdl-button--icon"
                        onClick={() => this.props.onRemove(item.id)}>
                    <i className="material-icons">delete_forever</i>
                </button>
                <button type="submit"
                        className="mdl-button mdl-js-button mdl-button--icon"
                        onClick={() => this.openAddNestedTaskForm(item.id)}>
                    <i className="material-icons">add</i>
                </button>
            </div>
        </li>;
    }
}

export default Task;
