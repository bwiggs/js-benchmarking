import Benchmark from 'benchmark';

import { network } from './flatten/testdata/network.js'
import {
  flatten_iteration,
  flatten_recursion,
  flatten_recursion_push,
  flatten_recursion_foreach,
  flatten_recursion_concat
} from "./flatten/flatten.js";

var suite = new Benchmark.Suite('flatten');
// add tests
suite
  .add('iteration', function () {
    flatten_iteration(network)
  })
  .add('recursion', function () {
    flatten_recursion(network)
  })
  .add('recursion (push spread)', function () {
    flatten_recursion_push(network)
  })
  .add('recursion (push spread foreach)', function () {
    flatten_recursion_foreach(network)
  })
  .add('recursion (concat)', function () {
    flatten_recursion_concat(network)
  })
  // add listeners
  .on('cycle', function (event) {
    console.log(String(event.target));
  })
  .on('complete', function () {
    console.log('Fastest is ' + this.filter('fastest').map('name'));
  })
  // run async
  .run({ 'async': true, });
