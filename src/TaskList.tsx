export function TaskList({ tasks }: { tasks: String[]; }) {
  return <>
    <ul data-testid="task-list">
      {tasks.map((task, i) => {
        return <li key={`item-${task}`}>{`${i} ${task}`}</li>;
      })}
    </ul>
  </>;
}
