// allow Node.js run
if (typeof global !== 'undefined' && typeof Element === 'undefined')
    global.Element = function Element() {}

const merge = (...objects) => {
    const last = objects[objects.length - 1]
    if (last && typeof last !== 'object') return last
    if ([Date, Element, Map, Set, WeakMap, WeakSet].find(Proto => last instanceof Proto)) return last

    let first = objects.shift()
    if (!first) return last

    if (objects.length > 1) {
        while (objects.length) {
            const second = objects.shift()
            first = merge(first, second)
        }

        return first
    }

    if (last === undefined) return first
    if (typeof first !== typeof last) return last

    if (first instanceof Array && last instanceof Array) {
        return Array.from(
            {length: Math.max(first.length, last.length)},
            (_, i) => merge(first[i], last[i])
        )
    }

    if (first instanceof Array) {
        return first.map(item => merge(item, last))
    }

    if (last instanceof Array) {
        return last.map(item => merge(first, item))
    }

    if (first.toString() !== last.toString()) return last

    const merged = {};

    let keys = [...new Set([...Object.keys(first), ...Object.keys(last)])];
    keys.forEach(key => {
        merged[key] = merge(first[key], last[key])
    })

    return merged
}

export default merge
