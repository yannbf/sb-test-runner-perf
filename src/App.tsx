import { useState } from "react";
import "./App.css";
import { useForm, SubmitHandler } from "react-hook-form";
import { TaskList } from "./TaskList";

type Inputs = {
  task: string;
};

export function App() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const [tasks, setTasks] = useState<string[]>([]);

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    setTasks([...tasks, data.task]);
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="task-name">Enter a task</label>
        <br />
        <input id="task-name" {...register("task")} />
        <input type="submit" />
      </form>
      <TaskList tasks={tasks}></TaskList>
    </div>
  );
}
