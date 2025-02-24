import {
  JupyterFrontEnd,
  JupyterFrontEndPlugin
} from '@jupyterlab/application';
import {
  INotebookTracker
} from '@jupyterlab/notebook'
/**
 * Initialization data for the cell-lock extension.
 */
const plugin: JupyterFrontEndPlugin<void> = {
  id: 'cell-lock:plugin',
  description: 'A JupyterLab extension for cell lock.',
  autoStart: true,
  activate: (app: JupyterFrontEnd, notebookTracker: INotebookTracker) => {
    console.log('JupyterLab extension cell-lock is activated!');

    // Disable the "insert above" command
    app.commands.addCommand('notebook:insert-cell-above', {
      execute: () => {
        console.warn('Adding cells above is disabled.');
      },
      label: 'Insert Cell Above',
      isEnabled: () => false,
    });

    // Disable the "insert below" command
    app.commands.addCommand('notebook:insert-cell-below', {
      execute: () => {
        console.warn('Adding cells below is disabled.');
      },
      label: 'Insert Cell Below',
      isEnabled: () => false, 
    });

    // Disable the "insert cell" command
    app.commands.addCommand('notebook:insert-cell', {
      execute: () => {
        console.warn('Adding new cells is disabled.');
      },
      label: 'Insert Cell',
      isEnabled: () => false, 
    });

    // Disable the "duplicate cell below" command
    app.commands.addCommand('notebook:duplicate-below', {
      execute: () => {
        console.warn('Duplicating cells below is disabled.');
      },
      label: 'Duplicate Cell Below',
      isEnabled: () => false, 
    });
  }
};

export default plugin;
