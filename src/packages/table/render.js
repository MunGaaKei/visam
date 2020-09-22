export default {
    functional: true,
    props: {
        render: Function,
    },
    render: (h, context) => {
        return context.props.render(h, undefined);
    }
}