const { updateOrCreateLogInstance, log, audit, trace, traceId, system } = require('./log.config');

process.env.NODE_ENV = 'development';
updateOrCreateLogInstance();

log('user').info('这是用户模块的开发日志');
audit('pay').error('这是支付模块的审计日志');
trace('http', {
    traceId: traceId(),
    spanId: traceId(),
    parentSpanId: traceId()
}).info('这是服务之间的http请求的追踪日志');
system('db').warn('这是系统的数据库操作的警告日志');
log().debug('这是常规开发日志');
