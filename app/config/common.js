const commonConfig = {
  // Common config shared by dev and prod comes here...
  node: {
    startupMaxRetry: 5,
    startupTimeout: 5000,
    shutDownTimeout: 10000,
    killTimeout: 10000,
    updateTimeout: 10000,
  },
  jsonRpc: {
    localUrl: 'http://localhost:9933',
    remoteUrl: 'http://cennznet-node-0.centrality.cloud:9933',
  },
  webSocket: {
    localStreamUrl: 'ws://localhost:9944',
    remoteStreamUrl: 'ws://localhost:9944',
    latency: {
      period: 5 * 1000,
      signalLevel: {
        full: {
          level: 3,
          latency: [0, 100],
        },
        medium: {
          level: 2,
          latency: [100, 300],
        },
        weak: {
          level: 1,
          latency: [300, Infinity],
        },
      },
    },
  },
};

export default commonConfig;
