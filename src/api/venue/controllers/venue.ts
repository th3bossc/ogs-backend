/**
 * venue controller
 */

import { factories } from '@strapi/strapi'

export default factories.createCoreController('api::venue.venue', ({ strapi }) => ({
    async find(ctx) {
        const query = {
            ...ctx.query,
            populate: ['image', 'events']
        }

        ctx.query = query;
        return super.find(ctx);
    },

    async findOne(ctx) {
        const query = {
            ...ctx.query,
            populate: ['image', 'events']
        }

        ctx.query = query;
        return super.findOne(ctx);
    }
}));
