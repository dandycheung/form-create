const BaseParser = {
    init(ctx) {
    },
    toFormValue(value, ctx) {
        return value
    },
    toValue(formValue, ctx) {
        return formValue;
    },
    mounted(ctx) {
    },
    render(children, ctx) {
        ctx.$render.defaultRender(ctx, children);
    },
    mergeProp(ctx) {
    }
}

export default BaseParser;
