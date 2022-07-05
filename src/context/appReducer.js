export const appReducer = (state ,action) => {

    switch (action.type) {
        case 'ADD_TASK':
            return  {
                tasks: [...state.tasks, action.payload]
            }
        case 'DELETE_TASK':
            return {
                tasks: state.tasks.filter(task => task.id !== action.payload)
            }
        case 'UPDATE_TASK':
            const updatedTask = action.payload
            const updatedTaskSingle = state.tasks.map(task => {
                if(task.id === updatedTask.id){
                    task.title = updatedTask.title
                    task.description = updatedTask.description
                }
                return task
            })

            return {
                tasks: updatedTaskSingle
            }
        case 'TOGGLE_TASK':
            const doneTask = action.payload
            return {
                tasks: state.tasks.map(task => task.id === doneTask ? {...task, done : !task.done} : task)
            }
        default:
            return state;
    }

    
    
}