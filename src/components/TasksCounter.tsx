import styles from "./TasksCounter.module.css";

interface TasksCounterProps {
  tasksListLength: number;
  tasksDone: number;
}

export function TasksCounter({
  tasksListLength,
  tasksDone,
}: TasksCounterProps) {
  return (
    <div className={styles.TasksCount}>
      <div className={styles.TasksCreated}>
        <span>Tasks created</span>
        <span className={styles.Counter}>{tasksListLength}</span>
      </div>

      <div className={styles.TasksDone}>
        <span>Done</span>
        <span className={styles.Counter}>
          {tasksDone} of {tasksListLength}
        </span>
      </div>
    </div>
  );
}
