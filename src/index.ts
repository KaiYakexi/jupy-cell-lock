import {
  JupyterFrontEnd,
  JupyterFrontEndPlugin
} from '@jupyterlab/application';

/**
 * Initialization data for the cell-lock extension.
 */
const plugin: JupyterFrontEndPlugin<void> = {
  id: 'cell-lock:plugin',
  description: 'A JupyterLab extension for cell lock.',
  autoStart: true,
  activate: (app: JupyterFrontEnd) => {
    console.log('JupyterLab extension cell-lock is activated!');
  }
};

export default plugin;
