import { startProxySync } from './proxy-server/proxy-server'
import { startApi } from './api-server/api-server'

startApi();
startProxySync();
