/**
 * event controller
 */

import { factories } from '@strapi/strapi'

export default factories.createCoreController('api::event.event', ({ strapi }) => ({
    async find(ctx) {
        const query = {
            ...ctx.query,
            populate: ['image', 'venue']
        }

        ctx.query = query;
        return super.find(ctx);
    },

    async findOne(ctx) {
        const query = {
            ...ctx.query,
            populate: ['image', 'venue']
        }

        ctx.query = query;
        return super.findOne(ctx);
    }
}));
