import Collection from './collection.js';
import Metric from '../models/metric.js';

export default class MetricCollection extends Collection {

  /** @inheritdoc */
  static get model() {
    return Metric;
  }

  /** @inheritdoc */
  static get allowedFilters() {
    return [null, 'discipline'];
  }
}
