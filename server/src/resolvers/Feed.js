const Feed =  {
    async posts(parent, args, ctx, info) {
        return ctx.db.query.posts({ where: { id_in: parent.postIds } }, info)
    }
}

module.exports = {
    Feed,
}