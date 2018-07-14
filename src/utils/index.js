export const merge = (...objs) => (
    JSON.parse(JSON.stringify(
        objs.reduce((acc, obj) => Object.assign(acc, obj), {})
    ))
);