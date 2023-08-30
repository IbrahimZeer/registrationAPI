import createError from 'http-errors';
import express from 'express';
import logger from 'morgan';
import dataSource from './db/dataSource.js';


const PORT = 5000;
