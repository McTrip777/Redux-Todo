export const NEW_TASK = 'NEW_TASK';

export const addTask = taskName => {
    return {
      type: NEW_TASK,
      task: taskName
    };
  };