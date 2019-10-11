import Collection from './collection.js';
import MetricResult from '../models/metric-result.js';

export default class MetricResultCollection extends Collection {

  /** @inheritdoc */
  static get model() {
    return MetricResult;
  }

  /** @inheritdoc */
  static get allowedFilters() {
    return [null, 'job'];
  }
}
