class Logger {
  #colors = {
    info: '\x1b[32m', // 绿色
    warn: '\x1b[33m', // 黄色
    error: '\x1b[31m', // 红色
  };

  log(type: 'info' | 'warn' | 'error', message: string) {
    const color = this.#colors[type] || '';
    console.log(`${color}[es-checker][${type.toUpperCase()}] ${message}\x1b[0m`);
  }

  warn(message: string) {
    this.log('warn', message);
  }

  info(message: string) {
    this.log('info', message);
  }

  error(message: string) {
    this.log('error', message);
  }
}

export const logger = new Logger();