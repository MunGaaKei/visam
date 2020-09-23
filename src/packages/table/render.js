export default {
    functional: true,
    props: {
        render: Function,
        data: Object,
        row: Number,
        col: Number,
    },
    render: (h, context) => context.props.render(h, {
        row: context.props.row,
        col: context.props.col,
        data: context.props.data,

    })
}