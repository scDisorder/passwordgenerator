
import { Registry, collectDefaultMetrics } from 'prom-client';

// Create a Registry which registers the metrics
const register = new Registry();
// Add a default label which is added to all metrics
register.setDefaultLabels({
    app: 'control-plane-react-ui'
});
// collect default metrics with registry
collectDefaultMetrics({
    register
});

export default register;
