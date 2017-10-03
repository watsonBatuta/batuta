var express = require('express');
var passport = require('passport');
var Strategy = require('passport-facebook').Strategy;
var FB = require('fb');
var request = require("request");
var accesstoken="";

var p = null;
var itens = {};
itens.contentItems=[];
var index = 0;


