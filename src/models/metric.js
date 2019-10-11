import Model from './model.js';

export default class Metric extends Model {
  /** @inheritdoc */
  static get callbackIdentifier() {
    return 'metric';
  }

  /** @inheritdoc */
  _initProperties() {
    super._initProperties();

    this.name = null;
    this.shortName = null;
    this.disciplines = null;
  }
}
