export default {
    functional: true,
    props: {
        render: Function,
        data: Object,
        text: String,
        row: Number,
        col: Number,
    },
    render: (h, context) => {
        const { render, data, text, row, col } = context.props;
        console.log(context);
        return render? render(h, {
            row: row,
            col: col,
            data: data,
        }): context._v(text);
    }
}