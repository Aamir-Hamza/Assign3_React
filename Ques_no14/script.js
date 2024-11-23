// Issue: The " Add Task" button allowed adding empty tasks.
// Solution: Added a validation in handleAddTask using task.trim(). If the task is empty or whitespace an alert is shown and  the function exits early.
//2 Adding Strike-Trough for completed tasks:
// Issue: Completed tasks were not visually distingushable .
// Solution: Added a isCompleted property for tasks. USed the textDecoration style with a condition (task.isCompleted ? "line-trhough":"none") to visually mark completed taks
//3 Deleting the Correct Task:
// Issue: "Deleting a task" button sometimes deleted the wrong task.
// Solution: Added a uniquw id for each task using Date.now(). The handledelete function now filters tasks absed on this unique id, ensuring the correct task is removed
/// Here is solution


const TodoList = () => {
    const [tasks, setTasks] = React.useState([]); // List of tasks
    const [task, setTask] = React.useState(""); // Current task input

    // Add Task
    const handleAddTask = () => {
        if (task.trim() === "") {
            alert("Task cannot be empty.");
            return;
        }

        setTasks((prevTasks) => [
            ...prevTasks,
            { id: Date.now(), text: task, isCompleted: false },
        ]);
        setTask(""); // Clear input field
    };

    // Toggle Task Completion
    const handleToggleComplete = (id) => {
        setTasks((prevTasks) =>
            prevTasks.map((task) =>
                task.id === id ? { ...task, isCompleted: !task.isCompleted } : task
            )
        );
    };

    // Delete Task
    const handleDeleteTask = (id) => {
        setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
    };

    return (
        <div style={{ padding: "20px", textAlign: "center" }}>
            <h1>To-Do List</h1>
            <div>
                <input
                    type="text"
                    placeholder="Add a new task"
                    value={task}
                    onChange={(e) => setTask(e.target.value)}
                    style={{ padding: "5px", width: "200px", marginRight: "10px" }}
                />
                <button onClick={handleAddTask} style={{ padding: "5px 10px" }}>
                    Add Task
                </button>
            </div>
            <ul style={{ listStyleType: "none", padding: "0", marginTop: "20px" }}>
                {tasks.map((task) => (
                    <li
                        key={task.id}
                        style={{
                            textDecoration: task.isCompleted ? "line-through" : "none",
                            padding: "10px",
                            border: "1px solid #ddd",
                            marginBottom: "10px",
                            borderRadius: "5px",
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                        }}
                    >
                        <span
                            onClick={() => handleToggleComplete(task.id)}
                            style={{ cursor: "pointer", flex: 1, textAlign: "left" }}
                        >
                            {task.text}
                        </span>
                        <button
                            onClick={() => handleDeleteTask(task.id)}
                            style={{ padding: "5px 10px", background: "red", color: "white" }}
                        >
                            Delete
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

function App() {
    return (<>
        <TodoList />

    </>)
}




const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<App />)