import { expect, test } from 'vitest';
import { network } from './testdata/network'
import {
  flatten_iteration,
  flatten_recursion,
  flatten_recursion_push,
  flatten_recursion_foreach,
  flatten_recursion_concat } from "./flatten";

const expected_result = [
  "0.0.0.0",
  "1.1.1.1",
  "1.2.1.1",
  "1.2.2.1",
  "1.2.2.2",
  "1.2.2.3",
  "1.2.1.2",
  "1.2.1.3",
  "2.1.1.1",
  "2.2.1.1",
  "2.2.2.1",
  "2.2.2.2",
  "2.2.2.3",
  "2.2.2.4",
  "2.2.2.5",
  "2.2.1.2",
  "2.2.1.3",
  "2.2.1.4",
  "2.2.1.5",
  "2.2.1.6",
  "2.2.1.7",
].sort();

test('flatten_iteration', () => {
  const result = flatten_iteration(network);
  expect(result.sort()).to.eql(expected_result);
});

test('flatten_recursion', () => {
  const result = flatten_recursion(network);
  expect(result.sort()).to.eql(expected_result);
});

test('flatten_recursion_push', () => {
  const result = flatten_recursion_push(network);
  expect(result.sort()).to.eql(expected_result);
});

test('flatten_recursion_foreach', () => {
  const result = flatten_recursion_foreach(network);
  expect(result.sort()).to.eql(expected_result);
});

test('flatten_recursion_concat', () => {
  const result = flatten_recursion_concat(network);
  expect(result.sort()).to.eql(expected_result);
});