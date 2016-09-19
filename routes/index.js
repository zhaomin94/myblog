var express = require('express');

module.exports.autoroute = {
    'get': {
        '/': getIndex // 博客-首页
    }
};

// 博客-首页
function getIndex(req, res, next) {
	res.render('home/index', { title: '搜搜就出现' });
}
