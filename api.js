import Appbase from 'appbase-js';

import CONFIG from './../constants/Config';

class taskModel {
  constructor(key) {
    this.key = key;
    this.tasks = [];
    this.onChanges = [];
    this.appbaseRef = new Appbase({
      url: CONFIG.url,
      app: CONFIG.app,
      credentials: CONFIG.credentials,
      type: CONFIG.type,
    });
  }

  add(task) {
    const body = {
      title: task.title,
      completed: task.completed,
      createdAt: Date.now(),
    };

    this.appbaseRef
      .index({
        type: CONFIG.type,
        body,
      })
      .on('data', (response) => {
        console.log('@api - add', response);
      })
      .on('error', (error) => {
        console.error('@api - add', error);
      });
  }

  update = (editedTask) => {
    const { _id, ...task } = editedTask;

    this.appbaseRef
      .update({
        type: CONFIG.type,
        id: _id,
        body: {
          doc: {
            title: task.title,
            completed: task.completed,
          },
        },
      })
      .on('data', (response) => {
        console.log('@api - update', response);
      })
      .on('error', (error) => {
        console.error('@api - update', error);
      });
  };

  destroy = (task) => {
    this.appbaseRef
      .delete({
        type: CONFIG.type,
        id: task._id,
      })
      .on('data', (response) => {
        console.log('@api - destroy: ', response);
      })
      .on('error', (error) => {
        console.error('@api - destroy: ', error);
      });
  };
}

export default taskModel;
