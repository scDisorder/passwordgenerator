// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import register from "../../../utils/_prometheus_registry";

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    register.getMetricsAsJSON().then(metrics => {
        res.status(200).json(metrics);
    }).catch(err => {
        console.error('Unable to collect metrics', err);
        res.send('failed to collect metrics');
    });
}
