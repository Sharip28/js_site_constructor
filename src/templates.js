
import {row, col, css} from './utils'

function title(block) {
    const {tag = 'h1', styles} = block.options
    return row(col(`<${tag}>${block.value}</${tag}>`), css(styles))
}
function text(block){
    return row(col(`<p>${block.value}</p>
`), css(block.options.styles))
}
function columns(block){ 
    let html = block.value.map(col).join('')
    return row(html, css(block.options.styles))
}

function image(block){
    return row(`<img src="${block.value}" />
    `, css(block.options.styles))
}

export const templates = {
    title,
    text,
    image,
    columns
}