"use strict";
/*
++++++++++++++++++++++++++++++++++++++++++++++++++++
title      Nord module Unit Tests                  +
project    nord                                    +
repository https://github.com/arcticicestudio/nord +
author     Arctic Ice Studio                       +
email      development@arcticicestudio.com         +
copyright  Copyright (C) 2017                      +
++++++++++++++++++++++++++++++++++++++++++++++++++++

[References]
Jest
  https://facebook.github.io/jest
*/
import NORD, { POLARNIGHT, SNOWSTORM, FROST, AURORA } from "./nord";

test("NORD module colors are immutable", () => {
  expect(() => {
    NORD.nord0 = "#FFFFFF";
  }).toThrowError(TypeError);
  expect(NORD.nord0).toBe("#2E3440");
});

test("POLARNIGHT component colors are immutable", () => {
  expect(() => {
    POLARNIGHT.nord0 = "#FFFFFF";
  }).toThrowError(TypeError);
  expect(POLARNIGHT.nord0).toBe(NORD.nord0);
});

test("SNOWSTORM component colors are immutable", () => {
  expect(() => {
    SNOWSTORM.nord4 = "#FFFFFF";
  }).toThrowError(TypeError);
  expect(SNOWSTORM.nord4).toBe(NORD.nord4);
});

test("FROST component colors are immutable", () => {
  expect(() => {
    FROST.nord8 = "#FFFFFF";
  }).toThrowError(TypeError);
  expect(FROST.nord8).toBe(NORD.nord8);
});

test("AURORA component colors are immutable", () => {
  expect(() => {
    AURORA.nord11 = "#FFFFFF";
  }).toThrowError(TypeError);
  expect(AURORA.nord11).toBe(NORD.nord11);
});

test("NORD module returns correct color values", () => {
  expect(NORD.nord0).toBe("#2E3440");
  expect(NORD.nord1).toBe("#3B4252");
  expect(NORD.nord2).toBe("#434C5E");
  expect(NORD.nord3).toBe("#4C566A");
  expect(NORD.nord4).toBe("#D8DEE9");
  expect(NORD.nord5).toBe("#E5E9F0");
  expect(NORD.nord6).toBe("#ECEFF4");
  expect(NORD.nord7).toBe("#8FBCBB");
  expect(NORD.nord8).toBe("#88C0D0");
  expect(NORD.nord9).toBe("#81A1C1");
  expect(NORD.nord10).toBe("#5E81AC");
  expect(NORD.nord11).toBe("#BF616A");
  expect(NORD.nord12).toBe("#D08770");
  expect(NORD.nord13).toBe("#EBCB8B");
  expect(NORD.nord14).toBe("#A3BE8C");
  expect(NORD.nord15).toBe("#B48EAD");
});

test("POLARNIGHT component returns correct color values", () => {
  expect(POLARNIGHT.nord0).toBe(NORD.nord0);
  expect(POLARNIGHT.nord1).toBe(NORD.nord1);
  expect(POLARNIGHT.nord2).toBe(NORD.nord2);
  expect(POLARNIGHT.nord3).toBe(NORD.nord3);
});

test("SNOWSTORM component returns correct color values", () => {
  expect(SNOWSTORM.nord4).toBe(NORD.nord4);
  expect(SNOWSTORM.nord5).toBe(NORD.nord5);
  expect(SNOWSTORM.nord6).toBe(NORD.nord6);
});

test("FROST component returns correct color values", () => {
  expect(FROST.nord7).toBe(NORD.nord7);
  expect(FROST.nord8).toBe(NORD.nord8);
  expect(FROST.nord9).toBe(NORD.nord9);
  expect(FROST.nord10).toBe(NORD.nord10);
});

test("AURORA component returns correct color values", () => {
  expect(AURORA.nord11).toBe(NORD.nord11);
  expect(AURORA.nord12).toBe(NORD.nord12);
  expect(AURORA.nord13).toBe(NORD.nord13);
  expect(AURORA.nord14).toBe(NORD.nord14);
  expect(AURORA.nord15).toBe(NORD.nord15);
});

