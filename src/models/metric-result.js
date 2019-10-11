import Model from './model.js';

export default class MetricResult extends Model {
  /** @inheritdoc */
  static get callbackIdentifier() {
    return 'imageinstancemetricresult';
  }

  /** @inheritdoc */
  _initProperties() {
    super._initProperties();

    this.job = null;
    this.software = null;
    this.metric = null;
    this.image = null;
    this.value = null;
  }
}
