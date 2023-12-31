
import { Request, Response, Router } from 'express';

import { BaconServiceFactory } from '../../../services/ServiceFactory';
import { handleCaughtError } from '../../../utils/helpers';

// import { logger } from '../../../utils/logger';
// import { BaconFeatureList } from '../../../types';


export const actorRouter = Router({ mergeParams: true });







async function handleGetActorFeatures(req: Request, res: Response) {
    try {
        // console.log('req.params', req.params)
        if (!req.params.actor_id) throw new Error('no actor id');

        const actorService = BaconServiceFactory.createActorService({ actor_id: +req.params.actor_id });
        const featureListResult = await actorService.getFeaturesForActor();
        if (!featureListResult) {
            return res.status(404).json({ message: 'cannot find any features for the requested actor ID.' });
        }
        return res.status(200).json({ id: req.params.actor_id, features: featureListResult });
    } catch (error) {
        handleCaughtError(res, error as Error, 'handleGetActorFeatures');
    }
}





actorRouter.get('/:actor_id/features', (req, res, next) => {
    /* #swagger.responses[200] = {
        description: "Get all features for an actor",
        content: {
            "application/json": {
                schema:{
                    $ref: "#/components/schemas/BaconFeatureList"
                }
            }           
        }
    } 
*/
    handleGetActorFeatures(req, res).catch(next);
});