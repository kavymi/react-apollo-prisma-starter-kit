const { getUserId } = require('../utils')

const Query = {
  async feed(parent, args, ctx, info) {

    const where = args.filter
    ? {
        OR: [
          { title_contains: args.filter },
        ],
        isPublished: true
      }
    : { isPublished: true }

    const queriedLinks = await ctx.db.query.posts(
      { where, skip: args.skip, first: args.first, orderBy: args.orderBy },
      `{ id }`,
    )

    const countSelectionSet = `
      {
        aggregate { 
          count
        }
      }
    `
    
    const postsConnection = await ctx.db.query.postsConnection({}, countSelectionSet)

    return {
      count: postsConnection.aggregate.count,
      postIds: queriedLinks.map(link => link.id),
    }
  },

  async drafts(parent, args, ctx, info) {
    const id = getUserId(ctx)

    const where = {
      isPublished: false,
      author: {
        id
      }
    }

    return ctx.db.query.posts({ where }, info)
  },

  async post(parent, { id }, ctx, info) {
    return ctx.db.query.post({ where: { id } }, info)
  },

  async me(parent, args, ctx, info) {
    const id = getUserId(ctx)
    return ctx.db.query.user({ where: { id } }, info)
  },
}

module.exports = { Query }
