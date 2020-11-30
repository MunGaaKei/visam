export default {
    functional: true,
    props: {
        render: Function,
        data: Object,
        row: Number,
        col: Number,
    },
    render: (h, context) => {
        const { render, data, row, col } = context.props;
        return render(h, {
            row,
            col,
            data
        });
    }
}