import axios from "axios";
import {addTaskDTO, TaskType} from '../store/reducers/taskReducer';


const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.1/',
    withCredentials: true,
    headers: {
        "API-KEY": '95828b39-ca1b-43bb-b89e-db3b0c2ce183'
    }
})

export const authApi  =  {
    authMe: ()=> {
        return instance.get('auth/me')
    },
    login: (email: string, password:string, rememberMe?: boolean, captcha?: boolean)=> {
        return instance.post('auth/login', {email, password})

    },
    logout: ()=>{
        return instance.delete('auth/login')
    }
}
export const todolistApi = {
    getTodolists: () => {
        return instance.get('todo-lists')
    },
    addTodolist: (title: string) => {
        return instance.post('todo-lists', {title})
    },
    deleteTodolist: (todoId:string)=> {
        return instance.delete(`todo-lists/${todoId}`)
    },
    changeTodolist: (todoId: string, title: string)=> {
        return instance.put(`todo-lists/${todoId}`, {title})
    }
}
export const tasksApi = {
    getTasks: (todoId: string) => {
        return instance.get(`todo-lists/${todoId}/tasks`)
    },
    addTask: (task: addTaskDTO) => {
        return instance.post(`todo-lists/${task.todoId}/tasks`, {title: task.title})
    },
    deleteTask: (todoId: string, taskId: string)=> {
        return instance.delete(`todo-lists/${todoId}/tasks/${taskId}`)
    },
    changeTask: (todoId: string, taskId: string, task: TaskType)=> {
        console.log('123')
        // console.log(task)

        return instance.put(`todo-lists/${todoId}/tasks/${taskId}`, task)
    }
}